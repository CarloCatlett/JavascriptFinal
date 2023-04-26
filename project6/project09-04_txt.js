"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-04

      Project to store high scores from a game in a cookie
      Author: Carlo Catlett
      Date: 4/24/2023

      Filename: project09-04.js
*/

/* Page Objects */
let bestText = document.getElementById("best");
let clockTimer = document.getElementById("timer");

// Custom event that runs when the puzzle is solved
window.addEventListener("puzzleSolved", updateRecord);

// Event listener that is run when the page loads
window.addEventListener("load", function() {
      if (document.cookie) {
            var best = getBestTime();
            var bestText = document.querySelector('#bestTime');
            bestText.textContent = best + ' seconds';
      }
});

function getBestTime() {
      if (document.cookie) {
        
        var cookieArray = document.cookie.split('=');
        var bestTime = parseInt(cookieArray[1]);
        return bestTime;

      } else {

            return 9999;

      }
    }

  function updateRecord() {
  var solutionTime = parseInt(document.getElementById("timer").textContent);
  var bestTime = getBestTime();
  
  if (solutionTime < bestTime) {
    bestTime = solutionTime;
    var bestText = document.getElementById("bestTime");
    bestText.textContent = bestTime + " seconds";
    
    var expires = new Date();
    expires.setTime(expires.getTime() + (90 * 24 * 60 * 60 * 1000));
    var cookieValue = "best=" + bestTime + "; expires=" + expires.toUTCString();
    document.cookie = cookieValue;
  }
}

}
