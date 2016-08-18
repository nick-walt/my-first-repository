function sleepCheck (numHours) {
    var plenty = "You're getting plenty of sleep!";
    var much = "Maybe even too much!";
    var more = "Get some more shut eye!";
    if (numHours >= 8 && numHours <= 9) {
        return plenty;
    } else if (numHours > 9){
        return plenty + " " + much;
    } else {
        return more;
    }
}
sleepCheck (7);