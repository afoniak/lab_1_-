require('dotenv').config();

const express = require('express');
const app = express();

const responseText = process.env.RESPONSE_TEXT || 'Hello World';

app.get('/', (req, res) => {
  res.send(responseText);
});

const server = app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});

module.exports = { server, port: 3000 };
