// Copyright (c) 2022 Samuel Carlson All rights reserved
//
// Created by: Samuel Carlson
// Created on: April 2022
// This file contains the JS functions for index.html

"use strict"


/**
 * This function displays the users total based on what they ordered
 */
function displayAnswer () {
  
  	// initialize variables (answer)
	let answer = ""
  let sizePrice = 0
  let saucePrice = 0
  let drinkPrice = 0
  
	
	// get user input (what size they would like)
	let selectSize = document.getElementById('size')
  let size = selectSize.options[selectSize.selectedIndex].value

  // get user input (what sauce they would like)
	let sauce = parseInt(document.getElementById('sauce').value)

  // get user input (would they like a drink)
	let drink = parseInt(document.getElementById('drink').value)
  
   // Determine the cost of the size they chose
    if (size =="5piece") {
      sizePrice = 10
    }
    else if (size == "8piece") {
      sizePrice = 16
    }  
	  else if (size=="10piece") {
      sizePrice = 20
    }
   // Determine the cost of the sauce they chose  
    if (sauce=="barbecue") {
        saucePrice = 1
    }
    else if (sauce=="ketchup") {
        saucePrice = 1
    }
    else {
        saucePrice = 0
    }
     // Determine the cost of the drink they chose  
    if (drink=="yes") {
        drinkPrice = 3
    }
    else {
        drinkPrice = 0 
    }
let subtotal = sizePrice + saucePrice + drinkPrice
let tax = subtotal * 0.13
let total = subtotal + tax

  
  // display the results 
  document.getElementById('answer').innerHTML = total
}