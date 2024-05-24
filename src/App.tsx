import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Dashboard from './components/Dashboard'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard" Component={Dashboard} />
        <Route path="/"  Component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
