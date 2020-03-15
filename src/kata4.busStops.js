//import { busStops } from '.';
//import { busStops } from '.';
const number = (busStops) => {
  //return busStops.map(i => i[0] - i[1]).reduce((a, b) => a + b);
  return busStops.reduce((a, b) => a+b[0] - b[1], 0)
    /* let totalPeople = 0;
    for (let i=0; i<busStops.length; i++) {
      totalPeople += busStops[i][0];
      totalPeople -= busStops[i][1];
    }
    return totalPeople;*/

     /* let totalPeople = 0;
     busStops.forEach(i => {
       totalPeople += busStops[i][0];
      totalPeople -= busStops[i][1];
     })
     return totalPeople */
  
};

module.exports = number