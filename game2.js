let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const gencompChoice = () =>{
   const options = [ "rock","paper","scissors"];
  const randIdx =  Math.floor(Math.random()*3) ;
  return options[randIdx];
};

const playGame = (userChoice) => {
   
   const compChoice = gencompChoice();

   
   if(userChoice === compChoice){ 
      drawGame();
   }
   else{
      let userWin=true;
      if(userChoice ==="rock"){
        userWin= compChoice === "paper" ? false : true;
      }
      else if(userChoice === "paper"){
         userWin = compChoice === "scissors" ? false : true;
      }
      else
      {
         userWin = compChoice === "rock" ? false : true;
      }
      showWinner(userWin,userChoice,compChoice);
   }
}; 

const showWinner = (userWin,userChoice,compChoice) => {
   if(userWin){
      userScore++;
      userScorePara.innerText = userScore;
      msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
      // console.log("you win");
   //   msg.innerText = "You Win!";
     msg.style.backgroundColor = "red";
   }
   else{
      compScore++;
      // console.log("you lose");
      compScorePara.innerText = compScore;
      msg.innerText = `You lost ${compChoice} beats ${userChoice}`;
   //   msg.innerText = "You lose!";
     msg.style.backgroundColor = "green";
   }
  };

  const drawGame = () => {
   // console.log("draw game");
   msg.innerText = "OHH....It's a draw!";
   msg.style.backgroundColor = "crimson";
};

 choices.forEach((choice)=>{
    choice.addEventListener("click", () => {
      const userChoice=choice.getAttribute("id");
      playGame(userChoice);
 });
 });
 