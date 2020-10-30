import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="componentContainer">
      <div className="textContainer">
        <img src="logoAndSlogan.png" className="logoAndSlogan" />
        <p>
          Super Recognizer is a collection of games based on scientific research
          that will help you improve your face recognitions skills.
        </p>
        <p>
          Either if you have prosopagnosia, you are super recogniser 
          </p><p> or you are simply interested in getting better at faces,</p><p> this place site is for you.
        </p>
        <Link to="/games">
          <button className="btn playing">START PLAYING!</button>
        </Link>
      </div>
    </div>
  );
}
