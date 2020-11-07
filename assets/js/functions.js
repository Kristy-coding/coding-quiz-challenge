


// when we load the page we see the start-challenge-container and header
// the rest of the content is hiden 
// we listen for a button click on start-button
// when the start button is clicked the start button event listener triggers startQuiz()

var countDown = function(){

    //use the setInterval() method to call a function to be executed every 1000 milliseconds

    var timeInterval = setInterval(function(){ 
        if(timeLeft > 1) {
            //set the textContent of the timerEl to show the remaining seconds
            timerEl.textContent = "Time: " + timeLeft;
            // then decrement timeLeft by 1
            timeLeft--;
        }
        else {
        // else will mean once timer gets to zero the timer will stop and the user will be taken to endQuiz()
            clearInterval(timeInterval)
            endQuiz();
        }
 
    }, 1000);  

};


var startQuiz = function(){

    startChallengeContainerEl.classList.add("hide");
    
    // then the timer starts 
    countDown();

    // we then want to call displayQuiz() to present the first quesiton 
    displayQuiz();
};


var displayQuiz = function(){ 

    quizContainerEl.classList.remove("hide"); 
    
    // to display the quiz and questions at each index target the text content of the HTML DOM elements and set their value to the desired properties/strings defined in the questionObjArray at that [index]

    questionTitle.textContent = questionObjArray[index].title 

    button1.textContent = questionObjArray[index].choices[0];

    button2.textContent = questionObjArray[index].choices[1];

    button3.textContent = questionObjArray[index].choices[2];

    button4.textContent = questionObjArray[index].choices[3]; 

    // once the question and answers are displayed we will listen for a button click on one of the answers 

    // set up an eventListener on each of the buttons

    // when a button is clicked it will trigger handleAnswerClick()

};

var handleAnswerClick = function(event){

    //after the button is clicked we need to look at the text string in the clicked button and we need to look at the answer property string in the questionObjArray and compare them

    // we can use the event.target property to itentify which button was clicked to trigger the event. We can then use the .textContent property to target the textContent on the button that was clicked and store it's value in a variable 

    // we can then target the answer property string from the questionObjArray at the current index and store it's value in a variable 

    var buttonText = event.target.textContent;
    var answerText = questionObjArray[index].answer;

    // we can check the the answers by comparing the values stored in our buttonText variable and our answerText variable 

    if(buttonText === answerText) {
        score += 1
        alert("you go it RIGHT!");
    }
    else {
        alert("Sorry you got it WRONG!");
        // time = time - 10sec 
        timeLeft-= 10
    }
    
    // Once we are finished answering the current question we need to move to the next question by incrementing the questionObjArray[index] by +1
    index++

    // if index is greater or = to the length of the questionObjArray length call endQuiz
    if (index >= questionObjArray.length){
        endQuiz();
    }
    // else continue to question at next index by calling displayQuiz()
    else{
    displayQuiz();
    }
};


var endQuiz = function() {

    // when all questions are answered or when array [i] > array.length  or the timer reaches 0 end the game 

    quizContainerEl.classList.add("hide");

    finalScoreFormEl.classList.remove("hide");

    var finalScoreEl = document.getElementById("final-score");

    finalScoreEl.textContent = "Your final score is " + score + "/" + questionObjArray.length + "."

    // set up an event listener for submit button 
    //when the user enters their initials into the input field and clicks submit they are taken to scoreHandler()

};

var scoreHandler = function(event) {
    event.preventDefault();
    // store initials and score as object storedScore and save them in an array of highScore objects  

    var storedInitials = document.getElementById('initials').value;
    var storedScore = score
  
    if (storedInitials === '') {
        alert("initials cannot be blank");

    }

    storedScoreObj = {initials: storedInitials, storedScore: storedScore};

    highScores = JSON.parse(localStorage.getItem('highScores', highScores));

        if (highScores=== null){
            highScores = [];

        }

    // make an empty array [] for highScore in push them into the array
     highScores.push(storedScoreObj);

    // save highScores to local storage?

    localStorage.setItem('highScores', JSON.stringify(highScores));

    //get saved scores from localstorage

   

    console.log(highScores);
    console.log(highScores[0]);

    //then the user is taken to the highscore page where their score and initials are displayed from local storage

    window.location.href="high-score-page.html";

};



