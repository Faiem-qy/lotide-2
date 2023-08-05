

const middle = function(arr) {
  // return empty array if the length is less than or equal to 2 elements
  if (arr.length <= 2) {
    return [];
  }

  // return array if the lenght of the array is odd
  if (arr.length % 2 === 1) {
    // use Math.floor to to round to the nearest interger 
    return [arr[Math.floor(arr.length / 2)]];
  }

  // return array with two elements if the array is even
  if (arr.length % 2 === 0) {
    return [arr[(arr.length / 2) - 1], arr[(arr.length / 2)]];
  }
  return [];
};


module.exports = middle