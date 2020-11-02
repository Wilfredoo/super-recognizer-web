import React from "react";
import "firebase/firestore";
import ScoreResult from "../../ScoreResult";
import Button from "@material-ui/core/Button";

export default function Page({
  answer,
  nextPage,
  level,
  shuffle,
  currentPage,
  photoToShow,
  photoToShow2,
  score,
  correctAnswer,
  numberOfPages,
}) {
  return (
    <>
      <div>
        <>
          {currentPage === 0 && (
            <>
              <div>
                {level === "I" && (
                  <div className="instructions">
                    <div className="instruction-line">
                      <img className="eye" src="/eye.png" />
                      <p className="instructionText"> Remember this Face</p>
                    </div>
                    <div>
                      <img className="photo" src={photoToShow.url} />
                    </div>
                  </div>
                )}
                {(level === "II" || level === "III") && (
                  <div className="instructions">
                    <div className="instruction-line">
                      <img className="eye" src="/eye.png" />
                      <p className="instructionText"> Remember these Faces</p>
                    </div>

                    <img className="photo" src={photoToShow.url} />

                    <img className="photo" src={photoToShow2.url} />
                  </div>
                )}

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
                  <Button variant="contained" onClick={() => shuffle()}>
                    New Face
                  </Button>
                </div>
              </div>
            </>
          )}
          {currentPage >= 1 && currentPage <= numberOfPages && (
            <>
              <div>
                <div className="instruction-line">
                  <img className="eye" src="/eye.png" />
                  {level === "I" && (
                    <p className="instructionText">Is this the face you saw?</p>
                  )}
                  {(level === "II" || level === "III") && (
                    <p className="instructionText">
                      Is this one of the faces you saw?
                    </p>
                  )}
                </div>

                <img className="photo" src={photoToShow.url} />

                {correctAnswer === true && <p className="correct">Correct ✔</p>}
                {correctAnswer === false && (
                  <p className="incorrect">Incorrect X</p>
                )}
                {
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
                      onClick={() => answer("YES", photoToShow.rightAnswer)}
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
                      onClick={() => answer("NO", photoToShow.rightAnswer)}
                    >
                      NO
                    </Button>
                  </div>
                }
              </div>
            </>
          )}
          {currentPage === numberOfPages + 1 && (
            <>
              <ScoreResult
                game={"remember-the-face"}
                score={score}
                totalQuestions={numberOfPages}
              />
            </>
          )}
        </>
      </div>
    </>
  );
}
