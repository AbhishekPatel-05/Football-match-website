import React from 'react';
import { formatDate, getMatchStatus, getStatusColor } from '../utils/matchUtils';

const MatchCard = ({ match }) => {
  const status = getMatchStatus(match.utcDate);
  
  return (
    <div className="card">
      <div className="match-header">
        <div className="team-container">
          <div className="team">
            {match.homeTeam || match.team1 || 'Home Team'}
          </div>
          <div className="vs-divider">VS</div>
          <div className="team">
            {match.awayTeam || match.team2 || 'Away Team'}
          </div>
        </div>
      </div>
      
      <div className="match-details">
        <div className="date">
          <span className="date-icon">📅</span>
          {formatDate(match.utcDate || match.date)}
        </div>
        
        <div 
          className="match-status" 
          style={{ background: getStatusColor(status) }}
        >
          {status}
        </div>
      </div>
    </div>
  );
};

export default MatchCard;