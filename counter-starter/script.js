// const add = () => {
//   let numberElement = document.getElementById("number");
//   let number = numberElement.innerText;
//   console.log("add function", number);
//   //   make the inner text a number and increase it by 1
//   number = parseInt(number) + 1;
//   console.log("add function completed", number);
//   //   set the new updated number in the p tag with id "number"
//   numberElement.innerText = number;
// };

const add = (step) => {
  let numberElement = document.getElementById("number");
  let number = numberElement.innerText;
  console.log("add function", number);
  //   make the inner text a number and increase it by the number passed in
  number = parseInt(number) + step;
  console.log("add function completed", number);
  //   set the new updated number in the p tag with id "number"
  numberElement.innerText = number;
};

const subtract = (step) => {
  let numberElement = document.getElementById("number");
  let number = numberElement.innerText;
  console.log("subtract function", number);
  //   make the inner text a number and decrease it by the number passed in
  number = parseInt(number) - step;
  console.log("subtract function completed", number);
  //   set the new updated number in the p tag with id "number"
  numberElement.innerText = number;
};

const reset = () => {
  let numberElement = document.getElementById("number");
  let number = numberElement.innerText;
  // reset the number back to 0
  number = 0;
  console.log("reset", number);
  //   set the new updated number (0) in the p tag with id "number"
  numberElement.innerText = number;
};
