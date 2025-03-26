import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Math from "./Mathematics/Math";
// import Foundation from "./Mathematics/Level";
import Level from "./Mathematics/Level";
import Chapter from "./Mathematics/Chapter";
import LectureContent from "./Mathematics/LectureContent";
import FoundationLectureList from "./pages/FoundationLectureList";
import FoundationLectureNote from "./pages/FoundationLectureNote";
import Code from "./pages/Code";
import Think from "./pages/Think";
import ThinkFoundation from "./pages/ThinkFoundation";
import ThinkFoundationPuzzle1 from "./pages/ThinkFoundationPuzzle1";
import ThinkFoundationPuzzle2 from "./pages/ThinkFoundationPuzzle2";
import ThinkFoundationPuzzle3 from "./pages/ThinkFoundationPuzzle3";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* <Route path="/math" element={<Math />} />
        <Route path="/foundation" element={<Foundation />} />  */}
        <Route path="/math" element={<Math />} />
        <Route path="/math/:level" element={<Level />} />
        <Route path="/math/:level/:chapter" element={<Chapter />} />
        <Route
          path="/math/:level/:chapter/:contentType"
          element={<LectureContent />}
        />
        <Route
          path="/notes/foundation-number-systems"
          element={<FoundationLectureList />}
        />
        {/* Dynamic route for individual lecture notes (Lecture 1, Lecture 2, etc.) */}
        <Route
          path="/notes/foundation-number-systems/lecture-:lectureId"
          element={<FoundationLectureNote />}
        />
        <Route path="/code" element={<Code />} />
        <Route path="/think" element={<Think />} />
        <Route path="/think/foundation" element={<ThinkFoundation />} />
        <Route
          path="/think/foundation/puzzle-1"
          element={<ThinkFoundationPuzzle1 />}
        />

        <Route
          path="/think/foundation/puzzle-2"
          element={<ThinkFoundationPuzzle2 />}
        />
        <Route
          path="/think/foundation/puzzle-3"
          element={<ThinkFoundationPuzzle3 />}
        />
      </Routes>
    </Router>
  );
};

export default App;
