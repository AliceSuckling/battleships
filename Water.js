module.exports = (function() {
  var Water = {};

  const OPEN_WATER = 0;
  const OCCUPIED_BY_SHIP = 1;
  const MISSED_WATER = 2;
  const HIT_SHIP = 3;
//the grid
  var grid = [];
  for(var i=0; i<10; i++) {
    var col = [];
    for(var j=0; j<10; j++) {
      col.push(OPEN_WATER);
    }
    grid.push(col);
  }
//the ships
  destroyer = [[2,1],[2,2],[2,3],[2,4]].forEach(function(coords) {
    grid[coords[0]][coords[1]] = OCCUPIED_BY_SHIP;
  })

  destroyer2 = [[4,3],[4,4],[4,5],[4,6]].forEach(function(coords) {
      grid[coords[0]][coords[1]] = OCCUPIED_BY_SHIP;
    })

  battleship = [[7,6],[7,7],[7,8],[7,9],[7,10]].forEach(function(coords) {
      grid[coords[0]][coords[1]] = OCCUPIED_BY_SHIP;
    })

  Water.test = function() {
    return "test";
  }

  var translateColNumber = function(col) {
    switch (col) {
      case "A":
        return 0;
      case "B":
        return 1;
      case "C":
        return 2;
      case "D":
        return 3;
      case "E":
        return 4;
      case "F":
        return 5;
      case "G":
        return 6;
      case "H":
        return 7;
      case "I":
        return 8;
      case "J":
        return 9;
    }
  }

  var translateRowNumber = function(guess) {
    if (guess.charAt(2) == "0") {
      row = 10;
    } else {
      row = guess.charAt(1);
    }
    return row - 1;
  }

//check the water based on guess location
  Water.checkAt = function(guess) {
    console.log(guess);
    if (guess === null || guess.charAt(2) > 0 ) {
      return "To make a guess of where the ship is located in the water, enter a letter (A - J) and a number (1 - 10)";
    }
    else {
      var col = guess.charAt(0);
      var row = translateRowNumber(guess);
    }

    col = translateColNumber(col);
    var result;

    if (grid[row][col] == MISSED_WATER) {
      result = "you already tried here";
    }
    else if (grid[row][col] == OPEN_WATER) {
      grid[row][col] = MISSED_WATER;
      result = "miss";
    }
    else if (grid[row][col] == OCCUPIED_BY_SHIP ) {
      grid[row][col] = HIT_SHIP;
      //TODO handle logic of updated ship sunk status
      //if one of the ships is sunk, result will return 'sunk'
      result = "hit";
    }

    console.log(grid);
    return result;
  }

  return Water;
})();
