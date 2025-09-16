import React from "react";
import "./securityHeader.css";

const SecurityHeader = () => (
  <div className="security-header fade-in-analytics">
    <div className="security-header-user">
      <img
        className="security-header-avatar"
        src="https://randomuser.me/api/portraits/lego/2.jpg"
        alt="User"
      />
      <span className="security-header-icon">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#6c4cf1" />
          <path d="M12 8v4l2 2" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </span>
      <span className="security-header-name">Samenta</span>
    </div>
    <div className="security-header-info">
      <h2 className="security-header-title">Security Dashboard</h2>
      <span className="security-header-notification">
        You have 2 new unread notifications.
      </span>
    </div>
  </div>
);

export default SecurityHeader;