let userScore = 0;
let computerScore = 0;

let userSelectedChoice;
let computerSelectedChoice;

const userScore_span = document.getElementById("userScore");
const computerScore_span = document.getElementById("computerScore");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > h2");
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

rock_span.addEventListener("transitionend", function() {
  document.getElementById(userSelectedChoice).classList.remove("green-glow");
});

paper_span.addEventListener("transitionend", function() {
  document.getElementById(userSelectedChoice).classList.remove("green-glow");
});

scissors_span.addEventListener("transitionend", function() {
  document.getElementById(userSelectedChoice).classList.remove("green-glow");
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
      result_div.innerHTML = `${convertToWord(
        userSelectedChoice
      )} beats ${convertToWord(computerSelectedChoice)}, You Win!`;
      document.getElementById(userSelectedChoice).classList.add("green-glow");
      //   setTimeout(function() {
      //     document
      //       .getElementById(userSelectedChoice)
      //       .classList.remove("green-glow");
      //   }, 200);
      break;

    case "rp":
    case "sr":
    case "ps":
      console.log(`user lost ${combinedSelection}`);
      computerScore++;
      computerScore_span.innerHTML = computerScore;

      result_div.innerHTML = `${convertToWord(
        userSelectedChoice
      )} lost to  ${convertToWord(computerSelectedChoice)}, You Loose`;
      document.getElementById(userSelectedChoice).classList.add("red-glow");
      setTimeout(function() {
        document
          .getElementById(userSelectedChoice)
          .classList.remove("red-glow");
      }, 200);

      break;

    case "rr":
    case "pp":
    case "ss":
      console.log(`Draw ${combinedSelection}`);
      break;
  }

  function convertToWord(choice) {
    if (choice === "r") return "Rock";
    if (choice === "p") return "Paper";
    return "Scissors";
  }
}
