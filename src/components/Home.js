import React from 'react';
import './App.css';
import './styles.css'; 
import logo from './logo.png'; 

function Home() {
  return (
    <div className="App">
      <div className="sidebar">
        <img src={logo} alt="Absa logo" className="logo" />
        <a href="/signup" style={{ fontWeight: 'bold' }}>Login</a>
        <a href="/signup" style={{ fontWeight: 'bold' }}>Register</a>
      </div>
      
      <div className="main">
        <main>
          <div className="wrapper-main">
            <section>
              <h2>About Our System</h2>
              <p>The Payroll Management System by ABSA is designed to help businesses manage employee payroll efficiently. With features such as employee management, payroll processing, and reporting, our system simplifies the administrative tasks associated with payroll.</p>
              <h2>Additional Key Features</h2>
              <ul>
                <li>User authentication for secure access</li>
                <li>Manage company profiles and employee records</li>
                <li>Automated salary payment processing</li>
                <li>Benefits and deductions management</li>
                <li>Tax calculation and compliance tracking</li>
                <li>Comprehensive reporting and analytics tools</li>
              </ul>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
