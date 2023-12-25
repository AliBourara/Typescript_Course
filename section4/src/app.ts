const userName = "Max";
// userName = 'Maximilian';
let age = 30;

age = 29;

// function add(a: number, b: number) {
//   let result;
//   result = a + b;
//   return result;
// }

// if (age > 20) {
//   let isOld = true;
// }

// console.log(isOld);

// console.log(result);

// const add = (a: number, b: number = 1) => a + b; // the default parametre need to be the last parameters

// const printOutput: (a: number | string) => void = (output) =>
//   console.log(output);

// const button = document.querySelector("button");

// if (button) {
//   button.addEventListener("click", (event) => console.log(event));
// }

// printOutput(add(5));

const hobbies = ["sports", "cooking"];
const activeHobbies = ["hiking"];

activeHobbies.push(...hobbies); //spread operator "activeHobbies.push(hobbies[0],hobbies[1])"

const person = {
  thatname: "max",
  thatage: 30,
};

const copiedPerson = { ...person }; // the key value paires are copied to the new object

const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);


const [hobby1,hobby2,...remainingHobbies] = hobbies; // destraction array

const {thatname,thatage} = person ; // destraction object need to be the same key name
const {thatname:firstName,thatage:newage} = person ; // here you can overright the old key name by ":" 