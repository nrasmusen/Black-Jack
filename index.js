var userInput = "";
var program = true;
var outcome = false;
var hand = [];
var cardGen = "";
var usedCard = [];
var card = "";
var suits = ["H", "D", "S", "C"];
var suitGen = 0;
var suit = "";


while(program){
  array += hit();
  array += hit();
  console.log(hand)
  conosle.log("Type 1 to Hit");
  console.log("Type 2 to Pass");
  userInput = prompt("");
  
  if(userInput == 1){
    array += hit();
  }
  else if(userInput = 2){
    outcome = check();
  }
  else{
    console.clear();
    console.log("Invalid Input");
  }
}

function hit(){
  cardGen = Math.floor(Math.random()*11)
    if(cardGen<11){
      suitGen = Math.floor(Math.random()*4);
      suit = suits[suitGen];
      card = cardGen + suit;
      
      return card;
    }
    else{
      
    }
}



