import React, { useState, useEffect } from "react";
import Page from "./Page";
import * as firebase from "firebase";
import "firebase/firestore";
import processImages2 from "../../../Helpers/processImages2.js";  

export default function CelebrityMatch({
  match: {
    params: { celebrity },
  },
}) {
  const [score, setScore] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [celebrityName, setCelebrityName] = useState(null);
  const store = firebase.firestore();
  const [picArrayState, setPicArrayState] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [loading, setLoading] = useState(false);
  const celebritiesRef = store.collection("celebrities");
  const pageArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  async function getAllImages() {
    const realImagesSnapshot = await celebritiesRef
      .where("name", "==", celebrity)
      .where("real", "==", true)
      .get();

    const fakeImagesSnapshot = await celebritiesRef
      .where("name", "==", celebrity)
      .where("real", "==", false)
      .get();

    const realImagesDocs = await realImagesSnapshot.docs;
    const fakeImagesDocs = await fakeImagesSnapshot.docs;
    await realImagesDocs.forEach((docSnapshot) => {
      setCelebrityName(docSnapshot.data().name);
    });

    const slicedShuffledMixedArray = await processImages2(
      realImagesDocs,
      fakeImagesDocs
    );
    setPicArrayState(slicedShuffledMixedArray);
  }

  useEffect(() => {
    getAllImages();
  }, []);

  const shuffle = () => {
    getAllImages();
  };

  const nextPage = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };

  const increaseScore = async () => {
    setScore(score + 1);
  };

  const answer = async (answer, correctPicture) => {
    setLoading(true);
    if (
      (answer === "YES" && correctPicture) ||
      (answer === "NO" && !correctPicture)
    ) {
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
          game={"celebrity-match"}
          answer={answer}
          nextPage={nextPage}
          shuffle={shuffle}
          currentPage={currentPage}
          photoToShow={picArrayState[currentPage]}
          score={score}
          celebrity={celebrityName}
        />
      );
    }
  });
  return (
      <div className="componentContainer">
        <p>Celebrity Match - Level {celebrity}</p>
        {picArrayState && arrayOfPages[currentPage]}
      </div>
  );
}
