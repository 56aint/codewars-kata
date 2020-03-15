const ballCollector = (detritus) => {
  return {weight: detritus.filter(i => i === 58).reduce((a, b) => (a + b), 0)};
  
  /*let ballSum = 0
  
  for(let i = 0; i < detritus.length; i++) {
    if(detritus[i] === 58) {
       ballSum++
    }
  }
     return {weight: + ballSum * 58}*/
};
module.exports = ballCollector