const countDevelopers = (list) => {
  let count = 0
  /*for(var i = 0; i < list.length; i++){
    if(list[i].continent == "Europe" && list[i].language == "JavaScript")
      count++; 
 }
return count;*/
  return list.filter(i => i.continent == 'Europe' && i.language == 'JavaScript').length;
};

module.exports = countDevelopers