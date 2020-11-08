

// we define a variable for the highScores array we are getting from local storage and sort the array
var highScores = JSON.parse(localStorage.getItem('highScores', highScores));

var highScoreList = document.getElementById("high-score-list");

clearButtonEl = document.getElementById("clear-button");

var printHighScores = function() {

    for (var i = 0; i<highScores.length; i++){
        
        // dynamically create an li element to append to the ul that already exists in the html 
        var highScoreListItemEl =document.createElement("li")

        //target the textContent of the dynamically created highScoreListItemEl and concatenate the properties stored in the array objects so they appear together on the list
        highScoreListItemEl.textContent = highScores[i].initials + "-" + highScores[i].storedScore

        highScoreList.appendChild(highScoreListItemEl); 
    }  
};

printHighScores();

var clearHighScores = function(){

    // remove the text content that is on the list 
    highScoreList.textContent = [];

    // clear local storage so that the old list does not appear again when you reload the page 
    var highScores = [];

    localStorage.setItem('highScores', JSON.stringify(highScores));
    
};

clearButtonEl.addEventListener("click", clearHighScores);