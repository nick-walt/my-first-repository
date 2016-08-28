var userChoice = function (userTurn) {
    var userTurn = prompt ("Do you choose rock, paper or sissors?");
}

var computerChoice = function (computerTurn) {
    var computerTurn = Math.random();
    var rock = "rock";
    var paper = "paper";
    var scissors = "scissors";
    if (computerTurn <= 0.33) {
        return rock;
    } else if (computerTurn >= 0.34 && computerTurn <= 0.66) {
        return paper;
    } else if (computerTurn >= 0.67 && computerTurn <= 1.00) {
        return scissors;
    }
}

function compare (userChoice, computerChoice) {
    var tie = "The result is a tie!";
    var rockWin = "rock wins";
    var paperWin = "paper wins";
    if (userChoice === computerChoice) {
        return tie;
    } else if (userChoice === rock && computerChoice === scissors) {
        return rockWin;
    } else {
        return paperWin;
    }
}

