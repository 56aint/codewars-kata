//import { busStops } from '.';
const number = (busStops) => {
  //return busStops.map(i => i[0] - i[1]).reduce((a, b) => a + b);
  return busStops.reduce((a, b) => a+b[0] - b[1], 0)
    /*var totalPeople = 0;
    for (var i=0; i<busStops.length; i++) {
      totalPeople += busStops[i][0];
      totalPeople -= busStops[i][1];
    }
    return totalPeople;*/
  
};

module.exports = number