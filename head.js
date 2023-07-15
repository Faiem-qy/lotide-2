const assertEqual = function(actual, expected) {

  // if the values match, print the following: Assertion Passed: [actual] === [expected] (but with the values filled in);
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);

    // Otherwise it should print (console.log) the following: Assertion Failed: [actual] !== [expected] (but with the values filled in)
  } else (console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`));
};


const head = function(arr) {
  return arr[0];
};



assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");