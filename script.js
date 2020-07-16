let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
let generateTarget = () => {
    return Math.floor((Math.random()*10));
  }
   
  let compareGuesses = (human , computer , target) => {
  var index1 = Math.abs(target - human) ;
  var index2 = Math.abs(target - computer);
  
  if (index1 < index2 )
  {
    return true;
  }
  else if (index1 > index2)
  {
    return false;
  }
  else 
  return true;
  
  }
  let updateScore = (winner) => {
    if (winner === 'human')
    {
      humanScore++;
    }
    else if (winner === 'computer')
    {
      computerScore++;
    }
  
  
  }
  let advanceRound = () => {
    currentRoundNumber++ ;
  }
