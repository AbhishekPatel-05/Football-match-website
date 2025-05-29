import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/Header';
import MatchCard from './components/MatchCard';
import LoadingState from './components/LoadingState';
import ErrorState from './components/ErrorState';
import EmptyState from './components/EmptyState';

function App() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/matches')
      .then(res => {
        setMatches(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError('Failed to fetch matches. Please check your backend server.');
        setLoading(false);
      });
  }, []);

  if (loading) return <LoadingState />;
  if (error) return <ErrorState error={error} />;

  return (
    <div className="container">
      <Header matchCount={matches.length} />
      
      {matches.length === 0 ? (
        <EmptyState />
      ) : (
        <>
          <div className="matches-grid">
            {matches.map((match, index) => (
              <MatchCard 
                key={match.id || index} 
                match={match} 
              />
            ))}
          </div>
          
          {matches.length > 5 && (
            <div className="footer-message">
              🏆 More matches coming soon...
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;
