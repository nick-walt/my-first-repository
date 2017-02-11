// Note from Kenny
// Mostly this code is hard to read because your functions do multiple things
// I point out in the comments below that each function should `Do one thing`
// Here is Erics article on that:
// https://medium.com/javascript-scene/the-single-biggest-mistake-programmers-make-every-day-62366b432308#.qiarq9wd2



"use strict";

// declare unchanging constants in global scope for use by all functions
var rock = "rock",
    paper = "paper",
    scissors = "scissors",
    rope = "rope", // added rope
    quit = "quit",
    restart = "restart",
    exited = "exited",
    tie = "tie",
    yes = "yes",
    no = "no";

main();




// Note from Kenny
// I am having a hard time understanding this function.
// See if you can split it out into multiple functions that
// each `Do one thing`. You should have a function that gets the user choice
// and only gets the userChoice, call it getUserChoice(). Its only job should
// be to return the value of "rock", "paper" or "scissors". You should not be checking for "ties"
// inside this function, that is the job of the main program loop.
//
// The retry() function logic does not need to be contained inside the getUserChoice()
// function. Declare it globally, and call it only if the user inputs an
// invalid choice. This seperate the retry() logic, from the logic of getUserChoice() making
// them both easier to read and understand their jobs.

function userChoice (tied) { // closure containing userInput() and retry()
    var get = "bugs Bunny";
    if (tied === undefined) {
        get = prompt ("Do you choose rock, paper or scissors?").toLowerCase();
    } else {
        tied = prompt ("The result is a tie! Please choose again... rock, paper or scissors!").toLowerCase();
        get = tied;
    }
    function userInput () { // capture tie result from compare() function. Could this be passed directly into a method?
        for (const count1 = 0; count1 < 2; count1++) {
            if (get === rock) {
                return get;
            } else if (get === paper) {
                return get;
            } else if (get === scissors) {
                return get;
            } else if (get === rope) {  // added rope
                return get;
            } else {
                get = prompt ("Oops, you have entered " + get + " Please try again.. rock, paper or scissors?").toLowerCase();
            }
        }
        function retry() { // this loop presents the user with the option to continue trying after two invalid inputs
            var again = prompt ("Would you like to continue? Yes or No?").toLowerCase(); // used var instead of let for closure scope
            for (const count2 = 0; count2 < 2; count2++) {
                    if (again === yes) { // captures a request to continue
                        console.log ("Restarting Program");
                        return restart;
                    } else if (again === no) {
                        console.log ("Quiting Program");
                        return quit;
                    } else {
                        again = prompt ("Please enter either Yes or No").toLowerCase();
                    }
            } // for loop drops off the end and the program exits by default if no match is found
            return exited;
        } return retry(); // retry() enclosed by userInput()
    } return userInput(); // userInput() enclosed by userChoice()
};

// Note from Kenny
// This func is good! it does only one thing.
// More of your functions should be smaller like this.

function computerChoice() { // this is the easiest function in the program!... too easy!
    var randomNumber = Math.random();
    if (randomNumber <= 0.24) {
        return rock;
    } else if (randomNumber <= 0.49) {
        return paper;
    } else if (randomNumber <= 0.74) {
        return scissors;
    } else if (randomNumber < 1.0) {
        return rope;
    }
};

// Note from Kenny
// The logic inside this function could be simplified. Also, this function
// almost follows the `Do one thing` rule, but it does 2 things.
// It creates a string and decides the winner. Seperate it into 2 functions
// that each `Do one thing`.

// userChoice() and computerChoice() function results passed to compare() by main(), processed and passed back to main()
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
        } else if (computer === rope) { // added rope
            return computerWin;
        }
    } else if (user === paper) {
        if (computer === rock) {
            return userWin;
        } else if (computer === scissors) {
            return computerWin;
        } else if (computer === rope) {
            return computerWin;
        }
    } else if (user === rope) {  // added rope
        if (computer === paper) {
            return userWin;
        } else if (computer === rock) {
            return userWin;
        } else if (computer === scissors) {
            return computerWin;
        }
    } else if (user === scissors) {
        if (computer === paper) {
            return userWin;
        } else if (computer === rock) {
            return computerWin;
        } else if (computer === rope) { // added rope
            return userWin;
        }
    }
};


// Note from Kenny
// The main programs job is to keep track of the data, control the
// flow of the program and use the rest of the functions to do this.
// try to simplify this after you have modified the rest of the functions
// to `Do one thing`. You may find that you need more functions that `Do one thing`
// to keep the logic and flow of your program as simple as possible inside this function

// Main program
function main (tied) { // the main program needs to control overall flow between the functions due to the way the return statement returns the function result to the exact caller location and continues from there
    var user = "Bugs Bunny"; // function scope var needed because variables declared within if else are private! Doh!
    if (tied === true) { // if compare() returns tie pass tie argument to userChoice again. tie is undefined at first run
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
