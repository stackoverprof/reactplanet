import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "../core/contexts/AuthContext";

// Pages
import Home from './'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
