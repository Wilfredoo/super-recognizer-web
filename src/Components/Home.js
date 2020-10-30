import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="componentContainer">
      <div className="textContainer">
        <img src="logoAndSlogan.png" className="logoAndSlogan" />
        <p>
          Super Recognizer is a collection of games based on scientific research
          to help you improve your face recognitions skills.
        </p>
        <p>
          Either if you are someone with prosopagnosia, a super recogniser 
          </p><p> or you are just interested in getting better at recognizing faces,</p><p> this place is for you.
        </p>
        <Link to="/games">
          <button className="btn playing">START PLAYING!</button>
        </Link>
      </div>
    </div>
  );
}
