import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MathJax, MathJaxContext } from "react-mathjax2";
import InteractiveChallenge from "../components/InteractiveChallenge";
import lectureNote1 from "../content/foundationLectureNote1.json";
import lectureNote2 from "../content/foundationLectureNote2.json";
import "./FoundationLectureNote.css";

const FoundationLectureNote: React.FC = () => {
  const { lectureId } = useParams<{ lectureId: string }>();
  const navigate = useNavigate();

  let lectureContent;
  if (lectureId === "1") {
    lectureContent = lectureNote1;
  } else if (lectureId === "2") {
    lectureContent = lectureNote2;
  } else {
    return <div>Lecture not found.</div>;
  }

  return (
    <MathJaxContext>
      <div className="lecture-note-page">
        <button onClick={() => navigate(-1)} className="back-button">
          Back
        </button>
        <h1 className="lecture-title">{lectureContent.title}</h1>
        <div className="lecture-content">
          {lectureContent.content.map((item, index) => {
            if (item.type === "text") {
              return <p key={index}>{item.data}</p>;
            } else if (item.type === "latex") {
              return (
                <div key={index} className="latex-block">
                  <MathJax dynamic>{item.data}</MathJax>
                </div>
              );
            }
            return null;
          })}
        </div>
        <h2 className="challenges-title">Practice Problems & Challenges</h2>
        <div className="challenges-container">
          {lectureContent.challenges.map((challenge: any) => (
            <InteractiveChallenge
              key={challenge.id}
              question={challenge.question}
              type={challenge.type}
              options={challenge.options}
              correctAnswer={challenge.correctAnswer}
              solution={challenge.solution}
            />
          ))}
        </div>
      </div>
    </MathJaxContext>
  );
};

export default FoundationLectureNote;
