const express = require('express');
const app = express();
const port = 3000;

// Load the JSON file containing the parent/child objects
const data = require('./data.json');

// Create an endpoint for each parent object
data.forEach(parent => {
  app.get(`/${parent.id}`, (req, res) => {
    res.json(parent);
  });

  // Create an endpoint for each child object
  parent.children.forEach(child => {
    app.get(`/${parent.id}/${child.id}`, (req, res) => {
      res.json(child);
    });
  });
});

app.listen(port, () => {
  console.log(`API listening on port ${port}!`);
});
