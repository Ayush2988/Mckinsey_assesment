import React, { useEffect, useState, memo } from "react";
import { animateCounter } from "../util";
import "./metricsCard.css";

const TARGET_METRIC = 19365.29;
const METRIC_TODAY = 94;
const ANIMATION_DURATION = 1500; // ms

const MetricsCard = memo(() => {
  const [metric, setMetric] = useState(0);
  useEffect(() => {
    const cancel = animateCounter({
      target: TARGET_METRIC,
      duration: ANIMATION_DURATION,
      onUpdate: (val) => setMetric(val.toFixed(2)),
      onComplete: () => setMetric(TARGET_METRIC.toFixed(2))
    });
    return cancel;
  }, []);

  return (
    <div className="metrics-card fade-in-analytics">
      <div className="metrics-card-header">
        <img className="metrics-avatar" src="https://randomuser.me/api/portraits/lego/1.jpg" alt="User" />
        <span className="metrics-pin">📌</span>
        <span className="metrics-icon-group">
          <span className="metrics-icon">◐</span>
          <span className="metrics-icon">⟳</span>
        </span>
      </div>
      <div className="metrics-card-tabs">
        <button className="metrics-tab">1h</button>
        <button className="metrics-tab">12h</button>
        <button className="metrics-tab metrics-tab-active">24h</button>
        <button className="metrics-tab">Day</button>
      </div>
      <div className="metrics-card-metrics">
        <span className="metrics-checkbox">
          <input type="checkbox" checked readOnly />
          <span>Check Metrics</span>
        </span>
        <span className="metrics-progress">
          <span className="metrics-progress-badge">↑ 26%</span>
        </span>
      </div>
      <div className="metrics-card-value">
        <span className="metrics-value">{metric}</span>
        <span className="metrics-value-label">Checking Totally</span>
      </div>
      <div className="metrics-card-today">
        +{METRIC_TODAY} Today
      </div>
    </div>
  );
});

export default MetricsCard;
