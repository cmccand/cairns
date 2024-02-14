const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"))
});

app.get('/activities', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/activities.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});