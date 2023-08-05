const assertEqual = require('./assertEqual')


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};


const findKeyByValue = function(obj, value) {
// for in loop to loop through keys
  for (const key in obj) {
    // if key is equal to the value required then return key
    if (obj[key] === value) {
      return key;
    }
  }
  //return undefined if the value is not found
  return undefined;
};



assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue