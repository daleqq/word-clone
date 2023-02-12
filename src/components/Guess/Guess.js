import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  return (
    <div className="guess">
      {range(0, 5).map((char) => (
        <span
          className={`cell ${guess[char] ? guess[char].status : ""}`}
          key={char}
        >
          {guess[char] ? guess[char].letter : ""}
        </span>
      ))}
    </div>
  );
}

export default Guess;
