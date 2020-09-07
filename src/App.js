import React from "react";
import Levels from "./Levels";
import Game from "./Game";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="sans-serif">
        <Route path="/" component={Levels} exact={true} />
        <Route path="/game/:level" component={Game} />
      </div>
    </BrowserRouter>
  );
}

export default App;
