const express = require('express');
const app = express();
let port = process.env.PORT || 3000;

const living_room = require('./living_room.json');
const smart_watch = require('./smart_watch.json');

app.get('/', (req, res) => {
  res.send('This is an API for the Harmony OS Neumorphism Library.');
});

app.get('/neumorphism/living_room', (req, res) => {
  res.send(living_room);
});

app.get('/neumorphism/smart_watch', (req, res) => {
  res.send(smart_watch);
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
