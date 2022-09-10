"use strict";

/* const cogAge3 = (birthYear) => 2037 - birthYear;
const age3 = cogAge3(1991);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  if (retirement < 1) {
    return `${firstName} is already retired`;
  } else {
    return `${firstName} retires in ${retirement} years.`;
  }
};
console.log(yearsUntilRetirement(1991, "Johan"));
console.log(yearsUntilRetirement(1980, "Bob")); 

const koalasScore = [65, 54, 61];
const dolphinsScore = [44, 23, 71];
const calcAverage = (score) =>
  Math.round(score.reduce((a, b) => a + b, 0) / score.length);

const avgKoalas = calcAverage(koalasScore);
const avgDolhins = calcAverage(dolphinsScore);
const checkWinner = (avg1, avg2) => {
  if (avg1 * 2 < avg2) {
    return `Dolphins win with an average of ${avg2} versus the Koalas' ${avg1}!`;
  } else if (avg2 * 2 < avg1) {
    return `Koalas win with an average of ${avg1} versus the Dolphins' ${avg2}!`;
  } else {
    return `No winner, the Dolphins score ${avg2} and the Koalas score ${avg1}`;
  }
};
console.log(checkWinner(avgKoalas, avgDolhins));

*/

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const bills = [125, 555, 44];
const bills2 = [200, 2000, 30];
var tipsArr = [];
var totalArr = [];
function logArr(arr) {
  tipsArr = [];
  for (let i = 0; i < arr.length; i++) {
    let n = arr[i];
    if (n >= 50 && n <= 300) {
      tipsArr.push(n * 0.15);
    } else {
      tipsArr[i] = n * 0.2;
    }
    totalArr.push(n + tipsArr[i]);
  }
  console.log(`Bills: ${arr}`);
  console.log(`Tips: ${tipsArr}`);
  console.log(`Total: ${totalArr}`);
}
logArr(bills);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let avg = Math.round(sum / arr.length);
  console.log(
    `The sum of the numbers in the array is ${sum}, with a ruonded average value of ${avg}`
  );
};
calcAverage(totalArr);
/*
const person = {
  p1: {
    firstName: "John",
    lastName: "Smith",
    mass: 92,
    height: 1.95,
    BMIcalc: function () {
      this.BMI = this.mass / this.height ** 2;
      return this.BMI;
    },
  },
  p2: {
    firstName: "Mark",
    lastName: "Miller",
    mass: 78,
    height: 1.69,
    BMIcalc: function () {
      this.BMI = this.mass / this.height ** 2;
      return this.BMI;
    },
  },
};

person.p1.BMIcalc();
person.p2.BMIcalc();
console.log(person.p1.BMIcalc());
console.log(person.p2.BMIcalc());
*/
