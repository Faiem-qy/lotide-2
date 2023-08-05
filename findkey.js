
const assertEqual = require('./assertEqual')

const findKey = function(object, callback) {
  //iterate over object and  return key if callback return true
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
  // if no key is found then return undefined 
  return undefined;
};


const result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2); // => "noma"


assertEqual(result1, "noma");


const data3 = {
  "key1": { stars: 5 },
  "key2": { stars: 3 },
  "key3": { stars: 4 }
};
const result2 = findKey(data3, x => x.stars === 2);
assertEqual(result2, undefined);


const data4 = {
  "key1": { stars: 5 },
  "key2": { stars: 3 },
  "key3": { stars: 2 },
  "key4": { stars: 4 }
};
const result3 = findKey(data4, x => x.stars === 2);
assertEqual(result3, "key3"); 

module.exports = findKey