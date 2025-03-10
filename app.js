const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Service Engineering Azure Deployment - Adam Ibragimov</h1>');
});

app.listen(port, () => {
  console.log(`ToDo-App läuft unter http://localhost:${port}`);
});



