import React, { useState } from "react";
import Button from "./Button";

function GuessControl({ onGuess }) {
  // Create a state variable for the current guess with an empty string as the default value
  const [currentGuess, setCurrentGuess] = useState("");

  // Update state when the input value changes
  const handleInputChange = (event) => {
    setCurrentGuess(event.target.value);
  };

  // When the button is clicked, call onGuess with the current guess converted to a number
  // and then reset the input field
  const onSubmitGuess = () => {
    onGuess(Number(currentGuess));
    setCurrentGuess("");
  };

  return (
    <div>
      <input
        type="number"
        value={currentGuess}
        onChange={handleInputChange}
      />
      <Button onClick={onSubmitGuess}>Submit Guess</Button>
    </div>
  );
}

export default GuessControl;