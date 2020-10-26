import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function LevelsIndex({
  match: {
    params: { game },
  },
}) {
  const levelsArray = ['I', 'II', 'III'];
  const celebrities = ['Taylor Swift', 'Bruno Mars', 'Tom Cruise', "Shakira"];

  return (
    <div className="container">
      <h2>Levels</h2>
      {game !== "celebrity-match" ?
        levelsArray.map((level) => {
          return (
            <div>
              <Link to={`/game/${game}/${level}`}>
                <p className="levels">Level {level}</p>
              </Link>
            </div>
          );
        }) : celebrities.map((celebrity) => {
          return (
            <div>
              <Link to={`/game/${game}/${celebrity}`}>
                <p className="levels">{celebrity}</p>
              </Link>
            </div>
          );
        })}
    </div>
  );
}

export default LevelsIndex;
