import React from "react";
import "firebase/firestore";
import { Link } from "react-router-dom";

export default function ScoreResult({ game, score, totalQuestions }) {
  console.log("game?", game)
  return (
    <>
      <div className="score">
        <p className="scoreLine">Right answers: {JSON.stringify(score)}</p>
        <p className="scoreLine">Total questions: {totalQuestions}</p>
        <div className="buttonGroup">
          <Link to={`/levels/${game}`}>
            <button className="scoreButton">
              {" "}
              <p>Try Again</p>
            </button>
          </Link>
          <Link to={`/`}>
            <button className="scoreButton">
              {" "}
              <p>Try another game</p>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
