import React from "react";
import { useNavigate } from "react-router-dom";
import "./LectureOptions.css";

interface LectureOptionsProps {
  level: string;   
  chapter: string; 
}

const LectureOptions: React.FC<LectureOptionsProps> = ({ level, chapter }) => {
  const navigate = useNavigate();

  // Define the options for the lecture
  const options = [
    { label: "Video Lectures", icon: "/video.svg", route: "video" },
    { label: "Practice Problems", icon: "/problems.svg", route: "problems" },
    { label: "Lecture Notes", icon: "/notes.svg", route: "notes" }
  ];

  return (
    <div className="lecture-options-container">
      {options.map((option, index) => (
        <div
          key={index}
          className="lecture-option"
          onClick={() => navigate(`/math/${level}/${chapter}/${option.route}`)}
        >
          <div className="icon-circle">
            <img src={option.icon} alt={option.label} />
          </div>
          <h2 className="lecture-option-label">{option.label}</h2>
        </div>
      ))}
    </div>
  );
};

export default LectureOptions;
