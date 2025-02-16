const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

const NASA_API_KEY = 'F07itQeMFn5THidya5Ls0Vu59kFncbq6oex8Y6QZ';  // Your actual API key

app.get('/api/apod', async (req, res) => {
  try {
    const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`);
    res.json(response.data); // Send the data to the frontend
  } catch (error) {
    console.error('Error fetching APOD data:', error);
    res.status(500).send('Error fetching data');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
