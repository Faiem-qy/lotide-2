# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @faiem-qy/lotide`

**Require it:**

`const _ = require('@faiem-qy/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`


## Documentation

The following functions are currently implemented:

- `head()` : Returns the first element of an array.
- `tail()` : Retrieves all values in an array after the element at the index 1 (head).
- `middle()` : Returns the middle element or elements of an array. If the array has an odd length, return the middle index; if it has an even length, return the two middle indices.
- `assertEqual()` : Checks if two values are equal.
- `assertArraysEqual()` : Confirms that two arrays are equal.
- `assertObjectsEqual()` : Checks if two objects are equal.
- `countLetters()` : Counts how many times a letter is occuring in a string.
- `countOnly()` : Counts how many times a value occurs in a array when given a value.
- `eqArrays()` : Checks if two arrays are not equal using recursion.
- `eqObjects()` : Checks if two objects are equal without using recursion.
- `findKey()` : Searches through the object and identifies the first occurrence where the condition specified in the callback function is fulfilled.
- `findKeyByValue()` : Given an object and a value, determine the key associated with that value within the object.
- `flatten()` : Converts a multidimensional array into a single-dimensional array.
- `letterPositions()` : Given a string, generate an array containing the index of each character in the string.
- `map()` : Implement a custom map() function that can be applied to an array and takes a callback function as an argument.
- `takeUntil()` : Given an array and a callback function, retrieve all values from the array for which the callback's condition is satisfied.
- `without() `: Removes the specified values from an array and returns the resulting array.