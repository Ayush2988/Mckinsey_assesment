import React, { useEffect, useState, memo } from "react";
import { animateCounter } from "../util";
import "./deepStaticsCard.css";

const TARGET_BAD_SOFTWARE = 37;
const ANIMATION_DURATION = 1500; // ms

const DeepStaticsCard = memo(() => {
  const [badSoftware, setBadSoftware] = useState(0);
  useEffect(() => {
    const cancel = animateCounter({
      target: TARGET_BAD_SOFTWARE,
      duration: ANIMATION_DURATION,
      onUpdate: (val) => setBadSoftware(Math.floor(val)),
      onComplete: () => setBadSoftware(TARGET_BAD_SOFTWARE)
    });
    return cancel;
  }, []);

  return (
    <div className="deep-statics-card">
      <div className="deep-statics-header">
        <span className="deep-statics-title">Deep Statics</span>
        <span className="deep-statics-icon-group">
          <span className="deep-statics-dot" />
          <span className="deep-statics-dot" />
          <span className="deep-statics-dot" />
          <span className="deep-statics-dot" />
        </span>
      </div>
      <div className="deep-statics-chart">
        <svg width="280" height="280" viewBox="0 0 180 180">
          <circle cx="90" cy="90" r="70" stroke="#eceafe" strokeWidth="8" fill="none" />
          <circle cx="90" cy="90" r="70" stroke="#6c4cf1" strokeWidth="8" fill="none"
            strokeDasharray={2 * Math.PI * 70}
            strokeDashoffset={2 * Math.PI * 70 * (1 - badSoftware / 100)}
            strokeLinecap="round"
            style={{ transition: 'stroke-dashoffset 0.5s' }}
          />
          <circle cx="90" cy="90" r="50" stroke="#eceafe" strokeWidth="8" fill="none" />
          <circle cx="90" cy="90" r="50" stroke="#222" strokeWidth="8" fill="none"
            strokeDasharray={2 * Math.PI * 50}
            strokeDashoffset={2 * Math.PI * 50 * (1 - badSoftware / 100)}
            strokeLinecap="round"
            style={{ transition: 'stroke-dashoffset 0.5s' }}
          />
          <circle cx="90" cy="90" r="35" stroke="#eceafe" strokeWidth="6" fill="none" />
          <circle cx="90" cy="90" r="35" stroke="#6c4cf1" strokeWidth="6" fill="none"
            strokeDasharray={2 * Math.PI * 35}
            strokeDashoffset={2 * Math.PI * 35 * (1 - badSoftware / 100)}
            strokeLinecap="round"
            style={{ transition: 'stroke-dashoffset 0.5s' }}
          />
        </svg>
        <div className="deep-statics-center">
          <span className="deep-statics-value">{badSoftware}</span>
          <span className="deep-statics-label">Bad Software</span>
        </div>
      </div>
    </div>
  );
});

export default DeepStaticsCard;
