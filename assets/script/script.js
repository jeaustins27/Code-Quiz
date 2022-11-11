// function countdown() {
//   var timeLeft = 60;

//   // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
//   var timeInterval = setInterval(function () {
//     if (timeLeft >= 0) {
//       timerEl.textContent = timeLeft;
//       timeLeft-=10;
//     } else {
//       clearInterval(timeInterval);
//       displayMessage();
//     }
     
//   }, 1000);
// }

var body = document.body;
// creating the header element
var header = document.createElement("header");
// creating the high score button for the header element
var scoreBtn = document.createElement("button");
// creating the timer  for the header element
var headerTimer = document.createElement("div");

// adding text content to display on button
scoreBtn.textContent = "View Highscores";
// adding text element to display the time
headerTimer.textContent = "Time: 0 "
// adding the header to the body
body.appendChild(header);
// adding the highscore button to the header
header.appendChild(scoreBtn);
// addidng the timer to the header
header.appendChild(headerTimer);

// setting the styling for the high score button
scoreBtn.setAttribute("style", "display:flex; font-size: 1.2rem; border-radius:20px; padding:1rem; cursor:pointer;");
// setting the styling for the timer
headerTimer.setAttribute("style", "display:flex; font-size:2rem;");
// setting the styling for the header element
header.setAttribute("style", "display:flex; justify-content:space-between;");

// creating the div for the main quiz intro
var introQuiz = document.createElement("div");
// creating the h1 element to display the title of the quiz
var challenge = document.createElement("h1");
// creating the p element to display the rules of the quiz
var challengeP = document.createElement("p");
// button to start the quiz
var challengeBtn = document.createElement("button");

// adding the intro quiz to the body
body.appendChild(introQuiz);
// adding the challenge title to the intro quiz div
introQuiz.appendChild(challenge);
// adding the challenge paragraph to the intro quiz div
introQuiz.appendChild(challengeP);
// adding the start quiz buttont to the intro quiz div
introQuiz.appendChild(challengeBtn);

challenge.textContent = "Coding Quiz Challenge";
challengeP.textContent = "In this quiz you will have 60 seconds to answer all the questions. Each question is worth 10 points, but be careful, each wrong answer will deduct 10 seconds from your time and 10 points from your score. Good luck!";
challengeBtn.textContent = "Start Quiz";

introQuiz.setAttribute("style", "display:flex; flex-direction:column; align-items:center; margin:7rem; background-color:blue; border-radius:20px");
challenge.setAttribute("style", "font-size:3rem; color:white");
challengeP.setAttribute("style", "font-size:1.5rem; color:white; margin:1rem; text-align:center;");
challengeBtn.setAttribute("style", "font-size:1.5rem; border-radius:40px; padding:1rem; margin:1rem; background-color:white; color:blue; cursor:pointer;")