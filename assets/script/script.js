function countdown() {
  var timeLeft = 60;

  // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    if (timeLeft >= 0) {
      timerEl.textContent = timeLeft;
      timeLeft-=10;
    } else {
      clearInterval(timeInterval);
      displayMessage();
    }
     
  }, 1000);
}