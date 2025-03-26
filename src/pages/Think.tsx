import React from "react";
import { useNavigate } from "react-router-dom";
import "./Think.css";

const Think: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="think-page">
      <button className="back-button" onClick={() => navigate(-1)}>
        Back
      </button>
      <div className="header">
        <h1 className="think-title">Think</h1>
      </div>

      <div className="think-container">
        <div
          className="think-box"
          onClick={() => navigate("/think/foundation")}
        >
          <div className="icon-circle">
            <img src="/foundation.svg" alt="Foundation" />
          </div>
          <h2 className="think-button">Foundation</h2>
        </div>

        <div
          className="think-box"
          onClick={() => navigate("/think/intermediate")}
        >
          <div className="icon-circle">
            <img src="/intermediate.svg" alt="Intermediate" />
          </div>
          <h2 className="think-button">Intermediate</h2>
        </div>

        <div className="think-box" onClick={() => navigate("/think/advanced")}>
          <div className="icon-circle">
            <img src="/advanced.svg" alt="Advanced" />
          </div>
          <h2 className="think-button">Advanced</h2>
        </div>
      </div>
    </div>
  );
};

export default Think;
