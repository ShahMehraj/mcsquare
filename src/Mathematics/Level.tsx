import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Level.css";

const chapters = [
  "Number Systems",
  "Algebra",
  "Polynomials",
  "Sequence and Series",
  "Combinatorics",
  "Geometry",
  "Trigonometry"
];

const Level: React.FC = () => {
  const { level } = useParams();
  const navigate = useNavigate();

  return (
    <div className="level-page">
      <button className="back-button" onClick={() => navigate(-1)}>
        Back
      </button>
      <h1 className="level-title">{level?.toUpperCase()} Maths</h1>
      <div className="chapters-wrapper">
        <div className="chapters-container">
          {chapters.map((chapter, index) => (
            <div
              key={index}
              className="chapter-row"
              onClick={() => navigate(`/math/${level}/${chapter.toLowerCase().replace(/ /g, "-")}`)}
            >
              <div className="chapter-box">{chapter}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Level;
