import React, { memo, useEffect, useState } from "react";
import { animateCounter } from "../util";
import "./monthTrackCard.css";


const TARGET_HOURS = 139;
const TOTAL_HOURS = 160;
const ANIMATION_DURATION = 1500; // ms

const MonthTrackCard = memo(() => {
  const [hours, setHours] = useState(0);
  useEffect(() => {
    const cancel = animateCounter({
      target: TARGET_HOURS,
      duration: ANIMATION_DURATION,
      onUpdate: (val) => setHours(Math.floor(val)),
      onComplete: () => setHours(TARGET_HOURS)
    });
    return cancel;
  }, []);

  return (
    <div className="month-track-card">
      <div className="month-track-header">
        <span className="month-track-title">This month track</span>
        <span className="month-track-progress">
          <span className="progress-badge" aria-label="18 percent increase">↑ 18%</span>
        </span>
        <span className="month-track-menu" aria-label="menu">☰</span>
      </div>
      <div className="month-track-details">
        <div className="month-track-icon">
          <span role="img" aria-label="settings">⚙️</span>
        </div>
        <div className="month-track-info">
          <span className="month-track-hours">
            <span className="month-track-count">{hours}</span>
            <span className="month-track-total">/{TOTAL_HOURS}h</span>
          </span>
          <span className="month-track-recommendation">
            Recommendations for enhancing data encryption.
          </span>
        </div>
        <div className="month-track-date">7d</div>
      </div>
    </div>
  );
});

export default MonthTrackCard;