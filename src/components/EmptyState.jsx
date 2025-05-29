import React from 'react';

const EmptyState = () => {
  return (
    <div className="status-message">
      <div>📭 No matches found</div>
      <div style={{ fontSize: '1rem', marginTop: '10px', opacity: 0.7 }}>
        Check back later for upcoming fixtures
      </div>
    </div>
  );
};

export default EmptyState;