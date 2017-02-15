"use strict";

const enclosure = (function() {

function cardCount (count, card) {
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return count += 1;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            return count -= 1;
    }
    //console.log ("card: " + card + " count: " + count);
};

var main = function main() {
    var count = 0;
    console.log ("Count outside methods: " + count);
    var methods = {
        playCard: function (card) {
            if (card !== undefined) {
                count = cardCount (count, card);
            }
            console.log ("count inside methods: " + count);
        },
        betOrHold: function() {
            if (count > 0) {
                return count + " Bet";
            }
            if (count <= 0) {
                return count + " Hold";
            }
        }
    }
    return methods;
};

var hand = main();
var cc = function cc (card) {
    hand.playCard (card);
    return hand.betOrHold();
};
cc(2); cc(3); cc(4); cc(5); cc(6);

var game = cc();
console.log (game);

})()