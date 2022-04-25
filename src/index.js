// Q1. Program to convert Fahrenheit to celsius
// C=(F-2)*5/9
function CelciusConversionfromFahrenheit(f) {
  let c = (((f - 32) * 5) / 9).toFixed(4);
  return c;
}
console.log(CelciusConversionfromFahrenheit(56));

// Q2. Write a program to calculate the sum of N natural digits, asinput by the users?
// edge cases-->
// a) -ve num,
// b) trailing zeros,
// c) zereos at the start
function sumOfNaturalNo(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumOfNaturalNo(100));

// Q3. Js program that reverses a number
function Reverse(n) {
  let rev = 0,
    rem = 0;
  while (n !== 0) {
    rem = n % 10;
    n = Math.floor(n / 10);
    rev = rev * 10 + rem;
  }
  return rev;
}
console.log(Reverse(32245));
