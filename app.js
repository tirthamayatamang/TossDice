/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, turnScore, activePlayer,playGame;

function init(){
    scores=[0,0];
    turnScore=0;
    activePlayer=0;
    playGame=true;
    document.querySelector('.dice-image').style.display='none';
}

init();
document.querySelector('.btn-roll').addEventListener('click',function(){
    if(playGame){
        var random=Math.floor(Math.random()*6)+1;
        var domDice=document.querySelector('.dice-image');
        domDice.style.display='block';
        domDice.src="dice-"+random+".png";
        console.log('btn clicked'+random);

        if(random!==1){
            turnScore+=random;
        }else{
            nextPlayer();

        }
    }
   
});

document.querySelector('.btn-hold').addEventListener('click',function(){
    if(playGame){
        scores[activePlayer]+=turnScore;
        document.getElementById('score-'+activePlayer).textContent=scores[activePlayer];
        if(scores[activePlayer]>=25){
            document.getElementById('name-'+activePlayer).textContent="winner";
            playGame=false;
        }else{
            nextPlayer();     
        }  
    }
    
});

function nextPlayer(){
    activePlayer===0?activePlayer=1:activePlayer=0;
    turnScore=0;
    document.querySelector('.dice-image').style.display='none';
}

document.querySelector('.btn-new').addEventListener('click',init);
