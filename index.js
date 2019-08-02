// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
  const hq = 42;
  return Math.abs(Number.parseInt(distance) - hq)
};

function distanceFromHqInFeet(distance) {
  return (distanceFromHqInBlocks(distance) * 264)
};

function distanceTravelledInFeet(start, destination){
  //find number of blocks travelled and multiply by 264
  let travel = Math.abs(start - destination)
  return travel * 264
};

function calculatesFarePrice(start, destination) {

};
