import React, { useState } from "react";
import GuessControl from "./GuessControl";
import GuessMessage from "./GuessMessage";
import GameOver from "./GameOver";

/**
 * Return a random integer number from 1-100 inclusive
 */
function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

const MAX_ATTEMPTS = 5;

function NumberGuessingGame() {
  // Create state variables for the game
  const [numberToGuess, setNumberToGuess] = useState(getRandomNumber());
  const [numberOfGuesses, setNumberOfGuesses] = useState(0);
  const [latestGuess, setLatestGuess] = useState(null);

  // Call when the user makes a guess
  // Convert the guess to a number and increments the guess count
  const handleGuess = (guess) => {
    setLatestGuess(Number(guess));
    setNumberOfGuesses((prevCount) => prevCount + 1);
  };

  // Reset the game state to start a new game
  const handleReset = () => {
    setNumberToGuess(getRandomNumber());
    setNumberOfGuesses(0);
    setLatestGuess(null);
  };

  // Determine if the guess is correct and if the game is over
  const isCorrectGuess = latestGuess === numberToGuess;
  const isGameOver = isCorrectGuess || numberOfGuesses === MAX_ATTEMPTS;

  return (
    <div>
      <h2>I'm thinking of a number from 1 to 100.</h2>
      <h2>
        Can you guess the number I am thinking of in {MAX_ATTEMPTS} tries?
      </h2>
      <GuessControl onGuess={handleGuess} />
      {isGameOver ? (
        <GameOver hasWon={isCorrectGuess} onReset={handleReset} />
      ) : (
        <GuessMessage
          guess={latestGuess}
          numberToGuess={numberToGuess}
          numberOfGuesses={numberOfGuesses}
        />
      )}
    </div>
  );
}

export default NumberGuessingGame;