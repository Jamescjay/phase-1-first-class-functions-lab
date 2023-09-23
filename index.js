const returnFirstTwoDrivers = function(){
  const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
  return drivers.slice(0, 2);
}
const returnLastTwoDrivers = function(){
  const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
  return drivers.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(fareMultiplier){
  return function (value) {
    return value * fareMultiplier;
  };

}
const fareMultiplier = createFareMultiplier(2);

function fareDoubler(fare){
  return fare * 2;
}

function fareTripler(fare){
return fare * 3;
}

function selectDifferentDrivers(arrayOfDrivers, returnDriversFunction) {
  return returnDriversFunction(arrayOfDrivers);
}