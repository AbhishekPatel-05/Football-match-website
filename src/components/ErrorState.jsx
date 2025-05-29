import React from 'react';

const ErrorState = ({ error }) => {
  return (
    <div className="container">
      <div className="header">
        <h1 className="title">⚽ Football Matches</h1>
      </div>
      <div className="status-message error">
        <div>❌ {error}</div>
        <div style={{ fontSize: '1rem', marginTop: '15px', opacity: 0.8 }}>
          Make sure your backend server is running on port 3001
        </div>
        <div style={{ fontSize: '0.9rem', marginTop: '10px', opacity: 0.6 }}>
          Expected API endpoint: http://localhost:3001/matches
        </div>
      </div>
    </div>
  );
};

export default ErrorState;