import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppointmentScheduler  from './components/AppointmentScheduler';
import Dashboard from './components/Dashboard'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/appointment-scheduler" Component={AppointmentScheduler} />
        <Route path="/dashboard" Component={Dashboard} />
        <Route path="/"  Component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
