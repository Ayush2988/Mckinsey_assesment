import React, { useState, useEffect, memo } from "react";
import { animateCounter } from "../util";
import "./analyticsCard.css";

const COUNTRY_TARGETS = [
  { name: "USA", value: 100, color: "#6c4cf1" },
  { name: "Canada", value: 80, color: "#6c4cf1" },
  { name: "UK", value: 60, color: "#a89cf1" },
  { name: "Australia", value: 30, color: "#222" }
];

const summaryData = [
  { label: "Ddos Attack", value: 37, color: "#6c4cf1" },
  { label: "Phishing Attack", value: 23, color: "#a89cf1" },
  { label: "Uptime", value: 29, color: "#6c4cf1" },
  { label: "Encryption", value: 21, color: "#222" }
];

const TARGET_MAIN = 159;
const TOTAL_MAIN = 160;
const ANIMATION_DURATION = 1500;

const AnalyticsCard = memo(() => {
  const [activeTab, setActiveTab] = useState("Worldwide");
  const [mainValue, setMainValue] = useState(0);
  const [countryValues, setCountryValues] = useState([0, 0, 0, 0]);

  
  useEffect(() => {

     const cancel = animateCounter({
      target: TARGET_MAIN,
      duration: ANIMATION_DURATION,
      onUpdate: (val) => setMainValue(Math.floor(val)),
      onComplete: () => setMainValue(TARGET_MAIN)
    });
    // Animate each country bar using animateCounter
    let cancels = [];
    COUNTRY_TARGETS.forEach((c, i) => {
      cancels[i] = animateCounter({
        target: c.value,
        duration: ANIMATION_DURATION,
        onUpdate: (val) => {
          setCountryValues(prev => {
            const updated = [...prev];
            updated[i] = Math.floor(val);
            return updated;
          });
        },
        onComplete: () => {
          setCountryValues(prev => {
            const updated = [...prev];
            updated[i] = c.value;
            return updated;
          });
        }
      });
    });
    return () => {
      cancels.forEach(cancel => cancel && cancel());
      cancel();
    };
  }, []);

  return (
    <div className="analytics-card fade-in-analytics">
      <div className="analytics-tabs">
        <button
          className={`analytics-tab${activeTab === "Worldwide" ? " active" : ""}`}
          onClick={() => setActiveTab("Worldwide")}
        >
          Worldwide
        </button>
        <button
          className={`analytics-tab${activeTab === "My Country" ? " active" : ""}`}
          onClick={() => setActiveTab("My Country")}
        >
          My Country
        </button>
      </div>
      <div className="analytics-bars">
        {COUNTRY_TARGETS.map((c, i) => (
          <div className="analytics-bar-row" key={c.name}>
            <span className="analytics-bar-label">{c.name}</span>
            <div className="analytics-bar-bg">
              <div
                className="analytics-bar"
                style={{
                  width: `${countryValues[i]}%`,
                  background: c.color
                }}
              />
            </div>
          </div>
        ))}
        <div className="analytics-bar-scale">
          <span>0%</span>
          <span>50%</span>
          <span>100%</span>
        </div>
      </div>
      <div className="analytics-summary">
        <div className="analytics-summary-left">
          {summaryData.map((s) => (
            <div className="analytics-summary-row" key={s.label}>
              <span
                className="analytics-summary-dot"
                style={{ background: s.color }}
              />
              <span className="analytics-summary-label">{s.label}</span>
              <span className="analytics-summary-value" style={{ color: s.color }}>
                - {s.value}%
              </span>
            </div>
          ))}
        </div>
        <div className="analytics-summary-right">
          <div className="analytics-summary-arrow">
            <span>↓</span>
            <span>↑</span>
          </div>
          <div className="analytics-summary-main">
            <span className="analytics-summary-main-value">{mainValue}</span>
            <span className="analytics-summary-main-total">/{TOTAL_MAIN}h</span>
          </div>
        </div>
      </div>
    </div>
  );
});

export default AnalyticsCard;