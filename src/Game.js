import React, { useState, useEffect } from "react";
import "./App.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";



function Game({
  match: {
    params: { level },
  },
}) {
  // const [correctAnswers, setCorrectAnswers] = useState([]);
  const { handleSubmit, register, errors, reset } = useForm();

  useEffect(() => {
  }, []);

  const setDigits = async () => {
    let digits;
    switch (level) {
      case "1":
        digits = 7;
        break;
      case "2":
        digits = 8;
        break;
      case "3":
        digits = 9;
        break;
      case "4":
        digits = 6;
        break;
      case "5":
        digits = 7;
        break;
      case "6":
        digits = 8;
    }
    return digits;
  };




  const onSubmit = (values) => {
    console.log("values", values)
  };

  const generateNumber = async () => {
 
  };

  return (
    <div className="App">
     <p>faces game for web</p>
    </div>
  );
}

export default Game;
