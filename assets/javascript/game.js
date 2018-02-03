// Create array of words 
var wordChoice = ["cowboy","sheriff","gun", "outlaw","miner", "lasso","poker","beer" ]
// Chose words randomly
var randNum = Math.floor(Math.random() * wordChoice.length);
var chosenWord = wordChoice[randNum];
var underScore= [];
var rightWord = [];
var wrongWord = [];

// dom manipulation 
var docUnderScore = document.getElementsByClassName("underscore");


console.log(chosenWord)
// Create underscore
var generateUnderscore = ()=> {
    for( var i = 0; i< chosenWord.length; i++){
        underScore.push("_");
       
    }
        return underScore;

}

// Get users guess
document.addEventListener("keypress", (event) => {
    var keyWord = String.fromCharCode (event.keyCode);
    console.log(keyWord)
    if (chosenWord.indexOf(keyWord) > -1){
        rightWord.push(keyWord);

        underScore[chosenWord.indexOf(keyWord)] = keyWord;
        docUnderScore[0].innerHTML = underScore.join(" ");

        if(underScore.join("") == chosenWord){
            alert("You win!");
        }
       
    }
    else{
        wrongWord.push(keyWord);
       
    }
    
});

underScore.innerHTML = generateUnderscore().join(" ");



