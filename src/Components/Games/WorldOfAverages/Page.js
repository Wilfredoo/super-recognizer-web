import React, { useState, useEffect } from "react";
import "firebase/firestore";
import ScoreResult from "../../ScoreResult";
import shuffle from "../../../Helpers/shuffle";

export default function Page({
  loading,
  correctAnswer,
  game,
  level,
  currentPage,
  personToShow,
  score,
  answer,
}) {
  const [rightType, setRightType] = useState(null);
  const buttonValues = [];
  let shuffledButtonValues = [];

  useEffect(() => {
    shuffledButtonValues.map((data) => {
      if (data.key === "rightAnswer") setRightType(data.value);
    });
  }, []);

  if (typeof personToShow !== "undefined") {
    for (const [key, value] of Object.entries(personToShow.answers)) {
      buttonValues.push({ key, value });
    }
    shuffledButtonValues = shuffle(buttonValues);
  }

  return (
    <>
      <div>
        <>
          {currentPage < 10 && (
            <>
              <div>
                {level === "III" && (
                  <>
                    <img className="photo" src={personToShow.photo} />
                  </>
                )}
                {level !== "III" && (
                  <>
                    <img className="photo" src={personToShow.photo} />
                  </>
                )}
                <p>What's the ethnicity of this person?</p>
                <div className="buttonsWorld">
                  {!loading &&
                    shuffledButtonValues &&
                    shuffledButtonValues.map((data, index) => {
                      let typeAnswer = true;
                      if (data.key !== "rightAnswer") typeAnswer = false;
                      return (
                        <div key={index}>
                          <button
                            className="answerButton"
                            onClick={() => answer(typeAnswer)}
                          >
                            <p>{data.value}</p>
                          </button>
                        </div>
                      );
                    })}
                  {loading && correctAnswer === true && <p>Correct ✔</p>}
                  {loading && correctAnswer === false && (
                    <>
                      <p>Incorrect X{"\n"}</p>
                    </>
                  )}
                  {loading && correctAnswer === false && (
                    <>
                      <p>Right Answer: {rightType}</p>
                    </>
                  )}
                </div>
              </div>
            </>
          )}
          {currentPage === 10 && (
            <>
              <ScoreResult game={game} score={score} totalQuestions={10} />
            </>
          )}
        </>
      </div>
    </>
  );
}
