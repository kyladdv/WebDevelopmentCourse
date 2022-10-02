//ROCK, PAPER, SCISSORS

var userSelection = prompt("Choose Rock, Paper, or Scissors");
var num = Math.random();
if (num < 0.34)
{
    computerSelection = "Paper";
}
else if (num > 0.35 & num < 0.67)
{    
    computerSelection = "Scissors";
}
else
{
    computerSelection = "Rock";
}
console.log (userSelection, computerSelection)


if(userSelection == computerSelection)
{
    console.log ("It's a Tie");
}
  else if(userSelection=="Rock")
{
    if(computerSelection=="Scissors")
    {
        console.log("User Wins");
    }        
    else
    {
        console.log("Computer Wins");
    }
}
else 
{
    if(computerSelection=="Paper")
    {
        console.log("User Wins");
    }
    else
    {
        console.log("Computer Wins");
    }
}