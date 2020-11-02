import React from "react";
import "firebase/firestore";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

export default function ScoreResult({ game, score, totalQuestions }) {
  console.log("game", game)
  return (
    <>
      <div className="score">
        <p className="scoreLine">Right answers: {JSON.stringify(score)}</p>
        <p className="scoreLine">Total questions: {totalQuestions}</p>
        <div className="buttonGroup">
          <Link to={`/levels/${game}`}>
        <Button style={{
                      margin: "10px 0",
                      padding: "15px 25px",
                      width: "220px"
                    }} variant="contained">

              Try Again
            </Button>
          </Link>
          <Link to={`/games`}>
        <Button style={{
                      margin: "10px 0",
                      padding: "15px 25px",
                      width: "220px"
                    }} variant="contained">

              Try another game
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
