const express = require('express');
const app = express();
let port = process.env.PORT || 3000;

const smart_watch = require('./smart_watch.json');
const living_room = require('./living_room.json');

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/neumorphism/smart_watch', (req, res) => {
  res.send(smart_watch);
});

app.get('/neumorphism/living_room', (req, res) => {
  res.send(living_room);
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
