const express = require('express');
const readLine = require('readline');
const Choices = require('prompt-choices');

const app = express();

// Load methods and config
const methods = require('./functions');
const config = require('./config');

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

let randomNum;
const choices = new Choices(config.choices);




const port = 3000;

app.listen(port, () => {
  console.log(config.choices);
});

