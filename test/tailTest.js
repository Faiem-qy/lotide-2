const tail = require('../tail')
const assertEqual = require('../assertEqual')


const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!