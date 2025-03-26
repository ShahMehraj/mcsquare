import React from "react";
import { useNavigate } from "react-router-dom";
import "./Code.css";

const Code: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="code-page">
      <button className="back-button" onClick={() => navigate(-1)}>
        Back
      </button>
      <div className="header">
        <h1 className="code-title">Code</h1>
      </div>

      <div className="code-container">
        <div className="code-box" onClick={() => navigate("/code/foundation")}>
          <div className="icon-circle">
            <img src="/foundation.svg" alt="Foundation" />
          </div>
          <h2 className="code-button">Foundation</h2>
        </div>

        <div
          className="code-box"
          onClick={() => navigate("/code/intermediate")}
        >
          <div className="icon-circle">
            <img src="/intermediate.svg" alt="Intermediate" />
          </div>
          <h2 className="code-button">Intermediate</h2>
        </div>

        <div className="code-box" onClick={() => navigate("/code/advanced")}>
          <div className="icon-circle">
            <img src="/advanced.svg" alt="Advanced" />
          </div>
          <h2 className="code-button">Advanced</h2>
        </div>
      </div>
    </div>
  );
};

export default Code;
