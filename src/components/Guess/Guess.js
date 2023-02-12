import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  return (
    <div className="guess">
      {range(0, 5).map((char) => (
        <span className="cell" key={char}>
          {guess ? guess.charAt(char) : ""}
        </span>
      ))}
    </div>
  );
}

export default Guess;
