let myAge;
let guessAge;
let response;
let entry;
let restart;

document.querySelector("#button").addEventListener("click", checkGuess);
document.querySelector("#restart").addEventListener("click", doOver);
myAge = Math.floor(Math.random() * 100) + 1;
console.log(myAge);

function doOver() {
  myAge = Math.floor(Math.random() * 100) + 1;
  console.log(myAge);
  entry.style.display = "block";
  restart.style.display = "none";
  response.textContent = "";
}

function checkGuess() {
  guessAge = document.getElementById("guess");
  response = document.querySelector("#response");
  entry = document.querySelector("#block");
  restart = document.querySelector("#restart");
  if (guessAge.value == myAge) {
    response.textContent = "You guessed it right!";
    entry.style.display = "none";
    restart.style.display = "block";
  } else if (guessAge.value > myAge) {
    response.textContent = "My age is smalller!";
  } else {
    response.textContent = "My age is greater!";
  }
}
