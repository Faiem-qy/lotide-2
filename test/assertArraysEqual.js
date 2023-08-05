const assertArraysEqual = require('../assertArraysEqual')

// Test cases for assertArraysEqual function
assertArraysEqual([1, 2, 3], [1, 2, 3]); // Should pass
assertArraysEqual([1, 2, 3], [1, 2, 4]); // Should fail