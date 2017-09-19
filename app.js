/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores;
var currentScore;
var activePlayer;
//var tossDice;

scores = [0,0];
currentScore = 0;
activePlayer = 0;

//when roll dice button is clicked
document.querySelector(".btn-roll").addEventListener('click', function(){
    
    //generate random number to roll the dice
    var rollDice=Math.floor(Math.random()*6)+1;
    
    //update the current score of the active player
    
    var diceimage=document.getElementById("dice-1");
    diceimage.style.display="block";
    diceimage.src="dice-"+rollDice+".png";
    
    //if the player is not 1 
    if(rollDice!==1){
        currentScore+=rollDice;
        document.querySelector("#current-"+activePlayer).textContent=rollDice;
    }else{//otherwise switch the player
        activePlayer===0?activePlayer=1:activePlayer=0;
        currentScore=0;
    }

    
})
    

