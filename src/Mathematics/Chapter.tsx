import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import LectureOptions from "./LectureOptions"; // adjust path as needed
import "./Chapter.css";

const Chapter: React.FC = () => {
  const { level, chapter } = useParams(); // level and chapter from URL
  const navigate = useNavigate();

  return (
    <div className="chapter-page">
      <button className="back-button" onClick={() => navigate(-1)}>Back</button>
      <h1 className="chapter-title">{`${level?.toUpperCase()} - ${chapter}`}</h1>
      
      {/* Render the lecture options */}
      <LectureOptions level={level!} chapter={chapter!} />
      
      {/* Additional content for the chapter can go here */}
    </div>
  );
};

export default Chapter;
