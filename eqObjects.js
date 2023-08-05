const assertEqual = require('./assertEqual')
const eqArrays = require('./eqArrays')


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  // store keys in vairables for object 1 and object 2
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  //compare length of keys in both objects
  if (keys1.length !== keys2.length) {
    return false;
  }
  //loop using a for of loop to compare keys 
  for (const key of keys1) {
    // store values in variables
    const value1 = object1[key];
    const value2 = object2[key];

    if (Array.isArray(value1) && Array.isArray(value2)) {
      if (!eqArrays(value1, value2)) {
        return false;
      }
    } else if (typeof value1 === 'object' && typeof value2 === 'object') {
      if (!eqObjects(value1, value2)) {
        return false;
      }
    } else if (value1 !== value2) {
      return false;
    }
  }
  return true;
};


const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
console.log(eqObjects(shirtObject, anotherShirtObject)); // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
console.log(eqObjects(shirtObject, longSleeveShirtObject)); // => false


assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);


module.exports = eqObjects