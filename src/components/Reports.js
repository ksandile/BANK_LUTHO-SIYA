import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Reports = () => {
  const [reportType, setReportType] = useState(null);
  const [reportData, setReportData] = useState([]);

  const handleReportSelect = (type) => {
    setReportType(type);
    // Mock data - replace with actual data fetching logic
    if (type === 'salary') {
      setReportData([
        { date: '2023-01-01', details: 'Monthly Salary', amount: 'R30,000' },
        { date: '2023-02-01', details: 'Monthly Salary', amount: 'R30,000' },
      ]);
    } else if (type === 'employee') {
      setReportData([
        { date: '2023-01-15', details: 'Employee Onboarding', amount: 'R5,000' },
        { date: '2023-02-15', details: 'Employee Training', amount: 'R3,000' },
      ]);
    }
  };

  return (
    <div className="report-dashboard">
      <div className="sidebar">
        <img src="logo.png" alt="Logo" className="logo" />
        <Link to="/dashboard">Home</Link>
        <Link to="/AddEmployee">Manage Employees</Link>
        <Link to="/payroll">Process Payroll</Link>
        <Link to="/Reports">View Reports</Link>
        <Link to="/" id="logout"><b>Logout</b></Link>
      </div>

      <div className="main">
        <main>
          <div className="wrapper-main">
            <section id="reports-section">
              <h2>Reports Overview</h2>
              <p>Select a report type to view detailed information.</p>

              <div className="report-types">
                <button onClick={() => handleReportSelect('salary')}>Salary Report</button>
                <button onClick={() => handleReportSelect('employee')}>Employee Report</button>
              </div>

              <div id="report-display" style={{ marginTop: '20px' }}>
                {reportType && (
                  <>
                    <h3>{reportType === 'salary' ? 'Salary Report' : 'Employee Report'}</h3>
                    <table id="report-table">
                      <thead>
                        <tr>
                          <th>Date</th>
                          <th>Details</th>
                          <th>Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        {reportData.map((entry, index) => (
                          <tr key={index}>
                            <td>{entry.date}</td>
                            <td>{entry.details}</td>
                            <td>{entry.amount}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </>
                )}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Reports;
