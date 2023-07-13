const playerIcon = document.querySelector('.pl1');
const computerIcon = document.querySelector('.pl2');
const plScore = document.querySelector('.score1');
const compScore = document.querySelector('.score2');
const declare = document.querySelector('.item1');
const explain = document.querySelector('.item2');

const choices = ['rock', 'paper', 'scissors'];
let i = 0;
let j = 0;

function getRandomChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function handle(playerChoice) {
  const computerChoice = getRandomChoice();
  console.log('Computer choice:', computerChoice);
  console.log('Your Choice: ', playerChoice);
  if (playerChoice === 'rock') {
    playerIcon.textContent = '✊';
    if (computerChoice === 'rock') {
      console.log('tie hai');
      declare.textContent = "It's a tie!";
      explain.textContent = 'Rock ties with Rock';
      computerIcon.textContent = '✊';
    }
    else if (computerChoice === 'paper') {
      console.log('lose');
      computerIcon.textContent = '✋';
      declare.textContent = "You Lost!";
      explain.textContent = 'Rock is beaten by paper';
      j++;
      plScore.textContent = 'Player: ' + i;
      compScore.textContent = 'Computer: ' + j;
    }
    else if (computerChoice === 'scissors') {
      console.log('win');
      computerIcon.textContent = '✌';
      declare.textContent = "You Win!";
      explain.textContent = 'Rock beats scissors';
      i++;
      plScore.textContent = 'Player: ' + i;
      compScore.textContent = 'Computer: ' + j;
    }
  }

  else if(playerChoice === 'paper') {
    playerIcon.textContent = '✋';
    if (computerChoice === 'rock') {
      console.log('win');
      computerIcon.textContent = '✊';
      declare.textContent = "You Win!";
      explain.textContent = 'Paper beats rock';
      i++;
      plScore.textContent = 'Player: ' + i;
      compScore.textContent = 'Computer: ' + j;
    }
    else if (computerChoice === 'paper') {
      console.log('tie');
      declare.textContent = "It's a tie!";
      explain.textContent = 'Paper ties with paper';
      computerIcon.textContent = '✋';
    }
    else if (computerChoice === 'scissors') {
      console.log('lose');
      computerIcon.textContent = '✌';
      declare.textContent = "You Lost!";
      explain.textContent = 'Paper is beaten by scissors';
      j++;
      plScore.textContent = 'Player: ' + i;
      compScore.textContent = 'Computer: ' + j;
    }
  }

  else if(playerChoice === 'scissors') {
    playerIcon.textContent = '✌';
    if (computerChoice === 'rock') {
      console.log('lose');
      computerIcon.textContent = '✊';
      declare.textContent = "You Lost!";
      explain.textContent = 'Scissors is beaten by rock';
      j++;
      plScore.textContent = 'Player: ' + i;
      compScore.textContent = 'Computer: ' + j;
    }
    else if (computerChoice === 'paper') {
      console.log('win');
      computerIcon.textContent = '✋';
      declare.textContent = "You Win!";
      explain.textContent = 'Scissors beats paper';
      i++;
      plScore.textContent = 'Player: ' + i;
      compScore.textContent = 'Computer: ' + j;
    }
    else if (computerChoice === 'scissors') {
      console.log('tie');
      declare.textContent = "It's a tie!";
      explain.textContent = 'Scissors ties with scissors';
      computerIcon.textContent = '✌';
    }
  }

   if (i === 5) {
    document.getElementById("endgameMsg").textContent = "You won!";
    openModal();
  } else if (j === 5) {
    document.getElementById("endgameMsg").textContent = "You lost!";
    openModal();
  }
}

function openModal() {
  const modal = document.getElementById("endgameModal");
  modal.classList.add("active");
}

function closeModal() {
  const modal = document.getElementById("endgameModal");
  modal.classList.remove("active");
}

document.getElementById("restartBtn").addEventListener("click", function() {
  closeModal();
  resetGame();
});

function resetGame() {
  i = 0;
  j = 0;
  plScore.textContent = "Player: 0";
  compScore.textContent = "Computer: 0";
  playerIcon.textContent = "❔";
  computerIcon.textContent = "❔";
  declare.textContent = "Choose your Weapon";
  explain.textContent = "First to score 5 points, Wins the Game";
}
