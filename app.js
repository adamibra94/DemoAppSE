const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('<h1>Service Engineering Azure Deployment - Adam Ibragimov</h1>');
});

app.listen(port, () => {
  console.log(`DemoSE-App läuft unter http://localhost:${port}`);
});



