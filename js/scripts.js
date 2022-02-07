// caching DOM
let mainTitle = document.getElementsByTagName("h1"); // Sprawdzić czy let działa pod id
const scoreBoard__div = document.querySelector(".score--board");
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
let userScore = 0;
let computerScore = 0;
const result__p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const cta = document.getElementsByClassName("cta");

// caching DOM end

// function area
function GetcomputerChoice() {
  const choices = ["r", "p", "s"];

  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertLettertoWord(letter) {
  if (letter === "r") {
    return "rock";
  }
  if (letter === "p") {
    return "paper";
  } else {
    return "Scissors";
  }
}

function win(user, comp) {
  userScore++;
  userScore_span.innerHTML = userScore;
  result__p.innerHTML = `${convertLettertoWord(
    user
  )}(user) beats ${convertLettertoWord(comp)}(comp)   YOU WIN :)`;
  const visualStatus = document.getElementById(user);
  visualStatus.classList.add("green--signal");
}
function lose(user, comp) {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  result__p.innerHTML = `${convertLettertoWord(
    comp
  )}(comp) beats ${convertLettertoWord(user)}(user)   YOU LOSE :(`;
}
function draw(user, comp) {
  result__p.innerHTML = `${convertLettertoWord(
    user
  )}(user)  ${convertLettertoWord(comp)}(comp)   DRAW (=)`;
}
function game(userChoice) {
  const computerChoice = GetcomputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}
function main() {
  // adding EventListeners

  rock_div.addEventListener("click", function () {
    game("r");
  });
  paper_div.addEventListener("click", function () {
    game("p");
  });
  scissors_div.addEventListener("click", function () {
    game("s");
  });
}
//  EventListeners end

// runFN
main();
// runFN end

//*Quote Erat Demonstrandum
// This project was completed.
// Zrobione.
// Developer: Kamil Pietruszka (K.P{Dev})

// Current Date: 06.02.2022
