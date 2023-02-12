import React from "react";

import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess";

function GuessResults({ results }) {
  return range(0, NUM_OF_GUESSES_ALLOWED).map((guess) => (
    <Guess guess={results[guess]} />
  ));
}

export default GuessResults;
