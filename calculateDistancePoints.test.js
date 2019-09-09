// hillSize parameters: 1 -normal, 2 -big, 3 -superBig

const calculateDistancePoints = (distance, hillSize, kPoint) => {

    var hillSizePoints;
    var pointParam;
    var points;
    
    if (hillSize === 1) {
        hillSizePoints = 60;
        pointParam = 2;
    } else if (hillSize === 2) {
        hillSizePoints = 60;
        pointParam = 1.8;  
    } else {
        hillSizePoints = 120;
        pointParam = 1.2;
    }
    
    points = (distance - kPoint) * pointParam;
    
    return hillSizePoints + points;
  };
  
  //console.log(calculateDistancePoints(91.5,1,98));
  
  module.exports = calculateDistancePoints;