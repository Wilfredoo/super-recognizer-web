import LevelsIndex from "./LevelsIndex";
import RememberTheFace from "./Games/RememberTheFace/RememberTheFace";
import CelebrityMatch from "./Games/CelebrityMatch/CelebrityMatch";
import WorldOfAverages from "./Games/WorldOfAverages/WorldOfAverages";
import firebaseConfigDEV from "../config/FirebaseConfigDEV";
import * as firebase from "firebase";
import React from "react";
import GamesIndex from "./GamesIndex";
import About from "./About";
import Home from "./Home";
import Sponsors from "./Sponsors";
import Feedback from "./Feedback";
import Header from "./Header";
import Footer from "./Footer";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import HttpsRedirect from "react-https-redirect";

export default function App() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfigDEV);
  }

  return (
    <HttpsRedirect>
      <Router>
        <Header />
        <div className="app">
          <Switch>
            <Route
              exact
              from="/games"
              render={(props) => <GamesIndex {...props} />}
            />
            <Route exact from="/" render={(props) => <Home {...props} />} />
            <Route
              exact
              path="/about"
              render={(props) => <About {...props} />}
            />
            <Route
              exact
              path="/sponsors"
              render={(props) => <Sponsors {...props} />}
            />
            <Route
              exact
              path="/feedback"
              render={(props) => <Feedback {...props} />}
            />
            <Route path="/levels/:game" component={LevelsIndex} exact={true} />
            <Route
              path="/game/celebrity-match/:celebrity"
              component={CelebrityMatch}
              exact={true}
            />
            <Route
              path="/game/remember-the-face/:level"
              component={RememberTheFace}
              exact={true}
            />
            <Route
              path="/game/world-of-averages/:level"
              component={WorldOfAverages}
              exact={true}
            />
          </Switch>
        </div>
        <Footer />
      </Router>
    </HttpsRedirect>
  );
}
