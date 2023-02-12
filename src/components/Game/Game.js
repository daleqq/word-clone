import React from "react";

import GuessInput from "../GuessInput";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { sample } from "../../utils";
import { checkGuess } from "../../game-helpers";
import { WORDS } from "../../data";
import GuessResults from "../GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [results, setResults] = React.useState([]);
  const [fullResult, setFullResult] = React.useState({
    win: false,
    count: 0,
    ended: false,
  });

  function handleAddGuess(result) {
    const guessReuslt = checkGuess(result, answer);

    const nextResults = [...results, guessReuslt];
    const nextFullResult = {
      win: result === answer,
      count: fullResult.count + 1,
    };
    nextFullResult.ended =
      nextFullResult.win || nextFullResult.count >= NUM_OF_GUESSES_ALLOWED;

    setResults(nextResults);
    setFullResult(nextFullResult);
  }

  return (
    <>
      <GuessResults results={results} />
      <GuessInput ended={fullResult.ended} handleAddGuess={handleAddGuess} />
      {fullResult.ended && (
        <div className={`${fullResult.win ? "happy" : "sad"} banner`}>
          {fullResult.win ? (
            <p>
              <strong>Congratulations!</strong> Got it in
              <strong>{fullResult.count} guesses</strong>.
            </p>
          ) : (
            <p>
              Sorry, the correct answer is <strong>{answer}</strong>.
            </p>
          )}
        </div>
      )}
    </>
  );
}

export default Game;
