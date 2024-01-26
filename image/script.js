let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector( "#user-score");
const compScorePara = document.querySelector( "#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
};

const drawGame = () => {
  console.log("game is draw");
  msg.innerText = "Game was draw, Play again";
  msg.style.backgroundColor = "#14213d";
};

const showWinner = (userWin,userChoice,CompChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    // console.log("win");
    msg.innerText = `you win!, your ${userChoice} beats ${CompChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    // console.log("lose");
    msg.innerText = `You lose ${CompChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};
const playGame = (userChoice) => {
  console.log(userChoice);
  //computer choice
  const CompChoice = genCompChoice();
//   console.log(CompChoice);
  if (userChoice === CompChoice) {
    //draw game fun
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = CompChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = CompChoice === "scissors" ? false : true;
    } else {
      userWin = CompChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, CompChoice);
  }
};
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
