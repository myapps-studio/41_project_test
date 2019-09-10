
const calculateDistancePoints = require('./calculateDistancePoints');
const calculateStylePoints = require('./calculateStylePoints');

const calculateTotalPoints = (distance, hillSize, kPoint, Note1, Note2, Note3, Note4, Note5, windFactor, gateFactor) => {
  const distancePoints = calculateDistancePoints(distance, hillSize, kPoint);
  const stylePoints = calculateStylePoints(Note1, Note2, Note3, Note4, Note5);

  return distancePoints + stylePoints + windFactor + gateFactor;
}

module.exports = calculateTotalPoints;