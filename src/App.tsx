import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppointmentScheduler  from './components/AppointmentScheduler';
import Dashboard from './components/Dashboard'
import Login from './components/Login'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" Component={Login} />
        <Route path="/appointment-scheduler" Component={AppointmentScheduler} />
        <Route path="/dashboard" Component={Dashboard} />
        <Route path="/"  Component={Dashboard} />
      </Routes>
    </Router>
  );
}

export default App;
