import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Dashboard.css";

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <header className="header">
        {/* Left Section: Logo */}
        <div className="header-left">
          <img src="/logo.png" alt="Logo" className="logo" />
        </div>

        {/* Center Section: Title */}
        <h1 className="title">mc-square</h1>

        {/* Right Section: User Icon */}
        <div className="header-right">
          <img src="/user-icon.png" alt="User" className="user-icon" />
        </div>
      </header>

      {/* Rest of your dashboard content */}
      <div className="buttons-container">
        {/* Math container */}
        <Link to="/math" className="button">
          <img src="/math.png" alt="Math" className="math" />
          <p>math</p>
        </Link>
        <div className="button">
          <img src="/chess.png" alt="Chess" />
          <p>chess</p>
        </div>
        {/* Code container */}
        <Link to="/code" className="button">
          <img src="/code.png" alt="Code" />
          <p>code</p>
        </Link>
        {/* Think container now wrapped with a Link */}
        <Link to="/think" className="button">
          <img src="/think.png" alt="Think" />
          <p>think</p>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
