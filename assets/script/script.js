// Button Query Selectors
var startBtn = document.querySelector("#start-btn");
var viewHSbtn = document.querySelector("#viewHS");
var subBtn = document.querySelector("#submit-btn");
var restartBtn = document.querySelector("#restart-btn");
var resetBtn = document.querySelector("#reset-btn")


var announcement = document.querySelector("#main-text");
var answerList = document.querySelector("#answers");
var scoreBoard = document.querySelector("#score");
var countDwn = document.querySelector("#timer");
var highScoreForm = document.querySelector("#highscore-form");
var hsInput = document.querySelector("#hs-input");
var printhsList = document.querySelector("#hslist");
var quiz = document.querySelector(".quiz");
var hsTitle = document.querySelector("#hstitle");
// Time & Score Container
var tsContainer = document.querySelector("#tsContainer");

var answer = document.querySelector("#questionResult");
var savedScore = 0;
var storedHS = [];


// Each question being delcared with anwers and correct answer
var question1 = {
    question: "The ____ attribute is used to point to a specific style declaration in a style sheet.",
    answers: ["ID", "Class", "<div>>", "<header>"],
    correctAns: 0
    };
var question2 = {
    question: "What does DOM stand for?",
    answers: ["Documents On Map", "Depth of Market", "Document Object Model", "Direction of Motion"],
    correctAns: 2
    };
var question3 = {
    question: "JSON is a text format for________?",
    answers: ["Styling", "Calling a Function", "Debugging", "Storing and Transporting Data"],
    correctAns: 3
    };
var question4 = {
    question: "The localStorage object allows you to save key/value pairs in the ______.",
    answers: ["HTML", "Browser", "Stylesheet", "JavaScript"],
    correctAns: 1
    };
var question5 = {
    question: "____ variables can be re-declared and updated",
    answers: ["Var", "Let", "Const", "All of the Above"],
    correctAns: 0
    };

// Created an array to group all the questions, answers, and correct answer response
var questionList = [question1, question2, question3, question4, question5];
var timer = 60;

//The following function is called when the Start Game button is pressed. It includes the timer interval and what to do if an question is answered right/wrong
function startQuiz() {
    var count = 0;
    var currentQ = 0;
    var score = 0;
    startBtn.remove();
    tsContainer.setAttribute("style", "display: flex");
    viewHSbtn.setAttribute("style", "display: none");
    showQuestion(questionList[count]);
    answerList.addEventListener("click", function (event) {
        var userAnswer = event.target;
        if (userAnswer.matches("button") === true && userAnswer.getAttribute("class") == questionList[count].correctAns) {
            score += 20;
            scoreBoard.textContent = score;
            answerList.innerHTML ="";
            count++;
            answer.textContent = "Good job, that's correct!"
            showQuestion(questionList[count]);
        } else {
            timer -= 10;
            answerList.innerHTML = "";
            count++;
            answer.textContent = "Sorry, that's incorrect!"
            showQuestion(questionList[count]);
        } 
    })
    while ((currentQ != count) && (currentQ < questionList.length)) {
        currentQ++;
    }
    var timedQuiz = setInterval(function(){
        timer--;
        countDwn.textContent = timer;
        if (timer <= 0 || count == questionList.length) {
            clearInterval(timedQuiz);
            announcement.textContent = "Time's Up! Quiz Complete! You scored " + score + " points!";
            countDwn.textContent = "";
            scoreBoard.textContent = "";
            answerList.innerHTML = "";
            answer.textContent = "";
            highScoreForm.setAttribute("style", "display: flex");
            tsContainer.setAttribute("style", "display: none");
            viewHSbtn.setAttribute("style", "display: flex");
            resetBtn.setAttribute("style", "display: none");

            savedScore = score;
        }
    }, 1000, count, questionList)
}

// This function will display the questions and the answer selections from the questionsList array
function showQuestion(question) {
    announcement.textContent = question.question;
    for (var i = 0; i < question.answers.length; i++) {
        var btn = document.createElement("button");
        var answer = question.answers[i];
        btn.setAttribute("class", i);
        answerList.appendChild(btn).textContent = answer;
    }
}

//  This function will display the list of highscores if there are any saved in local storage
function displayHs() {
    for (var i = 0; i < storedHS.length; i++) {
        var hslist = storedHS[i];
        var item = document.createElement("li");
        item.textContent = hslist;
        printhsList.appendChild(item);
    }
}

// When the start quiz button is clicked, the quiz questions, selections, timer, and score card will display.
startBtn.addEventListener("click", startQuiz);
// When the submit button is pressed it will add your name with the score to the highscore list and save the data in local storage. It will also hide the "announcement".
subBtn.addEventListener("click", function(event){
    event.preventDefault();                       
    var storedList = JSON.parse(localStorage.getItem("storedList"));
    if (storedList !== null) {
        storedHS = storedList
    }
    if (hsInput.value != "") {
        var hsName = hsInput.value + " - Score: " + savedScore;
        storedHS.push(hsName);
    }
    hsInput.value = "";
    localStorage.setItem("storedList", JSON.stringify(storedHS));
    displayHs();
    subBtn.setAttribute("style", "display: none");
    hsInput.setAttribute("style", "display: none");
    quiz.setAttribute("style", "display: none");
    hsTitle.setAttribute("style", "display: flex");
    viewHSbtn.setAttribute("style", "display: none");
    resetBtn.setAttribute("style", "display: flex");

});

// When the reset scores button is clicked it will clear the highscores list and remove the info from local storage
resetBtn.addEventListener("click", function(event){
    event.preventDefault();
    storedHS = JSON.parse(localStorage.getItem("storedList"));
    storedHS = [];
    localStorage.setItem("storedList", JSON.stringify(storedHS));
    printhsList.innerHTML = "";
    displayHs();
});

// When the restart quiz button is clicked it will take you back to where the page initially loaded
restartBtn.addEventListener("click", function(event){
    event.preventDefault();
    location.reload();
})

// When the view highscores button is clicked it will hide the quiz, timer and scores (if present) and announcement, then it will display the highscores and the list if there was anything already saved in local storage
viewHSbtn.addEventListener("click", function(){
    var storedList = JSON.parse(localStorage.getItem("storedList"));
    if (storedList !== null) {
        storedHS = storedList
    }
    if (hsInput.value != "") {
        var hsName = hsInput.value + " - Score: " + savedScore;
        storedHS.push(hsName);
    }
    hsInput.value = "";
    localStorage.setItem("storedList", JSON.stringify(storedHS));
    displayHs();
    quiz.setAttribute("style", "display: none");
    highScoreForm.setAttribute("style", "display: flex");
    viewHSbtn.setAttribute("style", "display: none");
    tsContainer.setAttribute("style", "display: none");
    hsInput.setAttribute("style", "display: none");
    subBtn.setAttribute("style", "display: none");
    hsTitle.setAttribute("style", "display: flex");

})