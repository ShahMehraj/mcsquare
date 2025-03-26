import React, { useState } from "react";
import { MathJax } from "react-mathjax2";
import "./InteractiveChallenge.css";

interface InteractiveChallengeProps {
  question: string;
  type: "mcq" | "text";
  options?: string[];
  correctAnswer: string;
  solution: string;
}

const InteractiveChallenge: React.FC<InteractiveChallengeProps> = ({
  question,
  type,
  options,
  correctAnswer,
  solution,
}) => {
  const [userAnswer, setUserAnswer] = useState("");
  const [result, setResult] = useState("");
  const [showSolution, setShowSolution] = useState(false);

  const handleTextSubmit = () => {
    if (userAnswer.trim().toLowerCase() === correctAnswer.trim().toLowerCase()) {
      setResult("Correct! Well done!");
    } else {
      setResult("Incorrect, please try again.");
    }
  };

  const handleMCQSelect = (option: string) => {
    setUserAnswer(option);
    if (option === correctAnswer) {
      setResult("Correct! Well done!");
    } else {
      setResult("Incorrect, please try again.");
    }
  };

  return (
    <div className="interactive-challenge">
      <div className="question">
        <MathJax dynamic>{question}</MathJax>
      </div>
      {type === "text" ? (
        <div className="text-challenge">
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            placeholder="Your answer"
          />
          <button onClick={handleTextSubmit}>Submit</button>
        </div>
      ) : (
        <div className="mcq-challenge">
          {options?.map((option, index) => (
            <button key={index} onClick={() => handleMCQSelect(option)}>
              {option}
            </button>
          ))}
        </div>
      )}
      {result && <div className="result">{result}</div>}
      <button onClick={() => setShowSolution(!showSolution)}>
        {showSolution ? "Hide Solution" : "Show Solution"}
      </button>
      {showSolution && (
        <div className="solution">
          <MathJax dynamic>{solution}</MathJax>
        </div>
      )}
    </div>
  );
};

export default InteractiveChallenge;
