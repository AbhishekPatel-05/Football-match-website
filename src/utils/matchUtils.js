export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short'
  };
  return date.toLocaleDateString('en-US', options);
};

export const getMatchStatus = (matchDate) => {
  const now = new Date();
  const match = new Date(matchDate);
  const timeDiff = match.getTime() - now.getTime();
  const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
  
  if (daysDiff < 0) return 'Completed';
  if (daysDiff === 0) return 'Today';
  if (daysDiff === 1) return 'Tomorrow';
  if (daysDiff <= 7) return `In ${daysDiff} days`;
  return 'Upcoming';
};

export const getStatusColor = (status) => {
  switch (status) {
    case 'Today': return 'linear-gradient(45deg, #ff6b6b, #ff8e8e)';
    case 'Tomorrow': return 'linear-gradient(45deg, #ffd93d, #ffed4e)';
    case 'Completed': return 'linear-gradient(45deg, #95a5a6, #bdc3c7)';
    default: return 'linear-gradient(45deg, #4ecdc4, #44a08d)';
  }
};