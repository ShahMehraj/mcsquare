import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ThinkFoundationPuzzle1.css";

const ThinkFoundationPuzzle1: React.FC = () => {
  const navigate = useNavigate();
  const [userAnswer, setUserAnswer] = useState("");
  const [result, setResult] = useState("");

  // The correct answer for this puzzle
  const correctAnswer = "8";

  const handleSubmit = () => {
    if (userAnswer.trim() === correctAnswer) {
      setResult("Correct! Well done!");
    } else {
      setResult("Incorrect. Please try again.");
    }
  };

  return (
    <div className="puzzle-page">
      <button className="back-button" onClick={() => navigate(-1)}>
        Back
      </button>
      <h1 className="puzzle-title">Puzzle 1: The Missing Number</h1>
      <p className="puzzle-description">
        Find the missing number in the following sequence: 2, 4, 6, __, 10.
      </p>
      <div className="puzzle-input">
        <input
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          placeholder="Enter your answer"
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      {result && <div className="result-message">{result}</div>}
    </div>
  );
};

export default ThinkFoundationPuzzle1;
