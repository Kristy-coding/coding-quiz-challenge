
// GLOBAL VARIABLES and OBJECTS//

//mapping targeted HTML elements to the DOM//

var startButtonEl = document.getElementById("start-btn");

var startChallengeContainerEl = document.getElementById("start-challenge-container");

var quizContainerEl = document.getElementById("quiz-container");

var finalScoreFormEl =document.getElementById("final-score-form");

var questionTitle = document.getElementById("question");

var button1 = document.getElementById("answer-button1");

var button2 = document.getElementById("answer-button2");

var button3 = document.getElementById("answer-button3");

var button4 = document.getElementById("answer-button4"); 

var index = 0;

var score = 0;

var questionObjArray = [
    { //questionObj [0]
        title: "Arrays in JavaScript can be used to store___.",
        choices: [
            "numbers and strings", //[0]
            "other arrays",        //[1]
            "booleans",            //[2]
            "all of the above"     //[3]
        ],
        answer: "all of the above"
    
    },

    {// questionObj [1]
        title: "questions 2.",
        choices:[
            "option 1", //[0]
            "option 2", //[1]
            "option 3", //[2]
            "option 4", //[3]
        ],
        answer: "option 3"
    },
     {// questionObj [2]
        title: "questions 3.",
        choices:[
            "option 1", //[0]
            "option 2", //[1]
            "option 3", //[2]
            "option 4", //[3]
        ],
        answer: "option 2"
    },
     {// questionObj [3]
        title: "questions 4.",
        choices:[
            "option 1", //[0]
            "option 2", //[1]
            "option 3", //[2]
            "option 4", //[3]
        ],
        answer: "option 1"
    },
];

// when we load the page we see the start-challenge-container and header
// the rest of the content is hiden 
// we listen for a button click on start-button
// when the start button is clicked the start button event listener triggers startQuiz()

var startQuiz = function(){

    startChallengeContainerEl.classList.add("hide");
    // then the timer starts 

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

    quizContainerEl.classList.add("hide");

    finalScoreFormEl.classList.remove("hide");

    var finalScoreEl = document.getElementById("final-score");

    finalScoreEl.textContent = "Your final score is " + score + "/" + questionObjArray.length + "."



    // when all questions are answered or when array [i] > array.length  or the timer reaches 0 end the game 

};


startButtonEl.addEventListener("click", startQuiz); 

button1.addEventListener("click", handleAnswerClick);

button2.addEventListener("click", handleAnswerClick); 

button3.addEventListener("click", handleAnswerClick); 

button4.addEventListener("click", handleAnswerClick); 