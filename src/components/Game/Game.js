import React from "react";

import Guess from "../Guess";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessResults from "../GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [results, setResults] = React.useState([]);

  function handleAddGuess(result) {
    const nextResults = [...results, result];
    setResults(nextResults);
  }

  return (
    <div className="game-wrapper">
      <GuessResults results={results} />
      <Guess handleAddGuess={handleAddGuess} />
    </div>
  );
}

export default Game;
