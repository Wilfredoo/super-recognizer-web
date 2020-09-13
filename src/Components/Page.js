import React from "react";
import "firebase/firestore";
import ScoreResult from "./ScoreResult";

let numberOfPages;



export default function Page({
  game,
  answer,
  nextPage,
  level,
  shuffle,
  currentPage,
  photoToShow,
  photoToShow2,
  score,
  loading,
  correctAnswer,
}) {
  if (level === "I") numberOfPages = 10;
  else if (level === "II") numberOfPages = 15;

  return (
    <>
      <div>
        <>
          {currentPage === 0 && (
            <>
              <div>
                {level === "I" && (
                  <div className="instructions">
                    <p>Remember this face</p>
                    <div className="sweet-loading">
                 
                    </div>
                    {!loading && (
                      <img className="photo" src={photoToShow.url} />
                    )}
                  </div>
                )}
                {level === "II" && (
                  <div className="instructions">
                    <p>Remember these faces</p>

                    {!loading && (
                      <img className="photo" src={photoToShow.url} />
                    )}
                    {!loading && (
                      <img className="photo" src={photoToShow2.url} />
                    )}
                  </div>
                )}
                <div className="buttonGroup">
                  <button className="answerButton" onClick={() => nextPage()}>
                    <p>Start</p>
                  </button>
                  <button className="answerButton" onClick={() => shuffle()}>
                    <p>New Face</p>
                  </button>
                </div>
              </div>
            </>
          )}
          {currentPage >= 1 && currentPage <= numberOfPages && (
            <>
              <div>
                <img className="photo" src={photoToShow.url} />

                {level === "I" && <p>Is this the face you saw?</p>}
                {level === "II" && <p>Is this one of the faces you saw?</p>}

                {loading && correctAnswer === true && <p>Correct ✔</p>}
                {loading && correctAnswer === false && <p>Incorrect X</p>}
                {!loading && (
                  <div className="buttonGroup">
                    <button className="answerButton"
                      onClick={() => answer("YES", photoToShow.rightAnswer)}
                    >
                      <p>Yes</p>
                    </button>
                    <button className="answerButton"
                      onClick={() => answer("NO", photoToShow.rightAnswer)}
                    >
                      <p>No</p>
                    </button>
                  </div>
                )}
              </div>
            </>
          )}
          {currentPage === numberOfPages + 1 && (
            <>
              <ScoreResult
                game={game}
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
