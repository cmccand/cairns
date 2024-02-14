// require('dotenv').config();
// const express = require('express');
// const app = express();
// const path = require('path')
// const cors = require('cors');
// const PORT = process.env.PORT || 3000;

// console.log("this is the  server port:", PORT);

// app.use(cors());
// app.use(express.json());

// // Serve static files from the public directory
// app.use(express.static(path.join(__dirname, 'public')));

// // Set Content-Type header for CSS files
// app.use('*.css', (req, res, next) => {
//   res.setHeader('Content-Type', 'text/css');
//   next();
// });

// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/index.html"))
// });

// app.get('/activities', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public/activities.html'));
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

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

// app.get('/styles', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public/styles.css'));
// });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});