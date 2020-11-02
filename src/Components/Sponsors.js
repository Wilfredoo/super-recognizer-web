import React from "react";
import "../App.scss";

export default function Sponsors() {
  return (
    <div className="componentContainer">
      <h2 className="feedback-title">I love doing this!</h2>
      <p>
        But it's hard work and it takes time to upload all these faces ya'll
        playing with.
      </p>
      <p>
        So far I'm funding this project with personal money (which is not that
        much) and those of my sponsors.
      </p>
      <p>
        If you'd like to sponsor me though... it's easy as ABC; just go to{" "}
        <a target="_blank" href="https://www.patreon.com/super_recogniser">
          <span className="patreon-link">my Patreon page</span>
        </a>{" "}
        and choose the plan you prefer (5$, 10$ or 15$ per month).
      </p>
      <p>You can also click on this beautiful button — it's worth it.</p>
      <div className="sponsor-div">
        <img className="laurel-icon" src="laurel.png" />
        <a href="https://www.patreon.com/super_recogniser" target="_blank">
          <button class="sponsor-button">Sponsor</button>
        </a>
        <img className="laurel-icon" src="laurel.png" />
      </div>

      <p>Much appreciated!</p>
      <p>- Wilfredo</p>
      <p>...</p>
      <div className="current-sponsors-div">
        <div className="current-sponsors-line">
          <img className="torch-icon" src="torch.png" />

          <h2 className="current-sponsors">Current Sponsors</h2>
          <img className="torch-icon" src="torch.png" />
        </div>
      </div>

      <div class="sponsors-container">
        <div className="sponsor-line">
          <img src="enthusiast.png" className="enthusiast" />{" "}
          <h3 className="sponsor-type enthusiastText">Enthusiasts</h3>
          <img src="enthusiastB.png" className="enthusiast" />
        </div>
        <p>Maria Farach</p>
        <p>Antonio Casas</p>
      </div>
      <div class="sponsors-container">
        <div className="sponsor-line">
          <img src="supporterB.png" className="supporter" />
          <h3 className="sponsor-type supporterText">Supporters</h3>
          <img src="supporter.png" className="supporter" />
        </div>
        <p>
          ...no supporters yet.{" "}
          <a href="https://www.patreon.com/super_recogniser" target="_blank">
            <span>Be the first?</span>
          </a>
        </p>
      </div>
      <div class="sponsors-container">
        <div className="sponsor-line">
          <img src="championB.png" className="champion" />
          <h3 className="sponsor-type championText">Champions</h3>
          <img src="champion.png" className="champion" />
        </div>
        <p>
          ...no champions yet.{" "}
          <a href="https://www.patreon.com/super_recogniser" target="_blank">
            <span className="squeezed"> Be a champion?</span>
          </a>
        </p>
      </div>
      
    </div>
  );
}
