import React from "react";

function Guess({ handleAddGuess }) {
  const [guess, setGuess] = React.useState("");

  function handleGuessInput(event) {
    const inputValue = event.target.value;
    const upperCaseValue = inputValue.toUpperCase();
    setGuess(upperCaseValue);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(guess);
    setGuess("");
    handleAddGuess(guess);
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        type="text"
        maxLength={5}
        minLength={5}
        id="guess-input"
        value={guess}
        onChange={handleGuessInput}
      />
    </form>
  );
}

export default Guess;
