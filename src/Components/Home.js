import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="textContainer">
      <div className="child">
      <p>
        Super Recognizer is a collection of games to help you improve your face
        recognitions skills.
      </p>
      <p>
        They are based on scientific research and will help you improve your
        skills, either if you are someone with prosopagnosia or a super
        recogniser
      </p>

      <Link to="/games">
        <p>START PLAYING!</p>
      </Link>
      </div>
    </div>
  );
}
