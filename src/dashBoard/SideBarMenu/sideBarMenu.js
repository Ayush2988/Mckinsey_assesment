import React from "react";
import "./dragonSidebar.css";

const menuItems = [
  { label: "Se", color: "#5b7cf7", icon: "layers" },
  { label: "Fe", color: "#ff5a5f", icon: null },
  { label: "Ds", color: "#6c4cf1", icon: null },
  { label: "Vs", color: "#ffc34d", icon: null },
  { label: "Qu", color: "#19c37d", icon: null }
];

const sidebarLinks = [
  { icon: "🪲", label: "Bug Box" },
  { icon: "🎣", label: "Fishing Tracking" },
  { icon: "🔘", label: "Deep Stats" },
  { icon: "🔖", label: "Booked" },
  { icon: "⚙️", label: "Settings" },
  { icon: "💬", label: "Support" }
];

const DragonSidebar = () => (
  <div className="dragon-sidebar">
    <div className="dragon-sidebar-header">
      <img
        src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
        alt="Logo"
        className="dragon-sidebar-logo"
      />
      <span className="dragon-sidebar-title">Dragon</span>
      <span className="dragon-sidebar-shortcut">⌘s</span>
      <div className="dragon-sidebar-user">
        <img
          className="dragon-sidebar-avatar"
          src="https://randomuser.me/api/portraits/lego/2.jpg"
          alt="User"
        />
        <span className="dragon-sidebar-user-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="#6c4cf1" />
            <path d="M12 8v4l2 2" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>
        <span className="dragon-sidebar-user-name">Samenta</span>
      </div>
    </div>
    <div className="dragon-sidebar-menu">
      {menuItems.map((item, idx) => (
        <div
          key={item.label}
          className={`dragon-sidebar-menu-item${idx === 0 ? " active" : ""}`}
          style={{ background: item.color }}
        >
          <span className="dragon-sidebar-menu-label">{item.label}</span>
          {idx === 0 && (
            <span className="dragon-sidebar-menu-arrow">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M8 12h8" stroke="#222" strokeWidth="2" strokeLinecap="round" />
                <path d="M14 8l4 4-4 4" stroke="#222" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
          )}
        </div>
      ))}
    </div>
    <div className="dragon-sidebar-security">
      <div className="dragon-sidebar-security-header">
        <span className="dragon-sidebar-security-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="#5b7cf7" />
            <path d="M12 8v4l2 2" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>
        <span className="dragon-sidebar-security-title">Security</span>
        <span className="dragon-sidebar-security-badge">3</span>
        <span className="dragon-sidebar-security-arrow">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M8 12h8" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            <path d="M14 8l4 4-4 4" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>
      </div>
      <div className="dragon-sidebar-security-links">
        {sidebarLinks.map(link => (
          <div className="dragon-sidebar-security-link" key={link.label}>
            <span className="dragon-sidebar-security-link-icon">{link.icon}</span>
            <span className="dragon-sidebar-security-link-label">{link.label}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default DragonSidebar;