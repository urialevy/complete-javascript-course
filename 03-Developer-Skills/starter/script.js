// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const arr1 = [25, -10, -2, -6, 12, 13, 'error'];
const arr2 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// need to do three things here:
// 1- remove any errors that are invalid inputs, i.e. only include numbers.
// 2 - find highest temp and find lowest temp in an array
// 3- compute the difference between the highest and lowest temp

/* const calcAmp = (arr1, arr2) => {
  const temperatures = arr1.concat(arr2);
  let coldest = temperatures[0];
  let hottest = temperatures[0];
  for (let i = 0; i < temperatures.length; i++) {
    const curTemp = temperatures[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp < coldest) coldest = curTemp;
    if (curTemp > hottest) hottest = curTemp;
  }
  const amplitude = hottest - coldest;
  console.log(
    `The coldest temperature is ${coldest}, the hottest temperature is  ${hottest}, the amplitude is: ${hottest} - ${coldest} = ${amplitude}.`
  );
};

calcAmp(arr1, arr2); */

// problem 2:
// function should now receive two arrays of temperatures at oncee
// should the same functionality be applied twice?
// - no. Just merge both arrays.
// how to merge two arrays?

/*
// Coding Challenge #1

Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]

// problem 1: transform array into string
// problem 2: combine each data array data point as a reference point for the number of days. */

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = arr => {
  let forecastString = '';
  for (let i = 0; i < arr.length; i++) {
    forecastString = forecastString.concat(`${arr[i]}ºC in ${i + 1} days... `);
  }
  console.log(forecastString);
};
printForecast(data2);
