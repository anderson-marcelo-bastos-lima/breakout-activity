/* Create a while loop that counts down from 10 to 1, log the value to the console. */

i = 10;

while (i >= 1) {
  console.log(i);
  i--;
}

const myFruitSalad = ["apples", "oranges", "plums", "peaches"];
console.log(myFruitSalad[3]); // the last element using indexing

//Create for loop that counts up to 20 from 1. Create an if condition that will only log the even values to the console.

for (let i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(`The even value is ${i}`);
  }
}

function addNumbers(a, b) {
  let c = a + b;
  return c;
}
console.log(addNumbers(2, 5));

const name = function (myName) {
  console.log(`${myName}`);
};

name("Mahsa");
