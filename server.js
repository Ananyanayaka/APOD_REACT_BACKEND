const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

// Use the port from Heroku environment or fallback to 5000 locally
const port = process.env.PORT || 5000;

app.use(cors()); // Enable CORS

const NASA_API_KEY = 'F07itQeMFn5THidya5Ls0Vu59kFncbq6oex8Y6QZ';  // Your NASA API key

app.get('/api/apod', async (req, res) => {
  try {
    // Call NASA's API for the Astronomy Picture of the Day
    const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`);
    res.json(response.data);  // Send the APOD data as a response
  } catch (error) {
    console.error('Error fetching APOD data:', error);
    res.status(500).send('Error fetching data');  // Send an error if the API request fails
  }
});

// Bind to the dynamic port provided by Heroku or fallback to 5000
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
