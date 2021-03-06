import React from 'react';
import './App.css';
//import Navigation from './components/Navigation';
import UserForm from './components/UserForm';
import UserFormPG from './components/UserFormPG';
import UserFormEHG from './components/UserFormEHG';
import HomePage from './components/HomePage';
import HomePageDBSS from './components/HomePageDBSS';
import UserFormBTO from './componentsbto/UserFormBTO';
import UserFormEC from './componentsec/UserFormEC';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';




function App() {
  return (
    <Router>
      <Switch>
      <div className="App">
        {/* <Navigation/> */}
        <Route exact path="/" component={HomePage}/>
        {/* DBSS Nav section */}
        <Route exact path="/HomePageDBSS" component={HomePageDBSS}/>
        <Route exact path="/FGPersonalDetails" component={UserForm}/>
        <Route exact path="/EHGPersonalDetails" component={UserFormEHG}/>
        <Route exact path="/PGPersonalDetails" component={UserFormPG}/>

        {/* BTO Nav section */}
        <Route exact path="/HomepageBTO" component={UserFormBTO}/>

        {/* EC Nav section */}
        <Route exact path="/HomepageEC" component={UserFormEC}/>
      </div>
      </Switch>
    </Router>
  );
}

export default App;
