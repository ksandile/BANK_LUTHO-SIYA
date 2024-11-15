import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './styles.css'; // Assuming you have styles in styles.css


const Payroll = () => {
  const [payrollDate, setPayrollDate] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [salaryAmount, setSalaryAmount] = useState('');
  const [employees, setEmployees] = useState([]); // Placeholder for employees data
  const [payrollHistory, setPayrollHistory] = useState([]);

  useEffect(() => {
    // Fetch employees or setup initial state
    setEmployees([
      { id: 1, name: 'Aphiwe Mesilane' },
      { id: 2, name: 'Yuri Nelson' },
    ]);
  }, []);

  const handleProcessPayroll = (e) => {
    e.preventDefault();
    const newPayrollEntry = {
      date: payrollDate,
      employeeName: employees.find((emp) => emp.id === parseInt(employeeId))?.name,
      amountPaid: salaryAmount,
    };
    setPayrollHistory([...payrollHistory, newPayrollEntry]);
    setPayrollDate('');
    setEmployeeId('');
    setSalaryAmount('');
  };

  return (
    <div className="payroll">
      <div className="sidebar">
        <img src="logo.png" alt="Logo" className="logo" />
        <Link to="/dashboard">Home</Link>
        <Link to="/AddEmployee">Manage Employees</Link>
        <Link to="/payroll">Payroll</Link>
        <Link to="/reports">View Reports</Link>
        <Link to="/" id="logout"><b>Logout</b></Link>
      </div>

      <div className="main1">
        <main>
          <div className="wrapper-main">
            <section id="payroll-section">
              <h2>Payroll Processing</h2>
              <form id="payroll-form" onSubmit={handleProcessPayroll}>
                <input className='date'
                  type="date" 
                  value={payrollDate} 
                  onChange={(e) => setPayrollDate(e.target.value)} 
                  required 
                />
                <select 
                  value={employeeId} 
                  onChange={(e) => setEmployeeId(e.target.value)} 
                  required
                >
                  <option value="">Select Employee</option>
                  {employees.map((employee) => (
                    <option key={employee.id} value={employee.id}>
                      {employee.name}
                    </option>
                  ))}
                </select>
                <input 
                  type="number" 
                  value={salaryAmount} 
                  onChange={(e) => setSalaryAmount(e.target.value)} 
                  placeholder="Salary Amount" 
                  required 
                />
                <button type="submit">Process Payroll</button>
              </form>

              <h3>Payroll History</h3>
              <table id="payroll-history">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Employee Name</th>
                    <th>Amount Paid</th>
                  </tr>
                </thead>
                <tbody>
                  {payrollHistory.map((entry, index) => (
                    <tr key={index}>
                      <td>{entry.date}</td>
                      <td>{entry.employeeName}</td>
                      <td>{entry.amountPaid}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Payroll;
