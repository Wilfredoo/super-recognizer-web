import LevelsIndex from "./LevelsIndex";
import RememberTheFace from "./Games/RememberTheFace/RememberTheFace";
import CelebrityMatch from "./Games/CelebrityMatch/CelebrityMatch";
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
          <Route exact from="/" render={(props) => <GamesIndex {...props} />} />
          <Route exact path="/about" render={(props) => <About {...props} />} />
          <Route path="/levels/:game" component={LevelsIndex} exact={true} />
          <Route
            path="/game/celebrity-match/:level"
            component={CelebrityMatch}
            exact={true}
          />
          <Route
            path="/game/remember-the-face/:level"
            component={RememberTheFace}
            exact={true}
          />
          {/* <Route
            path="/game/world-of-averages/:level"
            component={WorldOfAverages}
            exact={true}
          /> */}
        </Switch>
      </div>
    </Router>
  );
}
