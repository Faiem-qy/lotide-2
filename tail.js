const assertEqual = require('./assertEqual');


const tail = function(arr) {
  //make new array omitting the first element
  return arr.slice(1);
};

const result = tail(["Hello", "Lighthouse", "Labs"]);

// Test the returned array's length
assertEqual(result.length, 2);

// Test individual elements of the returned array
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");


module.exports = tail;