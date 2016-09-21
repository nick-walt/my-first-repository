"use strict";
// this code is submitted to Codecademy "lesson 9:next steps"
// next step is to:
    //check user input and prompt again if incorrect
    //prompt user again if the comparison is a tie (restart program)
    //add rope as another choice, which can be cut by scissors and wrapped by paper

// prompt user for rock, paper or scissors
function userChoice() {
    var userInput = prompt ("Do you choose rock, paper or scissors?");
    return userInput;
}

// calculate computer choice by splitting 1.0 into three parts and 
    // assigning each part to rock, paper or scissors
function computerChoice() {
    var randomNumber = Math.random ();
    if (randomNumber <= 0.33) {
        return "rock";
    } else if (randomNumber <= 0.66) {
        return "paper";
    } else if (randomNumber < 1.0) {
        return "scissors";
    }
}

// compare what each function returns and determine if user or computer wins
function compareAll (user, computer) {
    const rock = "rock";
    const paper = "paper";
    const scissors = "scissors";
    const tie = "The result is a tie!";
    const computerWin = "Computer Wins with " + computer + " against User's " + user + "!";
    const userWin = "User Wins with " + user + " against Computer's " + computer + "!";
    if (user === computer) {
        console.log (tie);
        return 
    } else if (user === rock) {
        if (computer === scissors) {
            return userWin;
        } else if (computer === paper) {
            return computerWin;
        }
    } else if (user === paper) {
        if (computer === rock) {
            return userWin;
        } else if (computer === scissors) {
            return computerWin;
        }
    } else if (user === scissors) {
        if (computer === paper) {
            return userWin;
        } else if (computer === rock) {
            return computerWin;
        }
    }
}

// Main program
let user = userChoice();
    console.log ("User chooses.. " + user);
let computer = computerChoice();
    console.log ("Computer chooses.." + computer);
let compare = compareAll (user, computer);
    console.log (compare);