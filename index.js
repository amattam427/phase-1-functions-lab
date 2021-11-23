// Code your solution in this file!
const hq= 42;
function distanceFromHqInBlocks(pickUp) {
    let distanceB= pickUp-hq;
    return Math.abs(distanceB);
}
  function distanceFromHqInFeet(pickUp){
    distanceFromHqInBlocks(pickUp);
    const distanceF= distanceFromHqInBlocks(pickUp)*264;
    return distanceF;
  }
  function distanceTravelledInFeet(start, end){
     const travel= (end-start)*264;
      return Math.abs(travel);
  }
  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    const feet = distanceTravelledInFeet(start, destination);

    if (feet <= 400) {
        return 0;
    } else if (feet > 400 && feet <=2000) {
        return (feet - 400) * .02;
    } else if (feet > 2500) {
        return 'cannot travel that far';
    } else if (feet > 2000) {
        return 25;
    } 

  }