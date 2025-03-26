import React from "react";
import "./Math.css";
import { useNavigate } from "react-router-dom";

const Math: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="math-page">
      <button className="back-button" onClick={() => navigate(-1)}>Back</button>
      <div className="header">
        <h1 className="math-title">Mathematics</h1>
      </div>

      <div className="math-container">
        <div className="math-box" onClick={() => navigate("/math/foundation")}>
          <div className="icon-circle">
            <img src="/foundation.svg" alt="Foundation" />
          </div>
          <h2 className="math-button">Foundation</h2>
        </div>

        <div className="math-box" onClick={() => navigate("/math/intermediate")}>
          <div className="icon-circle">
            <img src="/intermediate.svg" alt="Intermediate" />
          </div>
          <h2 className="math-button">Intermediate</h2>
        </div>

        <div className="math-box" onClick={() => navigate("/math/advanced")}>
          <div className="icon-circle">
            <img src="/advanced.svg" alt="Advanced" />
          </div>
          <h2 className="math-button">Advanced</h2>
        </div>
      </div>
    </div>
  );
};

export default Math;
