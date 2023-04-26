/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: 
      Date:   

      Filename: project02-04.js
 */
 




// Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }
 
 const CHICKEN_PRICE= 10.95;
 const HALIBUT_PRICE= 13.95;
 const BURGER_PRICE= 9.95;
 const SALMON_PRICE= 18.95;
 const SALAD_PRICE= 7.95;
 const SALES_TAX = .007;


document.getElementById("chicken").addEventListener("input", calcTotal);
document.getElementById("halibut").addEventListener("input", calcTotal);
document.getElementById("burger").addEventListener("input", calcTotal);
document.getElementById("salmon").addEventListener("input", calcTotal);
document.getElementById("salad").addEventListener("input", calcTotal);


 function calcTotal() {
  let cost = 0;
  const buyChicken = document.getElementById("chicken").value;
  const buyHalibut = document.getElementById("halibut").value;
  const buyBurger = document.getElementById("burger").value;
  const buySalmon = document.getElementById("salmon").value;
  const buySalad = document.getElementById("salad").value;
  
  if (buyChicken) {
    cost += buyChicken * CHICKEN_PRICE;
  }
  if (buyHalibut) {
    cost += buyHalibut * HALIBUT_PRICE;
  }
  if (buyBurger) {
    cost += buyBurger * BURGER_PRICE;
  }
  if (buySalmon) {
    cost += buySalmon * SALMON_PRICE;
  }
  if (buySalad) {
    cost += buySalad * SALAD_PRICE;
  }
  
  document.getElementById("foodTotal").innerHTML = formatCurrency(cost);
  
  let tax = cost * SALES_TAX;
  document.getElementById("foodTax").innerHTML = formatCurrency(tax);
  
  let totalCost = cost + tax;
  document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);
}