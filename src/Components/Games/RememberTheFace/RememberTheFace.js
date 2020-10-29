import React, { useState, useEffect } from "react";
import "../../../App.css";
import processImages from "../../../Helpers/processImages.js";
import processImagesII from "../../../Helpers/processImagesII.js";
import processImagesIII from "../../../Helpers/processImagesIII.js";
import * as firebase from "firebase";
import Page from "./Page";
import "firebase/firestore";
import typeArray from "../../../Data/types";

function RememberTheFace({
  match: {
    params: { level },
  },
}) {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [picArrayState, setPicArrayState] = useState(null);
  const [numberOfPages, setNumberOfPages] = useState(10);
  const store = firebase.firestore();
  const londonFacesRef = store.collection("london_faces");
  const asianGirlsRef = store.collection("asian_girls");
  const nottinghamRef = store.collection("nottingham_faces");
  const pageArray = Array.from(Array(20).keys());
  const randomTypeIndex = Math.floor(Math.random() * typeArray.length);

  useEffect(() => {
    getAllImages();
  }, []);

  async function getAllImages() {
    console.log("type will be...: ", typeArray[randomTypeIndex]);
    let imagesSnapshot = [];
    let imagesArray = [];
    let slicedShuffledMixedArray = [];

    if (level === "I") {
      setNumberOfPages(10);
      imagesSnapshot = await londonFacesRef
        .where("type", "==", typeArray[randomTypeIndex])
        .get();
      imagesArray = await imagesSnapshot.docs;

      slicedShuffledMixedArray = await processImages(imagesArray);
    } else if (level === "II") {
      setNumberOfPages(15);
      imagesSnapshot = await asianGirlsRef.get();
      imagesArray = await imagesSnapshot.docs;
      slicedShuffledMixedArray = await processImagesII(imagesArray);
    } else if (level === "III") {
      setNumberOfPages(15);
      imagesSnapshot = await nottinghamRef.get();
      imagesArray = await imagesSnapshot.docs;
      slicedShuffledMixedArray = await processImagesIII(imagesArray);
    }
    setPicArrayState(slicedShuffledMixedArray);
  }

  const shuffle = () => {
    getAllImages();
  };

  const nextPage = () => {
    setCurrentPage((currentPage) => currentPage + 1);
    if (level === "II" && currentPage === 0)
      setCurrentPhoto((currentPhoto) => currentPhoto + 2);
    else setCurrentPhoto((currentPhoto) => currentPhoto + 1);
  };

  const increaseScore = async () => {
    setScore(score + 1);
  };

  const answer = async (answer, correctPicture) => {
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
    }, 500);
  };

  const arrayOfPages = pageArray.map((data, i) => {
    if (picArrayState) {
      return (
        <Page
          key={i}
          correctAnswer={correctAnswer}
          level={level}
          answer={answer}
          nextPage={nextPage}
          shuffle={shuffle}
          currentPage={currentPage}
          currentPhoto={currentPhoto}
          photoToShow={picArrayState[currentPhoto]}
          photoToShow2={picArrayState[currentPhoto + 1]}
          score={score}
          numberOfPages={numberOfPages}
        />
      );
    }
  });

  return (
    <div className="container">
      <h3>Remember the Face</h3>
      <h4>Level {level}</h4>
      {picArrayState && arrayOfPages[currentPage]}
    </div>
  );
}

export default RememberTheFace;
