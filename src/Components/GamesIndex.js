import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function GamesIndex() {
  const games = [{url: "remember-the-face", title: "Remember the Face"}, {url: "celebrity-match", title: "Celebrity Match"}, {url: "world-of-averages", title: "World of Averages"}]

  return (
    <div className="componentContainer">
      <h2>Games</h2>
      {games &&
        games.map((data) => {
          return (
            <div>
              <Link to={`/levels/${data.url}`}>
                <p className="games">{data.title}</p>
              </Link>
            </div>
          );
        })}
    </div>
  );
}

export default GamesIndex;
