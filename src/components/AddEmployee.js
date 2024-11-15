import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css'; // Assuming styles.css is in the same directory

const AddEmployee = () => {
  // State to manage form inputs
  const [employeeName, setEmployeeName] = useState('');
  const [employeeEmail, setEmployeeEmail] = useState('');
  const [employeeJob, setEmployeeJob] = useState('');
  const [employeeSalary, setEmployeeSalary] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [employeeHireDate, setEmployeeHireDate] = useState(''); // New state for hire date

  // State to manage employee list
  const [employeeList, setEmployeeList] = useState([]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmployee = {
      name: employeeName,
      email: employeeEmail,
      job: employeeJob,
      salary: employeeSalary,
      id: employeeId,
      hireDate: employeeHireDate, // Add hire date to the new employee object
    };
    setEmployeeList([...employeeList, newEmployee]);

    // Reset form fields after submission
    setEmployeeName('');
    setEmployeeEmail('');
    setEmployeeJob('');
    setEmployeeSalary('');
    setEmployeeId('');
    setEmployeeHireDate(''); // Reset hire date field
  };

  // Handle deleting an employee
  const handleDelete = (index) => {
    const updatedList = employeeList.filter((_, i) => i !== index);
    setEmployeeList(updatedList);
  };

  return (
    <div className="add-employee">
      <div className="sidebar">
        <img src="logo.png" alt="Logo" className="logo" />
        <Link to="/dashboard">Home</Link>
        <Link to="/AddEmployee">Manage Employees</Link>
        <Link to="/payroll">Process Payroll</Link>
        <Link to="/reports">View Reports</Link>
        <Link to="/" id="logout"><b>Logout</b></Link>
      </div>

      <main>
        <div className="wrapper-main">
          <section>
            <h2>Add New Employee</h2>
            <form id="payroll-form" onSubmit={handleSubmit}>
              <input
                type="text"
                id="employee-name"
                placeholder="Employee Name"
                value={employeeName}
                onChange={(e) => setEmployeeName(e.target.value)}
                required
              />
              <input
                type="email"
                id="employee-email"
                placeholder="Email"
                value={employeeEmail}
                onChange={(e) => setEmployeeEmail(e.target.value)}
                required
              />
              <input
                type="text"
                id="employee-job"
                placeholder="Job Title"
                value={employeeJob}
                onChange={(e) => setEmployeeJob(e.target.value)}
                required
              />
              <input
                type="number"
                id="employee-salary"
                placeholder="Salary"
                value={employeeSalary}
                onChange={(e) => setEmployeeSalary(e.target.value)}
                required
              />
              <input
                type="text"
                id="employee-id-number"
                placeholder="ID Number"
                value={employeeId}
                onChange={(e) => setEmployeeId(e.target.value)}
                required
              />
              
              <input className='date'
                type="date" // Date input type
                id="employee-hire-date"
                placeholder="Hire Date"
                value={employeeHireDate}
                onChange={(e) => setEmployeeHireDate(e.target.value)}
                required
              />
              
              <button type="submit">Add Employee</button>
            </form>

            <h2>Employee List</h2>
            <table id="employee-list">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Job Title</th>
                  <th>Salary</th>
                  <th>ID Number</th>
                  <th>Hire Date</th> {/* New column for hire date */}
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {employeeList.map((employee, index) => (
                  <tr key={index}>
                    <td>{employee.name}</td>
                    <td>{employee.email}</td>
                    <td>{employee.job}</td>
                    <td>{employee.salary}</td>
                    <td>{employee.id}</td>
                    <td>{employee.hireDate}</td> {/* Display hire date */}
                    <td>
                      <button onClick={() => handleDelete(index)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>
      </main>
    </div>
  );
};

export default AddEmployee;
