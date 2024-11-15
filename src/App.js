import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'; // Import Home from the correct path
import SignInSignUp from './components/SignUpSignIn'; // Your SignInSignUp page
import Dashboard from './components/Dashboard'; // Your Dashboard page
import AddEmployee from './components/AddEmployee'; // Your AddEmployee page
import Payroll from './components/Payroll'; // Your PayrollProcessing page
import Reports from './components/Reports';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignInSignUp />} />
        <Route path= '/Dashboard' element={<Dashboard/>}/>
        <Route path="/addEmployee" element={<AddEmployee />} />
        <Route path="/payroll" element={<Payroll />} /> {/* Payroll Route */}
        <Route path="/reports" element={<Reports />} />
       
      </Routes>
    </Router>
  );
}

export default App;
