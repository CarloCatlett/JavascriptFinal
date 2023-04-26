/*    JavaScript 7th Edition
      Chapter 3
      Project 03-04

      Application to write a list of customer reviews
      Author: Carlo 
      Date: 4/25/2023

      Filename: project03-04.js
*/

let reviewers = ["WillHa85", "GoldFry26", "Mittens41", "Tompkins8", "Carlo"];
let reviewType = ["P", "N", "", "", ""]
let rating = [5, 2, 1, 4, 5];
let reviewDates = ["11/18/2024", "11/17/2024", "11/15/2024", "11/10/2024", "4/25/2023"];
let reviews = [
   "I've owned all of the Dance Off games from the beginning. I have lost 6 pounds since I started playing.",
   "A so-so release of this well-established game. Where this release fails is in the choreography. Many of the moves follow predictable patterns. I hope the next release improves the choreography .",
   "The installation was buggy and kept crashing my gaming console. I spent several hours on tech support with no solution to my problem. I finally returned it and got my money back. I wish I could give it a zero star rating.",
   "The latest version of Dance Off improves upon the 8th Edition only slightly; still is one of the best dance-style games on the market.",
   "This is a classic!"
  ];
let reviewTitles = ["My Favorite Workout Game", "Poor Choreography", "Buggy with Poor Tech Support", "Nice Improvement", "Insane"];

function starImages(rating) {
  let imageText = "";
  for (let i = 1; i <= rating; i++) {
    imageText += "<img src='star.png'>";
  }
  return imageText;
}


const reviewsArray = [];
for (let i = 0; i < reviewers.length; i++) {
  const review = {
    reviewer: reviewers[i],
    reviewType: reviewType[i],
    rating: rating[i],
    reviewDate: reviewDates[i],
    reviewTitle: reviewTitles[i],
    reviewText: reviews[i]
  };
  reviewsArray.push(review);
}


reviewsArray.sort((a, b) => b.rating - a.rating);

for (let i = 0; i < reviewsArray.length; i++) {
  let reviewCode = "";

  if (reviewsArray[i].reviewType === "P") {
    reviewCode += "<table class='prime'>";
  } else if (reviewsArray[i].reviewType === "N") {
    reviewCode += "<table class='new'>";
  } else {
    reviewCode += "<table>";
  }

  reviewCode += "<caption>" + reviewsArray[i].reviewTitle + "</caption>";
  reviewCode += "<tr><th>By</th><td>" + reviewsArray[i].reviewer + "</td></tr>";
  reviewCode += "<tr><th>Review Date</th><td>" + reviewsArray[i].reviewDate + "</td></tr>";
  reviewCode += "<tr><th>Rating</th><td>" + starImages(reviewsArray[i].rating) + "</td></tr>";
  reviewCode += "<tr><td colspan='2'>" + reviewsArray[i].reviewText + "</td></tr>";
  reviewCode += "</table>";

  const articles = document.getElementsByTagName("article");
  articles[0].insertAdjacentHTML("beforeend", reviewCode);
}
