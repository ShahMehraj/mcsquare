import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ThinkFoundationPuzzle3.css";

const ThinkFoundationPuzzle3: React.FC = () => {
  const navigate = useNavigate();
  const [target, setTarget] = useState<number>(0);
  const [guess, setGuess] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [attempts, setAttempts] = useState<number>(0);

  const maxAttempts = 5;
  const maxRange = 100; // The target is between 1 and 100

  // Generate a random target number when the component mounts
  useEffect(() => {
    const randomNum = Math.floor(Math.random() * maxRange) + 1;
    setTarget(randomNum);
  }, [maxRange]);

  const handleSubmit = () => {
    if (!guess) return;
    const guessNum = parseInt(guess, 10);
    if (isNaN(guessNum)) {
      setMessage("Please enter a valid number.");
      return;
    }

    // Increase the attempt count
    const newAttempts = attempts + 1;
    setAttempts(newAttempts);

    // Check if the guess is correct, too low, or too high
    if (guessNum === target) {
      setMessage(
        `Correct! You guessed the number in ${newAttempts} attempt${
          newAttempts > 1 ? "s" : ""
        }.`
      );
    } else if (newAttempts >= maxAttempts) {
      // Exceeded max attempts and still incorrect
      setMessage(`Game over! The correct number was ${target}.`);
    } else if (guessNum < target) {
      setMessage("Too low! Try a higher number.");
    } else {
      setMessage("Too high! Try a lower number.");
    }
    setGuess("");
  };

  return (
    <div className="puzzle-page">
      <button className="back-button" onClick={() => navigate(-1)}>
        Back
      </button>
      <h1 className="puzzle-title">Puzzle 3: Guess the Number</h1>
      <p className="puzzle-description">
        I have selected a random number between 1 and {maxRange}. You have{" "}
        {maxAttempts} attempts to guess it. After each guess, you'll be told if
        your guess is too high or too low.
      </p>
      <div className="puzzle-input">
        <input
          type="text"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          placeholder="Enter your guess"
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      {message && <div className="result-message">{message}</div>}
      <div className="attempts-info">
        Attempts: {attempts}/{maxAttempts}
      </div>
    </div>
  );
};

export default ThinkFoundationPuzzle3;
