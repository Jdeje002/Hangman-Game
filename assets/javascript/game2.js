

var wordChoice = [,"gun", "outlaw","miner","poker", ]
// Chose words randomly
var randNum = Math.floor(Math.random() * wordChoice.length);

var chosenWord = wordChoice[randNum];

console.log(chosenWord)

var generateUnderscore = function() {
    for( var i = 0; i< chosenWord.length; i++){
        
        underScore.push("_")
    }
        return underScore;

}
// split chosen word to an arrey 
   
    

//

// doc on key 

// looping chosenWord 

    // checks if the letter matches inside chosen word
    // check if chosen is right
    // check if choses word is wrong
    // TODO: guesses
    // replace underscore 
    underScore.innerHTML = generateUnderscore().join(" ");

