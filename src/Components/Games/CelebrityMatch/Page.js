import React from "react";
import "firebase/firestore";
import ScoreResult from "../../ScoreResult";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export default function Page({
  game,
  answer,
  nextPage,
  currentPage,
  celebrity,
  photoToShow,
  score,
  loading,
  correctAnswer,
  level
}) {
  return (
    <>
    {console.log("photo to show in page", photoToShow)}
      <div>
        <>
          {currentPage === 0 && (
            <>
              <div>
                <div className="instruction-line">
                  <img className="eye" src="/eye.png" />
                  <p className="instructionText">
                    {" "}
                    This is the real {celebrity}
                  </p>
                </div>

                <img className="photo" src={photoToShow.url} />
                <div className="buttonGroup">
                  <Button
                    style={{
                      backgroundColor: "#206a5d",
                      width: "150px",

                      margin: "25px 0px",
                      padding: "15px 25px",
                      fontSize: "18px",
                      color: "white",
                    }}
                    variant="contained"
                    onClick={() => nextPage()}
                  >
                    Start
                  </Button>
                  <Link to="/levels/celebrity-match">
                    {" "}
                    <Button variant="contained">Back</Button>
                  </Link>
                </div>
              </div>
            </>
          )}
          {currentPage >= 1 && currentPage <= 10 && (
            <>
              <div>
                <div className="instruction-line">
                  <img className="eye" src="/eye.png" />
                  <p className="instructionText">
                    {" "}
                    Is this the real {celebrity}?
                  </p>
                </div>

                <img className="photo" src={photoToShow.url} />
                {loading && correctAnswer === true && <p className="correct">Correct ✔</p>}
                {loading && correctAnswer === false && <p className="incorrect">Incorrect X</p>}
                {!loading && (
                  <div className="buttonGroup">
                    <Button
                      style={{
                        backgroundColor: "#206a5d",
                        width: "150px",

                        margin: "10px 0px",
                        padding: "10px 25px",
                        fontSize: "18px",
                        color: "white",
                      }}
                      variant="contained"
                      onClick={() => answer("NO", photoToShow.rightAnswer)}
                    >
                      YES
                    </Button>
                    <Button
                      style={{
                        backgroundColor: "#bb2205",
                        width: "150px",
                        margin: "10px 0px",
                        padding: "10px 25px",
                        fontSize: "18px",
                        color: "white",
                      }}
                      variant="contained"
                      onClick={() => answer("YES", photoToShow.rightAnswer)}
                    >
                      NO
                    </Button>
                  </div>
                )}
              </div>
            </>
          )}
          {currentPage === 11 && (
            <>
              <ScoreResult game={game} score={score} totalQuestions={10} level={level} game_id={"c98ddc78-2901-11eb-adc1-0242ac120002"} />
            </>
          )}
        </>
      </div>
    </>
  );
}
