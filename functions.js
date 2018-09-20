// Load config.js
const config = require('./config');


// Function 1
const random = (min, max) => {

  // Set config values
  config.min = min;
  config.max = max;
  // Generate random num betwen min and max
  let randomNum = Math.floor(Math.random() * (max-min+1)+min);

  // Difference betwen max and min and check if is 1
  let diffMax = max - min;
  let diffMin = min - max;

  if(diffMax === 1 || diffMin === 1){
    return 'Error: Difference between two numbers must be 2 or more';
  }

  // Check if min and max are empty vars
  if(min == '' || max == ''){
    return 'Wrong parametar, min and max must have some values ';
  }else{
    // Check what types are config values for min and max
    if(isNaN(min) || isNaN(max)){
      return 'Wrong parametar, please be sure that min and max are integers ';
    }else{
      return `Random number between ${config.min} and ${config.max} is ${randomNum}`;     
    }
  }
};



// Function 2
const minIntegerFromArray = (array) => {
  config.array =  array;

  // create some vars
  let numbs = [];
  let minNum;

  // Loop over array
  for(let i = 0; i <= array.length; i++){
    // check all elemtents and add integers to numbs arr
    if(Number.isInteger(array[i])){
      numbs.push(array[i]);
    }
  }

  // chek if numbs empty array
  if(numbs === undefined || array.length == 0){
    return false;
  }else{
    // get the min num from numbs
    minNum = Math.min(...numbs);
  }
 
  // return value
  return `Min num from array is: ${minNum}`;
};



// Function 3
const minIntegerFromString = (string) => {
  config.string =  string;
  let minNum;
  let numbs = [];
  let numOfElem = string.length;
  let split = string.split(' ');
  
  let res = string.replace(/\D/g, "");
  console.log(res); // 667000
  if(numOfElem < 10){
    return `you type ${numOfElem} characters, minimum in String are 10`;
  }else{
    for(let i = 0; i <= split.length; i++){
      // let item = split[i].replace(/\D/g, "");
      if(split[i] % 1 === 0){
        numbs.push(split[i]);
      }
    }
  }

  minNum = Math.min(...numbs);
  return minNum;
};



// Function 4
const concatStringsByLength = (arrayOfString, type) => {
  config.arrOfStrings = arrayOfString;
  let minElem = 0;
  let arr1 = [];
  let arr2 = [];
  let str1;
  let str2;

  if(type > 1 || type < 0){
    return 'type must be 0 or 1, try again';
  }else {

    // type 0 - from smallest to greatest
    if(type === 0){
      arrayOfString.sort((a,b) => {
        return b.length < a.length;
      });
      arr2 = JSON.stringify(arrayOfString, null);
      return arr2;
    };

    // type 1 - from greatest to smallest
    if(type === 1){
      arrayOfString.sort((a,b) => {
        return b.length > a.length;
      });
      arr1 = JSON.stringify(arrayOfString, null);
      return arr1.replace(/,"/g, '');
      //  
    }
  }
};

module.exports = {
  getRandom: random,
  minIntFromArr: minIntegerFromArray,
  minIntFromStr: minIntegerFromString,
  concStrByLen: concatStringsByLength
}




// type 1 - from greatest to smallest
    // if(type === 1){
    //   arrayOfString.forEach(item => {
    //     if(item.length > minElem){
    //       minElem = item.length;
    //       arr1.unshift(item);
    //     }else{
    //       arr1.push(item);
    //     }
    //   });
    // }


        // console.log(arr2);

    // console.log(arrayOfString);
    // for(i=0; i<=arr1.length; i++){
    //   str1 += arr1[i];
    //   console.log(str);
    // }