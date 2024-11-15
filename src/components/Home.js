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
                <p>User authentication for secure access</p>
                <p>Manage company profiles and employee records</p>
                <p>Automated salary payment processing</p>
                <p>Benefits and deductions management</p>
                <p>Tax calculation and compliance tracking</p>
                <p>Comprehensive reporting and analytics tools</p>
              </ul>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
