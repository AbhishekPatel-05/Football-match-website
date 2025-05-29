require('dotenv').config();

const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

const API_URL = 'https://api.football-data.org/v4/matches?status=SCHEDULED';
const API_KEY = process.env.API_KEY;

// Health check endpoint for Railway
app.get('/', (req, res) => {
  res.json({ 
    status: 'Server is running!', 
    timestamp: new Date().toISOString(),
    endpoints: ['/matches']
  });
});

app.get('/matches', async (req, res) => {
  try {
    const response = await axios.get(API_URL, {
      headers: { 'X-Auth-Token': API_KEY }
    });

    const matches = response.data.matches.map((match) => ({
      id: match.id,
      homeTeam: match.homeTeam.name,
      awayTeam: match.awayTeam.name,
      utcDate: match.utcDate,
      competition: match.competition?.name || 'Unknown',
      status: match.status
    }));

    res.json(matches);
  } catch (error) {
    console.error('Error fetching data from football-data.org:', error.message);
    res.status(500).json({ error: 'Failed to fetch match data' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Handle 404
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});