"use strict";

// declare unchanging constants in global scope for use by all functions
var rock = "rock",
    paper = "paper",
    scissors = "scissors",
    quit = "quit",
    restart = "restart",
    exited = "exited",
    tie = "tie",
    yes = "yes",
    no = "no";

main();

function userChoice (tied) {
    var get = "bugs Bunny";
    if (tied === undefined) {
        get = prompt ("Do you choose rock, paper or scissors?").toLowerCase(); // declaration of variable "get"
    } else {
        tied = prompt ("The result is a tie! Please choose again... rock, paper or scissors!").toLowerCase();
        get = tied;
    }
    function userInput () { // capture tie result from compare() function. Could this be passed directly into a method?
        for (let count1 = 0; count1 < 2; count1++) { // 'for' loop that limits the capture of invalid user input to five iterations.
            if (get === rock) {  // checks input for match against valid words by using a simple if else loop.;
                //console.log ("get is rock");
                return get;
            } else if (get === paper) {
                //console.log ("get is paper");
                return get;
            } else if (get === scissors) {
                //console.log ("get is scissors");
                return get;
            } else {
                get = prompt ("Oops, you have entered " + get + " Please try again.. rock, paper or scissors?").toLowerCase();
                console.log ("count1 is " + count1);
            }
        }
        //count1 = count1 + 1;
        function retry() { // this loop presents the user with the option to continue trying after five invalid inputs
            var again = prompt ("Would you like to continue? Yes or No?").toLowerCase(); // used var instead of let for closure scope
            for (let count2 = 0; count2 < 2; count2++) {
                //again = prompt ("Would you like to continue? Yes or No?").toLowerCase(); // used var instead of let for closure scope
                //console.log ("Would you like to continue? Yes or No?");
                    if (again === yes) { // captures a request to continue
                        console.log ("Restarting Program");
                        return restart; // restarts the program
                    } else if (again === no) {
                        console.log ("Quiting Program");
                        return quit;
                    } else {
                        again = prompt ("Please enter either Yes or No").toLowerCase();
                        console.log ("count2 is " + count2);
                    }
            }
            return exited;
        } return retry();
    } return userInput();
};

function computerChoice() { // this is the easiest function in the program!... too easy!
    const randomNumber = Math.random();
    if (randomNumber <= 0.33) {
        return rock;
    } else if (randomNumber <= 0.66) {
        return paper;
    } else if (randomNumber < 1.0) {
        return scissors;
    }
};

function compare (user, computer) {
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
};

// Main program
function main (tied) { // the main program needs to control overall flow between the functions due to the way the return statement returns the function result to the exact caller location and continues from there
    var user = "Bugs Bunny"; // function scope var needed because variables declared within if else are private!
    if (tied === true) { // if compare() returned a tie, rerun main and pass tie to userChoice
        user = userChoice (tie);
        console.log ("User chooses.. " + user);
    } else {
        user = userChoice();
        if (user === quit) {
            return console.log ("The User has quit the program");
        } else if (user === exited) {
            return console.log ("The Program has quit");
        } else if (user === restart) {
            console.log ("Restarting the Program");
            user = userChoice();
            console.log ("User chooses.. " + user);
        } else {
            console.log ("User chooses.. " + user);
        }
    }
    let computer = computerChoice();
        console.log ("Computer chooses.." + computer);
    let comp = compare (user, computer);
        if (comp === tie) {
            console.log ("The result is a tie!");
            main (true);
        } else {
            console.log (comp);
        }
};