import React from 'react';

const LoadingState = () => {
  return (
    <div className="container">
      <div className="header">
        <h1 className="title">⚽ Football Matches</h1>
      </div>
      <div className="status-message loading">
        <div>🔄 Loading matches...</div>
        <div style={{ fontSize: '1rem', marginTop: '10px', opacity: 0.7 }}>
          Fetching the latest football fixtures
        </div>
      </div>
    </div>
  );
};

export default LoadingState;