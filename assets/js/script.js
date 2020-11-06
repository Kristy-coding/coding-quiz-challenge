

var startButtonEl = document.getElementById('start-btn');

var startChallengeContainerEl = document.getElementById("start-challenge-container");

var quizContainerEl = document.getElementById("quiz-container");

var questionTitle = document.querySelector("#question")
var button1 = document.querySelector("#answer-button1")
var button2 = document.querySelector("#answer-button2")
var button3 = document.querySelector("#answer-button3")
var button4 = document.querySelector("#answer-button4") 

var index = 0

var score = 0

var questionObjArray = [
    { //questionObj [0]
        title: "Arrays in JavaScript can be used to store___.",
        choices: [
            "numbers and strings",
            "other arrays",
            "booleans",
            "all of the above"
        ],
        answer: "all of the above"
    
    },

    {// questionObj [1]
        title: "questions 2.",
        choices:[
            "option 1",
            "option 2",
            "option 3",
            "option 4",
        ],
        answer: "option 3"
    },
     {// questionObj [2]
        title: "questions 3.",
        choices:[
            "option 1",
            "option 2",
            "option 3",
            "option 4",
        ],
        answer: "option 2"
    },
     {// questionObj [3]
        title: "questions 4.",
        choices:[
            "option 1",
            "option 2",
            "option 3",
            "option 4",
        ],
        answer: "option 1"
    },
]




// when we load the page we see the start-challenge-container and header
// the rest of the content is hiden 
//we listen for a button click on start-button
//when the start button is clicked the start button event listener triggers startQuiz()

var startQuiz = function(){
// first we hide the start-challenge-container
startChallengeContainerEl.classList.add("hide");
// then the timer starts 

// we then want to call displayQuiz() to present the first quesiton 

    displayQuiz();
};


var displayQuiz = function(){ 

    quizContainerEl.classList.remove("hide"); 
    
        questionTitle.innerText = questionObjArray[index].title 

        button1.innerText = questionObjArray[index].choices[0];

        button2.innerText = questionObjArray[index].choices[1];

        button3.innerText = questionObjArray[index].choices[2];

        button4.innerText = questionObjArray[index].choices[3]; 

};

var handleAnswerClick = function(event){
    var buttonText = event.target.innerText;
    var answer = questionObjArray[index].answer;
    // check answers here 
    if(buttonText===answer) {
        score += 10
        alert("you go it right!");
    }
    else {
        alert("you got it wrong!");
    }
    
    index++

    console.log(index, questionObjArray.length);
    if (index >= questionObjArray.length){
        endQuiz();
    }
    else{
    displayQuiz();
    }
};


var endQuiz = function() {

    console.log("this is the end");
    // when all questions are answered or when array [i] > array.length  or the timer reaches 0 end the game 
    // end the game by presenting new inner HTML for All Done!
    // the new inner html with present the user with thier high score and allow them to enter their initials and submit the info to high score page (localStorage)

    
};


startButtonEl.addEventListener("click", startQuiz); 

button1.addEventListener("click", handleAnswerClick);
button2.addEventListener("click", handleAnswerClick); 
button3.addEventListener("click", handleAnswerClick); 
button4.addEventListener("click", handleAnswerClick); 