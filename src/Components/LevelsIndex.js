import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function LevelsIndex({
  match: {
    params: { game },
  },
}) {
  const levelsArray = ['I', 'II', 'III'];
  return (
    <div className="container">
      <h2>Levels</h2>
      {levelsArray &&
        levelsArray.map((level) => {
          return (
            <div>
              <Link to={`/game/${game}/${level}`}>
                <p className="levels">Level {level}</p>
              </Link>
            </div>
          );
        })}
    </div>
  );
}

export default LevelsIndex;
