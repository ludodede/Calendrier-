import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const FlameIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2C10.5 6 7 8.5 7 12.5C7 15.5 9.2 18 12 18C14.8 18 17 15.5 17 12.5C17 8.5 13.5 6 12 2Z"
      fill="#FF9600"
    />
    <path
      d="M12 8C11.2 10 9.5 11.5 9.5 13.5C9.5 15.2 10.6 16.5 12 16.5C13.4 16.5 14.5 15.2 14.5 13.5C14.5 11.5 12.8 10 12 8Z"
      fill="#FFC800"
    />
  </svg>
);

const StarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2L14.9 8.6L22 9.3L16.8 14L18.2 21L12 17.3L5.8 21L7.2 14L2 9.3L9.1 8.6L12 2Z"
      fill="#FFC800"
    />
  </svg>
);

const HomeIcon = ({ active }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3 12L12 3L21 12V21H15V15H9V21H3V12Z"
      fill={active ? '#58CC02' : '#AFAFAF'}
      stroke={active ? '#58CC02' : '#AFAFAF'}
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

const ExerciseIcon = ({ active }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5 4V20M19 4V20M5 12H19M3 7H7M17 7H21M3 17H7M17 17H21"
      stroke={active ? '#58CC02' : '#AFAFAF'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DashboardIcon = ({ active }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="14" width="5" height="7" rx="1" fill={active ? '#58CC02' : '#AFAFAF'} />
    <rect x="9.5" y="8" width="5" height="13" rx="1" fill={active ? '#58CC02' : '#AFAFAF'} />
    <rect x="16" y="3" width="5" height="18" rx="1" fill={active ? '#58CC02' : '#AFAFAF'} />
  </svg>
);

const Header = ({ stats = { totalPoints: 0, streak: 0 } }) => {
  const location = useLocation();

  const tabs = [
    { path: '/categories', label: 'Accueil', Icon: HomeIcon, exact: true },
    { path: '/categories', label: 'Exercices', Icon: ExerciseIcon, id: 'exercices' },
    { path: '/dashboard', label: 'Progr\u00e8s', Icon: DashboardIcon },
  ];

  const isActive = (tab) => {
    if (tab.id === 'exercices') return false;
    if (tab.path === '/dashboard') return location.pathname === '/dashboard';
    return location.pathname === '/categories' || location.pathname === '/';
  };

  return (
    <>
      {/* Top Stats Bar */}
      <header className="top-bar">
        <div className="top-bar-content">
          <div className="top-bar-brand">MaPlume</div>
          <div className="top-bar-stats">
            <div className="stat-item streak">
              <FlameIcon />
              <span className="stat-value">{stats.streak}</span>
            </div>
            <div className="stat-item points">
              <StarIcon />
              <span className="stat-value">{stats.totalPoints}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Bottom Navigation Bar */}
      <nav className="bottom-nav">
        {tabs.map((tab) => {
          const active = isActive(tab);
          return (
            <Link
              key={tab.id || tab.path}
              to={tab.path}
              className={`nav-tab ${active ? 'nav-tab--active' : ''}`}
            >
              <tab.Icon active={active} />
              <span className="nav-tab-label">{tab.label}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
};

export default Header;
