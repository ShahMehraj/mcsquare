import React from "react";
import { useNavigate } from "react-router-dom";
import "./FoundationLectureList.css";

const FoundationLectureList: React.FC = () => {
  const navigate = useNavigate();
  const lectures = [
    { id: 1, title: "Lecture Note 1: Introduction to Number Systems" },
    { id: 2, title: "Lecture Note 2: Advanced Concepts in Number Systems" }
  ];

  const handleLectureClick = (lectureId: number) => {
    navigate(`/notes/foundation-number-systems/lecture-${lectureId}`);
  };

  return (
    <div className="lecture-list">
      <h2>Foundation Number Systems - Lecture Notes</h2>
      <ul>
        {lectures.map((lecture) => (
          <li
            key={lecture.id}
            onClick={() => handleLectureClick(lecture.id)}
            className="lecture-item"
          >
            {lecture.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoundationLectureList;
