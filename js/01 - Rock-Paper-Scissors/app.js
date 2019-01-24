let userScore = 0;
let computerScore = 0;

let userSelectedChoice;
let computerSelectedChoice;

const userScore_span = document.getElementById("userScore");
const computerScore_span = document.getElementById("computerScore");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_span = document.getElementById("r");
const paper_span = document.getElementById("p");
const scissors_span = document.getElementById("s");

rock_span.addEventListener("click", function() {
  userSelectedChoice = "r";
  gameLogic();
});
paper_span.addEventListener("click", function() {
  userSelectedChoice = "p";
  gameLogic();
});
scissors_span.addEventListener("click", function() {
  userSelectedChoice = "s";
  gameLogic();
});

function selectComputerChoice() {
  const choices = ["r", "p", "s"];
  const rndChoice = Math.floor(Math.random() * Math.floor(choices.length));
  computerSelectedChoice = choices[rndChoice];
}

function gameLogic() {
  // first User will select a option
  // Computer will automatically select a random choice from given list
  // logic will determine if user wins or loose
  // accordingly update score, message on screen

  selectComputerChoice();
  const combinedSelection = `${userSelectedChoice}${computerSelectedChoice}`;

  switch (combinedSelection) {
    case "pr":
    case "rs":
    case "sp":
      console.log(`user wins ${combinedSelection}`);
      userScore++;
      userScore_span.innerHTML = userScore;
      break;

    case "rp":
    case "sr":
    case "ps":
      console.log(`user lost ${combinedSelection}`);
      computerScore++;
      computerScore_span.innerHTML = computerScore;
      break;

    case "rr":
    case "pp":
    case "ss":
      console.log(`Draw ${combinedSelection}`);
      break;
  }
}
