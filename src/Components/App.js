import LevelsIndex from "./LevelsIndex";
import RememberTheFace from "./RememberTheFace";
import firebaseConfigDEV from "../config/FirebaseConfigDEV";
import * as firebase from "firebase";
import React from "react";
import GamesIndex from "./GamesIndex";
import About from "./About";
import Header from "./Header";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";


export default function App() {
  if (!firebase.apps.length) {  
    firebase.initializeApp(firebaseConfigDEV);
  }

  return (
    <Router>
      <Header />
    <div className="app">
      <Switch>
        <Route exact from="/" render={props => <GamesIndex {...props} />} />
        <Route exact path="/about" render={props => <About {...props} />} />
        <Route path="/levels/:game" component={LevelsIndex} exact={true} />
        <Route path="/game/:game/:level" component={RememberTheFace} exact={true} />


      </Switch>
    </div>
    </Router>
  );
}

