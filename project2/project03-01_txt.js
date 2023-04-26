/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Carlo Catlett
      Date: 4/25/2023

      Filename: project03-01.js
*/





 // Get reference to number inputs

 const menuItems = document.querySelectorAll('.menuItem');


 menuItems.forEach(function(item) {
   item.addEventListener('input', calcTotal);
 });
 
 function calcTotal() {
   let foodTotal = 0;
   let foodTax = 0;
   
   menuItems.forEach(function(item) {
     foodTotal += item.value * item.dataset.price;
   });
 
   foodTax = foodTotal * 0.07;
 
   // Calculate the total bill including tax
   const totalBill = foodTotal + foodTax;
 
   // Update the total cost, tax, and total bill elements with formatted values
   document.getElementById('foodTotal').textContent = formatCurrency(foodTotal);
   document.getElementById('foodTax').textContent = formatCurrency(foodTax);
   document.getElementById('totalBill').textContent = formatCurrency(totalBill);

 }
 
 // Function to format currency values
 function formatCurrency(value) {
   return '$' + value.toFixed(2);
 }
 