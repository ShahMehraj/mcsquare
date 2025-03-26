import React from "react";
import { useNavigate } from "react-router-dom";
import "./ThinkFoundation.css";

const ThinkFoundation: React.FC = () => {
  const navigate = useNavigate();

  // Dummy puzzle names – update these later as needed
  const puzzles = [
    { id: 1, name: "Puzzle 1: The Missing Number" },
    { id: 2, name: "Puzzle 2: Riddle of the Sphinx" },
    { id: 3, name: "Puzzle 3: Binary Search" },
    { id: 4, name: "Puzzle 4: Pattern Sequence" },
    { id: 5, name: "Puzzle 5: Maze Challenge" },
    { id: 6, name: "Puzzle 6: Word Scramble" },
    { id: 7, name: "Puzzle 7: Code Breaker" },
    { id: 8, name: "Puzzle 8: Logic Grid" },
    { id: 9, name: "Puzzle 9: Math Riddle" },
    { id: 10, name: "Puzzle 10: Hidden Figures" },
  ];

  const handlePuzzleClick = (puzzleId: number) => {
    // For now, we route to puzzle-1 only when puzzle id is 1,
    // You can expand the logic later to support all puzzles.
    navigate(`/think/foundation/puzzle-${puzzleId}`);
  };

  return (
    <div className="think-foundation-page">
      <button className="back-button" onClick={() => navigate(-1)}>
        Back
      </button>
      <h1 className="page-title">Foundation Puzzles</h1>
      <div className="puzzles-container">
        {puzzles.map((puzzle) => (
          <div
            key={puzzle.id}
            className="puzzle-box"
            onClick={() => handlePuzzleClick(puzzle.id)}
          >
            {puzzle.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThinkFoundation;
