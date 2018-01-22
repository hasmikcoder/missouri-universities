fs = require('fs');

console.log('Hello World!')

var washu = {id: 1, unitid: 179867, rank: 1, name: " Washington University in St.Louis", location: "St.Louis"};
var   data =  [
    washu,
    {id: 2, unitid: 178396, rank: 2, name: " Universty of Missouri", location: "Columbia"},
    {id: 3, unitid: 178402, rank: 3, name: " University of Missouri-Kansas City", location: "Kansas City"},
    {id: 4, unitid: 179159, rank: 4, name: " Saint Louis University", location: "St.Louis"},
    {id: 5, unitid: 178420, rank: 5, name: " University of Missouri-St.Louis", location: "St.Louis"},
    {id: 6, unitid: 179566, rank: 6, name: " Missouri State University", location: "Springfield"},
    {id: 7, unitid: 178411, rank: 7, name: " Missouri University of Science and Technology", location: "Rolla"},
    {id: 8, unitid: 179894, rank: 8, name: " Webster University", location: "St.Louis"},
    {id: 9, unitid: 178615, rank: 9, name: " Truman State University", location: "Kirksville"},
    {id: 10, unitid: 179557, rank:10, name: " Southeast Missouri State University", location: "Cape Girardeau"}
  ];

 data.map( function(University, id) {
    University.cat= { name:" Samuel"}
    University.image= { img: "image"}
    University.admission={ admission:"acceptanceRate"}
    University.enrollment={enrollment:"total"}
    Universty.test={test:"act75"}
};
  // const university = university.unitid;

  // fetch universityData

  



fs.writeFileSync('public/universityData.json', JSON.stringify(data));
