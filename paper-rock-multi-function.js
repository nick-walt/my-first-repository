"use strict";

function userChoice() {
    var userInput = prompt ("Do you choose rock, paper or scissors?");
    return userInput;
}

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

function compare (user, computer) {
    const rock = "rock";
    const paper = "paper";
    const scissors = "scissors";
    const tie = "The result is a tie!";
    const computerWin = "Computer Wins with " + computer + " against User's " + user + "!";
    const userWin = "User Wins with " + user + " against Computer's " + computer + "!";
    if (user === computer) {
        return tie;
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
const u = userChoice();
    console.log (u);
const c = computerChoice();
    console.log (c);
const comp = compare (u, c);
    console.log (comp);
