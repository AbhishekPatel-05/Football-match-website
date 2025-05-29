const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());

const API_URL = 'https://api.football-data.org/v4/matches?status=SCHEDULED';
const API_KEY = 'f48f73dc86c549848276ff5c3abbd1e5'; 

app.get('/matches', async (req, res) => {
  try {
    const response = await axios.get(API_URL, {
      headers: { 'X-Auth-Token': API_KEY }
    });

    const matches = response.data.matches.map((match) => ({
      id: match.id,
      homeTeam: match.homeTeam.name,
      awayTeam: match.awayTeam.name,
      utcDate: match.utcDate
    }));

    res.json(matches);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch match data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
