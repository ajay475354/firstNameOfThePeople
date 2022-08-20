const peopleList = require("../country/state/city/index");
const getFirstNames = require("../utilities/utils/index");

//console.log(peopleList);
//console.log(getFirstNames(peopleList));

const getPeopleInCity = (peopleList) => {
  return getFirstNames(peopleList);
};

module.exports = getPeopleInCity;
