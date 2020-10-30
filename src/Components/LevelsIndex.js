import React from "react";
import { Link } from "react-router-dom";
import "../App.scss";

function LevelsIndex({
  match: {
    params: { game },
  },
}) {
  const levelsArray = ['I', 'II', 'III'];
  const celebrities = [
    "Trump",
    "Shakira",
    "Bruno Mars",
    "Ed Sheeran",
    "Taylor Swift",
    "Tom Cruise",
    "Keanu Reeves",
    "Kit Harrington",
    "Lili Reinhart",
    "Michelle Obama",
  ];
  return (
    <div className="componentContainer">
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
