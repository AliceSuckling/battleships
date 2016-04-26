module.exports = (function() {
  var Water = {};

  Water.new = function() {
    var water = [];
    for(var i=0; i<10; i++) {
      water[i] = new Array(10);
    }
    return Water;
  }

  Water.test = function() {
    return "test";
  }

//check the water based on guess location
  Water.checkAt = function(guess) {
    var translatePlace = function(guess) {
      if (guess === null || guess.length !== 2) {
        return "To make a guess of where the ship is located in the water, enter a letter (A - J) and a number";
      }
      else {
        var row = guess.charAt(0);
        var col = guess.charAt(1);
      }
    }

    var translateRowNumber = function(row) {
      switch (row) {
        case "A":
          return 1;
        case "B":
          return 2;
        case "C":
          return 3;
        case "D":
          return 4;
        case "E":
          return 5;
        case "F":
          return 6;
        case "G":
          return 7;
        case "H":
          return 8;
        case "I":
          return 9;
        case "J":
          return 10;
      }
    }

    if (row + col == undefined) {
      return "miss";
    }
    if (row + col == 1) {
      return "hit";
    }
    else {
      return "you already tried here";
    }
    row = row + 1;
    col = col + 1;
    // return water[row][col];
  }
})();
