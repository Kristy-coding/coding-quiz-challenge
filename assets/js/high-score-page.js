
var highScores = JSON.parse(localStorage.getItem('highScores', highScores));

console.log(highScores);

var highScoreList = document.getElementById("high-score-list");

clearButtonEl = document.getElementById("clear-button");

var highScoreListItemEl =document.createElement("li")

var printHighScores = function() {

    for (var i = 0; i<highScores.length; i++){
        
        var highScoreListItemEl =document.createElement("li")

        highScoreListItemEl.textContent = highScores[i].initials + "-" + highScores[i].storedScore

        highScoreList.appendChild(highScoreListItemEl); 
    }  
};

printHighScores();

var clearHighScores = function(){

    highScoreListItemEl.textContent = [];
};

clearButtonEl.addEventListener("click", clearHighScores);