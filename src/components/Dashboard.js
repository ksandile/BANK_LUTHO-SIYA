import React from 'react';
import { Link } from 'react-router-dom'; // For React Router Links
import './styles.css'; // Assuming styles.css is in the same directory

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="sidebar">
                <img src="logo.png" alt="Logo" className="logo" />
                <Link to="/Dashboard">Home</Link>
                <Link to="/AddEmployee">Manage Employees</Link>
                <Link to="/payroll"> Process Payroll</Link>
                <Link to="/reports">View Reports</Link>
                <Link to="/" id="logout"><b>Logout</b></Link>
            </div>

            <div className="main">
                <main>
                    <div className="wrapper-main">
                        <section id="quick-actions">
                            <h2>Welcome, Afika</h2>
                            <br />
                            <h2>Balance: R507 009.98</h2>
                            <br />
                            <h2>Dashboard</h2>
                            <div className="action-buttons">
                                <Link to="/AddEmployee">
                                    <button>Add New Employee</button>
                                </Link>
                                <button>Remove Employee</button>
                                <Link to="/Payroll">
                                    <button>View Employees</button>
                                </Link>
                                <Link to="/payroll">
                                    <button>Process Payroll</button>
                                </Link>
                                <Link to="/reports">
                                    <button>View Reports</button>
                                </Link>
                            </div>
                        </section>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Dashboard;
