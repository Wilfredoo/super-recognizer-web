import React from "react";
import "../App.scss";

export default function Sponsors() {
  return (
    <div className="componentContainer">
      <h2>Especially excited about this project?</h2>
      <p>
        This project is funded with personal money (which is not that much) and
        those of my sponsors.
      </p>
      <p>
        If you'd like to sponsor this project, consider donating 5$, 10$ or 15$
        a month via Patreon.
      </p>
      <div className="sponsor-div">
        <img className="laurel-icon" src="laurel.png" />
        <a href="https://www.patreon.com/super_recogniser" target="_blank">
          <button class="sponsor-button">Sponsor</button>
        </a>
        <img className="laurel-icon" src="laurel.png" />
      </div>
      <p>
        That way I can work on it more time and make it much better than it is
        right now.
      </p>
      <h2>Current Sponsors</h2>

      <div>
        <div className="sponsor-line">
          <img src="enthusiast.png" className="enthusiast" />{" "}
          <h3 className="sponsor-type enthusiastText">Enthusiasts</h3>
          <img src="enthusiast.png" className="enthusiast" />
        </div>
        <p>Maria Farach (mom)</p>
        <p>Wilfredo Casas (dad)</p>
      </div>
      <div>
        <div className="sponsor-line">
          <img src="supporter.png" className="supporter" />
          <h3 className="sponsor-type supporterText">Supporters</h3>
          <img src="supporter.png" className="supporter" />
        </div>
        <p>No supporters yet. Be the first? :)</p>
      </div>
      <div>
        <div className="sponsor-line">
          <img src="champion.png" className="champion" />
          <h3 className="sponsor-type championText">Champions</h3>
          <img src="champion.png" className="champion" />
        </div>
        <p>No champions yet. Be the first? :D</p>
      </div>
    </div>
  );
}
