import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ThinkFoundationPuzzle2.css";

const ThinkFoundationPuzzle2: React.FC = () => {
  const navigate = useNavigate();
  const [userAnswer, setUserAnswer] = useState("");
  const [result, setResult] = useState("");

  // Correct answer for the riddle (case-insensitive)
  const correctAnswer = "human";

  const handleSubmit = () => {
    if (userAnswer.trim().toLowerCase() === correctAnswer) {
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
      <h1 className="puzzle-title">Puzzle 2: Riddle of the Sphinx</h1>
      <p className="puzzle-description">
        What walks on four legs in the morning, two legs at noon, and three legs
        in the evening?
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

export default ThinkFoundationPuzzle2;
