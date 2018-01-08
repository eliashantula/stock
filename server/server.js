require("es6-promise").polyfill();
require("isomorphic-fetch");

// Require and configure dotenv
// Then set const for our API key
require("dotenv").config();
let data = require("./data");

// Require express and set up app to use it
const express = require("express");
const app = express();

// Set development port to 3001
app.set("port", process.env.PORT || 3001);

// Extract check status function for reuse
function checkStatus(response) {
  // If response not okay, throw an error
  if (!response.ok) {
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }

  // Otherwise just return the response
  return response;
}

// Extract fetch's json parsing function for reuse
function parseJSON(response) {
  return response.json();
}

app.get('/test', (req,res,next)=>{

console.log("hi")


})
app.get("/trade/api/", (req, res, next) => {
  // Sends a json response from Express
  res.json(data);
});

// Defines next action for errors
function errorHandler(err, req, res, next) {
  console.error("Error: ", err.stack);
  res.status(err.response ? err.response.status : 500);
  res.json({ error: err.message });
}

app.use(errorHandler);

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`);
});
