const express = require('express');
const readLine = require('readline');
const Choices = require('prompt-choices');

const app = express();

// Load methods - functions
const methods = require('./functions');
const config = require('./config');




const port = 3000;

app.listen(port, () => {
  // console.log(methods.getRandom(config.min, config.max));
  // console.log(methods.getRandom(45, 50));
  // console.log(methods.minIntFromArr(config.array));
  // console.log(methods.minIntFromArr([22,11,5,36,8,{},'','pera mika',66]));
  // console.log(methods.minIntFromStr(config.string));
  // console.log(methods.minIntFromStr('Danas 45 stepeni, a u hladu do 30. Jutarnja 16'));
  // console.log(methods.minIntFromStr('Danas 45 stepeni, a u hladu do 30. Jutarnja 16'));
  // console.log(methods.concStrByLen(['1','12','123','1234','12345','123456','1234567','12345678', ], 1));
  console.log(methods.concStrByLen(['abcg','ac','bdcaa','edagas', 'a','zzzzzzzzzzzz' ], 1));
  
});

