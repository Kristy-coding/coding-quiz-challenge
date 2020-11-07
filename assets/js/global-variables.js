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

var submitButtonEl = document.getElementById("submit-button");

var timerEl = document.getElementById('timer');

var index = 0;

var score = 0;

var timeLeft = 75;

var highScores = [];



var questionObjArray = [
    { //questionObj [0]
        title: "Arrays in JavaScript can be used to store___.",
        choices: [
            "1. numbers and strings", //[0]
            "2. other arrays",        //[1]
            "3. booleans",            //[2]
            "4. all of the above"     //[3]
        ],
        answer: "4. all of the above"
    
    },

    {// questionObj [1]
        title: "Inside which HTML element to we put JavaScript?",
        choices:[
            "1. <scripting>", //[0]
            "2. <script>", //[1]
            "3. <js>", //[2]
            "4. none of the above" //[3]
        ],
        answer: "2. <script>"
    },
     {// questionObj [2]
        title: "A very useful tool for debugging is ____",
        choices:[
            "1. for loops", //[0]
            "2. terminal", //[1]
            "3. arrays", //[2]
            "4. console.log()" //[3]
        ],
        answer: "4. console.log()"
    },
     {// questionObj [3]
        title: "How can you add a comment in JavaScript?",
        choices:[
            "1. <!--This is a comment-->", //[0]
            "2. 'This is a comment", //[1]
            "3. //This is a comment", //[2]
            "4. **This is a comment" //[3]
        ],
        answer: "3. //This is a comment"
    },
];