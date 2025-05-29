import React from 'react';

const Header = ({ matchCount }) => {
  return (
    <div className="header">
      <h1 className="title">⚽ Football Matches</h1>
      <p className="subtitle">Stay updated with the latest football fixtures</p>
      {matchCount > 0 && (
        <div className="matches-count">
          📅 Showing {matchCount} upcoming {matchCount === 1 ? 'match' : 'matches'}
        </div>
      )}
    </div>
  );
};

export default Header;