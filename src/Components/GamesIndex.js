import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function GamesIndex() {
  const gamesArray = ["Remember the Face", "Celebrity Match", "World of Averages"];
  return (
    <div className="container">
      <h2>Games</h2>
      {gamesArray &&
        gamesArray.map((data) => {
          return (
            <div>
              <Link to={`/levels/${data}`}>
                <p className="games">{data}</p>
              </Link>
            </div>
          );
        })}
    </div>
  );
}

export default GamesIndex;
