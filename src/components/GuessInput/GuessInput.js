import React from "react";

function GuessInput({ handleAddGuess }) {
  const [guessInput, setGuessInput] = React.useState("");

  function handleGuessInput(event) {
    const inputValue = event.target.value;
    const upperCaseValue = inputValue.toUpperCase();
    setGuessInput(upperCaseValue);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(guessInput);
    setGuessInput("");
    handleAddGuess(guessInput);
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        type="text"
        maxLength={5}
        minLength={5}
        id="guess-input"
        value={guessInput}
        onChange={handleGuessInput}
      />
    </form>
  );
}

export default GuessInput;
