import React from "react";
import "./gradientPanel.css";

const GradientPanel = () => (
  <div className="gradient-panel">
    <svg className="gradient-panel-waves" width="100%" height="100%" viewBox="0 0 300 900" preserveAspectRatio="none">
      <path d="M0,50 Q150,100 300,50 T600,50" stroke="rgba(255,255,255,0.08)" strokeWidth="2" fill="none"/>
      <path d="M0,150 Q150,200 300,150 T600,150" stroke="rgba(255,255,255,0.08)" strokeWidth="2" fill="none"/>
      <path d="M0,250 Q150,300 300,250 T600,250" stroke="rgba(255,255,255,0.08)" strokeWidth="2" fill="none"/>
      <path d="M0,350 Q150,400 300,350 T600,350" stroke="rgba(255,255,255,0.08)" strokeWidth="2" fill="none"/>
      <path d="M0,450 Q150,500 300,450 T600,450" stroke="rgba(255,255,255,0.08)" strokeWidth="2" fill="none"/>
    </svg>
    <span className="gradient-panel-dot" style={{ top: "80px", left: "60px" }} />
    <span className="gradient-panel-dot" style={{ top: "320px", left: "140px" }} />
    <span className="gradient-panel-dot" style={{ top: "700px", left: "80px" }} />
  </div>
);

export default GradientPanel;