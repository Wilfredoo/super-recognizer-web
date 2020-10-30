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
      <a href="https://www.patreon.com/super_recogniser" target="_blank">
        <button class="sponsor-button">Sponsor</button>
      </a>
      <p>
        That way I can work on it more time and make it much better than it is
        right now.
      </p>
      <h2>Current Sponsors</h2>

      <div>
        <h3 className="sponsor-type enthusiasts">Enthusiasts</h3>
        <p>Maria Farach</p>
        <p>Antonio Casas</p>
      </div>
      <div>
        <h3 className="sponsor-type supporters">Supporters</h3>
        <p>No supporters yet. Wanna be the first?</p>
      </div>
      <div>
        <h3 className="sponsor-type champions">Champions</h3>
        <p>No champions yet. Wanna be the first?</p>
      </div>
    </div>
  );
}
