// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  // if the values match, print the following: Assertion Passed: [actual] === [expected] (but with the values filled in);
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);

    // Otherwise it should print (console.log) the following: Assertion Failed: [actual] !== [expected] (but with the values filled in)
  } else {
    (console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`));
  }
}
  ;

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);


// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  //declare results and return results
  const results = {};

  //loop over all items
  for (const item of allItems) {
    console.log(item);


    //only count specific items
    if (itemsToCount[item]) {
      // increment the counter for each item:
      // set a property with that string key to:
      // the value that was already there (or zero if nothing there) with 1 added to it.
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);