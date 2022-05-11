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

  let sizes = 0
  let barbecue = 1
  let ketchup = 1
  let drink = 0
  
	
	// get user input (what size they would like)
	let size = parseInt(document.getElementById('size').value)

  // get user input (what size they would like)
	let sauce = parseInt(document.getElementById('sauce').value)

  // get user input (would they like a drink)
	let drink = parseInt(document.getElementById('drink').value)
  
   // determine the answer based on what size and sauce the user chose and whether or not they want a drink

    if (sizes=="5piece") {
      sizes = 10

    }

    else if (sizes=="8piece") {
      sizes = 16

    }  

	else if (sizes=="10piece") {
      sizes = 20
    
    }

  if (drink=="yes") {
      drink = 3
    
    }

  else {
      drink = 0
    
    }

  if (sauce=="barbecue") {
      sauce = 1
    
    }

  else if (sauce=="ketchup") {
      sauce = 1
    
    }
  else {
      sauce = 0
    
    }

  
  // display the results 
  document.getElementById('answer').innerHTML = answer

}