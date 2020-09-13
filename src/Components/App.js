import React from "react";
import LevelsIndex from "./LevelsIndex";
import GamesIndex from "./GamesIndex";
import RememberTheFace from "./RememberTheFace";
import firebaseConfigDEV from "../config/FirebaseConfigDEV";
import * as firebase from "firebase";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  if (!firebase.apps.length) {  
    firebase.initializeApp(firebaseConfigDEV);
  }

  return (
    <BrowserRouter>
      <div className="app">
        <Route path="/levels/:game" component={LevelsIndex} exact={true} />
        <Route path="/" component={GamesIndex} exact={true} />
        <Route path="/game/:game/:level" component={RememberTheFace} exact={true} />
      </div>
    </BrowserRouter>
  );
}

export default App;
