import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import UserForm from './components/UserForm';
import HomePage from './components/HomePage';
import EHGPersonalDetails from './components/EHGPersonalDetails';
import PGPersonalDetails from './components/PGPersonalDetails';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {
  return (
    <Router>
      <Switch>
      <div className="App">
        <Navigation/>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/GrantApp" component={HomePage}/>
        <Route exact path="/HomePage" component={HomePage}/>
        <Route exact path="/FGPersonalDetails" component={UserForm}/>
        <Route exact path="/EHGPersonalDetails" component={EHGPersonalDetails}/>
        <Route exact path="/PGPersonalDetails" component={UserForm}/>
      </div>
      </Switch>
    </Router>
  );
}

export default App;
