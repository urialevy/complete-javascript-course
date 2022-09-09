// challenge 1
/*
var markWeight = 78;
var markHeight = 1.69;
var johnWeight = 92;
var johnHeight = 1.95;

const BMIMark = markWeight / markHeight ** 2;
const BMIJohn = johnWeight / (johnHeight * johnHeight);
console.log(BMIMark > BMIJohn);

// challenge 2

function BMIEval(a, b) {
  if (a > b) {
    console.log(
      `Mark's BMI is higher at ${BMIMark}, whereas John's is ${BMIJohn}`
    );
  } else if (b > a) {
    console.log(
      `John's BMI is higher at ${BMIJohn}, whereas Mark's is ${BMIMark}`
    );
  } else {
    console.log(
      `Well that's unlikely, both of them have the exact BMI of ${BMIMark}`
    );
  }
}
BMIEval(BMIMark, BMIJohn);

// challenge 3
let dolphinsScore = [55, 91, 110];
let koalasScore = [100, 91, 110];

const dolphinsAvg = Math.round(
  dolphinsScore.reduce((a, b) => a + b, 0) / dolphinsScore.length
);
console.log(dolphinsAvg);

const koalasAvg = Math.round(
  koalasScore.reduce((a, b) => a + b, 0) / koalasScore.length
);
console.log(koalasAvg);

function findWinner(a, b) {
  if (a < 100 && b < 100)
    console.log(`Both teams did not reach 100 points average, no winners!`);
  else if (a > b)
    console.log(`The Dolphins win with an average of ${dolphinsAvg}!`);
  else if (b > a)
    console.log(`The Koalas win with an average score of ${koalasAvg}!`);
  else if (a == b)
    console.log(`Draw, both teams got an average score of ${dolphinsAvg}!`);
}
findWinner(dolphinsAvg, koalasAvg);


// challenge 4

const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
const total = bill + tip;
console.log(
  `the bill is ${bill}, the tip is ${tip}, for a total of ${total}. `
);
*/
