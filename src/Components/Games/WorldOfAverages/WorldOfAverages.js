import React, { useState, useEffect } from "react";
import Page from "./Page";
import * as firebase from "firebase";
import "firebase/firestore";
import processImages3 from "../../../Helpers/processImages3.js";
import typeArray from "./Types";

export default function WorldOfAverages({
  match: {
    params: { level },
  },
}) {
  const [score, setScore] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const store = firebase.firestore();
  const [picArrayState, setPicArrayState] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [loading, setLoading] = useState(false);
  const worldOfAveragesRef = store.collection("world_of_averages");
  const pageArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  async function getAllImages() {
    const imagesSnapshot = await worldOfAveragesRef.get();

    const slicedShuffledMixedArray = await processImages3(
      imagesSnapshot,
      typeArray,
      level
    );
    setPicArrayState(slicedShuffledMixedArray);
  }

  useEffect(() => {
    getAllImages();
  }, []);

  const nextPage = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };

  const increaseScore = async () => {
    setScore(score + 1);
  };

  const answer = async (answer) => {
    setLoading(true);
    if (answer) {
      await increaseScore();
      setCorrectAnswer(true);
    } else setCorrectAnswer(false);
    setTimeout(function () {
      nextPage();
      setCorrectAnswer(null);
      setLoading(false);
    }, 500);
  };

  const arrayOfPages = pageArray.map((data, i) => {
    if (picArrayState) {
      return (
        <Page
          loading={loading}
          correctAnswer={correctAnswer}
          key={i}
          game={"World of Averages"}
          level={level}
          answer={answer}
          nextPage={nextPage}
          currentPage={currentPage}
          personToShow={picArrayState[currentPage]}
          score={score}
        />
      );
    }
  });
  return (
    <>
      <div>
        <h3>World of Averages</h3>
        <h4>Level {level}</h4>
        {picArrayState && arrayOfPages[currentPage]}
      </div>
    </>
  );
}
