

// Create array of words 
var wordChoice = ["gun", "outlaw","miner","poker"]
// Chose words randomly
var randNum = Math.floor(Math.random() * wordChoice.length);
var chosenWord = wordChoice[randNum];
var underScore= [];
var rightWord = [];
var wrongWord = [];
var wordsplit = []
var wrongGuess= 10
// dom manipulation 
var docUnderScore = document.getElementsByClassName("underscore");


console.log(chosenWord)
// Create underscore
var generateUnderscore = function() {
    for( var i = 0; i< chosenWord.length; i++){
        underScore.push(" _ ");
       
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
            alert("You win! Reset page");
            
        }
       
    }
    else{
        wrongWord.push(keyWord);
        wrongGuess --
        $(".wrongGuess").html(wrongGuess + " = total guesses ")
        console.log(wrongGuess)
        if( wrongGuess == 0){
            //10 guess = failed
            alert("Game over! Reset page")
            
           
        }
    
       
    }
    
});

underScore.innerHTML = generateUnderscore().join(" ");

if( wrongGuess == 0){
    //10 guess = failed
    alert("Game over! Reset page")
    if(confirm("Want to play again?")){
        wrongGuess = 10
        userLoss ++
        $(".userLoss").html("Total Losses: " + userLoss )
        $(".wrongGuess").html(wrongGuess + " = total guesses ")
    }

