// Copyright (c) 2022 Samuel Carlson All rights reserved
//
// Created by: Samuel Carlson
// Created on: May 2022
// This file contains the JS functions for index.html

"use strict"


/**
 * This function displays the users total based on what they ordered
 */
function displayAnswer() {
  
  	// initialize variables (answer)
	let answer = ""
  let sizePrice = 0
  let saucePrice = 0
  let drinkPrice = 0
  
	
	// get user input (what size they would like)
	let selectSize = document.getElementById('size')
  let size = selectSize.options[selectSize.selectedIndex].value

  // get user input (what sauce they would like)
	let selectSauce = document.getElementById('sauce')
  let sauce = selectSauce.options[selectSauce.selectedIndex].value

  // get user input (would they like a drink)
	let selectDrink = document.getElementById('drink')
  let drink = selectDrink.options[selectDrink.selectedIndex].value
 
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
  
  // output display users subtotal
  document.getElementById('subtotal').innerHTML = 'Your sub total is $' + subtotal.toFixed(2) + '.'

  // output display users tax
  document.getElementById('tax').innerHTML = 'Your tax is $' + tax.toFixed(2) + '.'

  // output display users total
  document.getElementById('total').innerHTML = 'Your total is $' + total.toFixed(2) + '.'
}