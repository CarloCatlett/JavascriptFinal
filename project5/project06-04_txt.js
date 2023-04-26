"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-04

      Project to turn a selection list into a selection of hypertext links
      Author: Carlo Catlett
      Date: 4/25/2023

      Filename: project06-04.js
*/
function showAll(selectList) {
   const options = selectList.options;
   const optionLength = options.length;
 
   for (let i = 0; i < optionLength; i++) {
     options[i].style.display = "block";
   }
 }

 function filterSelect(selectList, category) {
   const options = selectList.options;
   const optionLength = options.length;
 
   for (let i = 0; i < optionLength; i++) {
     if (options[i].className === category) {
       options[i].style.display = "block";
     } else {
       options[i].style.display = "none";
     }
   }
 }

 const selectVehicleBtn = document.getElementById("selectVehicle");

 selectVehicleBtn.onclick = function() {
   const year = document.getElementById("year").value;
   const make = document.getElementById("make").value;
   const model = document.getElementById("model").value;
   const trim = document.getElementById("trim").value;
   const vehicleParagraph = document.getElementById("vehicle");
   
   vehicleParagraph.textContent = " " + year + " " + make + " " + model + " " + trim + " ";
 }

// Selection lists in the web form
let make = document.getElementById("make");
let model = document.getElementById("model");
let trim = document.getElementById("trim");

// Option elements within the selection lists
let makeOptions = document.querySelectorAll("select#make option");
let modelOptions = document.querySelectorAll("select#model option");
let trimOptions = document.querySelectorAll("select#trim option");

// The number of options within each selection list
let makes = makeOptions.length;
let models = modelOptions.length;
let trims = trimOptions.length;

// Form button to generate the complete text of the selected vehicle
let selectVehicle = document.getElementById("selectVehicle");

// Paragraph containing the text of the selected vehicle
let vehicle = document.getElementById("vehicle");


// Event handler to modify the content of the Model selection list
// when the Make selection list changes

make.onchange = function() {
   let makeIndex = make.selectedIndex;
   let makeCategory = make.options[makeIndex].text;
   
   if (makeIndex === 0) {
      showAll(model);
   } else {
      filterSelect(model, makeCategory);
   }  
}

// Event handler to modify the content of the Trim selection list
// when the Model selection list changes

model.onchange = function() {
   let modelIndex = model.selectedIndex;
   let modelCategory = model.options[modelIndex].text;
   
   if (modelIndex === 0) {
      showAll(trim);
   } else {
      filterSelect(trim, modelCategory);
   }     
}

