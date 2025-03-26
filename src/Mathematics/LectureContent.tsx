import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./LectureContent.css";

const LectureContent: React.FC = () => {
  const { level, chapter, contentType } = useParams();
  const navigate = useNavigate();

  // Create an array of 10 items (dummy lectures)
  const items = Array.from({ length: 10 }, (_, index) => index + 1);

  // Map content types to labels
  const labelMap: Record<string, string> = {
    video: "Video Lecture",
    notes: "Lecture Note",
    problems: "Practice Problem"
  };

  // Fallback in case contentType is missing or doesn't match
  const label =
    contentType && labelMap[contentType] ? labelMap[contentType] : "Content";

  return (
    <div className="lecture-content-page">
      <button className="back-button" onClick={() => navigate(-1)}>
        Back
      </button>
      <h1 className="chapter-title">
        {level?.toUpperCase()} - {chapter} - {label}s
      </h1>
      <div className="content-container">
        {items.map((item) => (
          <div
            key={item}
            className={`content-item ${
              contentType === "video" ? "video-item" : ""
            }`}
          >
            {contentType === "video" && (
              <div className="instructor-pic">
                <img src="/instructor.jpg" alt="Instructor" />
              </div>
            )}
            <div className="content-label">
              {label} {item}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LectureContent;
