// getComputerChoice randomly produces rock, paper, or scissors
// playerSelection allows the player to input rock, paper or scissors *case insensitive*
// Function compares the result of playerSelection versus getComputerChoice
// Function returns a string result declaring the victor
// Game() function contains playRound that keeps score and declares the winner at the end
// Use prompt to get input from the user //

const choices = ['rock', 'paper', 'scissors'] 
const winners = [];

function game() {
  for (let i = 1; i <= 5; i++){
    playRound(i);
  }
  logWins();
}

function playRound(round) {
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
  const winner = checkWinner(playerSelection, computerSelection)
  winners.push(winner);
  logRound(playerSelection, computerSelection, winner, round)
}

function playerChoice() {
  //get input from player
  let input = prompt('Type Rock, Paper, or Scissors');
  while(input == null){
    input = prompt('Type Rock, Paper, or Scissors');
  }
  input = input.toLowerCase();
  let check = validateInput(input)
  while (check == false) {
    input = prompt('Type Rock, Paper, or Scissors. The spelling must be exact, but capitalization does not matter');
    while(input == null){
      input = prompt('Type Rock, Paper, or Scissors');
    }
    input = input.toLowerCase();
    check = validateInput(input);
  }
 return input
}

function computerChoice() {
  //generate random computer choice
  return choices[Math.floor(Math.random() * choices.length)]
}

function validateInput(choice) {
  return choices.includes(choice)
}

function checkWinner(choiceP, choiceC) {
  if (choiceP === choiceC) {
    return 'Tie';
  } else if (
  (choiceP === 'rock' && choiceC == 'scissors') || 
  (choiceP === 'paper' && choiceC == 'rock') || 
  (choiceP === 'scissors' && choiceC == 'paper')
  )  {
   return 'Player';
  } else {
    return 'Computer'
  }
}

function logWins(){
  let playerWins = winners.filter(item => item == 'Player').length;
  let computerWins = winners.filter(item => item == 'Computer').length;
  let ties = winners.filter(item => item == 'Tie').length;
  console.log('Results:');
  console.log('Player wins:', playerWins);
  console.log('Computer wins', computerWins);
  console.log('Ties:', ties);
}

function logRound(playerChoice, computerChoice, winner, round){
  console.log ('Round:', round)
  console.log('Player chose:', playerChoice)
  console.log('Computer chose:', computerChoice)
  console.log(winner, 'Won the round')
  console.log('----------------')
}


