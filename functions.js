
module.exports = {
  random: function(min, max){
    let randomNum = Math.floor(Math.random() * (max-min+1)+min);
    return randomNum;
  }
}