import React from "react";
import "firebase/firestore";
import ScoreResult from "../../ScoreResult";

export default function Page({
  game,
  answer,
  nextPage,
  shuffle,
  currentPage,
  celebrity,
  photoToShow,
  score,
  loading,
  correctAnswer,
}) {
  return (
    <>
      <div>
        <>
          {currentPage === 0 && (
            <>
              <div>
                <img className="photo" src={photoToShow.url} />
                <p>This is the real {celebrity}</p>
                <div className="buttonGroup">
                  <button className="answerButton" onClick={() => nextPage()}>
                    <p>Start</p>
                  </button>
                  <button className="answerButton" onClick={() => shuffle()}>
                    <p>New Celebrity</p>
                  </button>
                </div>
              </div>
            </>
          )}
          {currentPage >= 1 && currentPage <= 10 && (
            <>
              <div>
                <img className="photo" src={photoToShow.url} />
                <p>Is this the real {celebrity}?</p>
                {loading && correctAnswer === true && <p>Correct ✔</p>}
                {loading && correctAnswer === false && <p>Incorrect X</p>}
                {!loading && (
                  <div className="buttonGroup">
                    <button className="answerButton"
                      onClick={() => answer("NO", photoToShow.rightAnswer)}
                    >
                      <p>Yes</p>
                    </button>
                    <button className="answerButton"
                      onClick={() => answer("YES", photoToShow.rightAnswer)}
                    >
                      <p>No</p>
                    </button>
                  </div>
                )}
              </div>
            </>
          )}
          {currentPage === 11 && (
            <>
              <ScoreResult game={game} score={score} totalQuestions={10} />
            </>
          )}
        </>
      </div>
    </>
  );
}
