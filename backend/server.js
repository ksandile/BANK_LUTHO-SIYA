// server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { Pool } = require('pg'); // PostgreSQL client
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Initialize dotenv for environment variables
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); // To handle JSON requests

// PostgreSQL connection setup
const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

// User Authentication Routes (Sign Up / Sign In)
app.post('/signup', async (req, res) => {
  const { companyName, companyEmail, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const result = await pool.query(
      'INSERT INTO users (company_name, company_email, password) VALUES ($1, $2, $3) RETURNING *',
      [companyName, companyEmail, hashedPassword]
    );
    res.status(201).json({ message: 'User created', user: result.rows[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating user' });
  }
});

app.post('/signin', async (req, res) => {
  const { companyEmail, password } = req.body;

  try {
    const result = await pool.query(
      'SELECT * FROM users WHERE company_email = $1',
      [companyEmail]
    );

    if (result.rows.length === 0) {
      return res.status(400).json({ message: 'User not found' });
    }

    const user = result.rows[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Create JWT Token
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.json({ message: 'Logged in successfully', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error logging in' });
  }
});

// Protect Routes with JWT Authentication
const authenticateJWT = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1]; // Bearer token
  if (!token) {
    return res.status(403).json({ message: 'No token provided' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }
    req.user = user;
    next();
  });
};

// Employee Management Routes
app.post('/add-employee', authenticateJWT, async (req, res) => {
  const { name, position, salary } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO employees (name, position, salary) VALUES ($1, $2, $3) RETURNING *',
      [name, position, salary]
    );
    res.status(201).json({ message: 'Employee added', employee: result.rows[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error adding employee' });
  }
});

// Payroll Routes
app.post('/process-payroll', authenticateJWT, async (req, res) => {
  const { employeeId, amount } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO payroll (employee_id, amount) VALUES ($1, $2) RETURNING *',
      [employeeId, amount]
    );
    res.status(201).json({ message: 'Payroll processed', payroll: result.rows[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error processing payroll' });
  }
});

// Reporting Routes
app.get('/salary-report', authenticateJWT, async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM payroll');
    res.json({ salaryReport: result.rows });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching salary report' });
  }
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
