module.exports = (function() {
  var Water = {};

  const OPEN_WATER = 0;
  const OCCUPIED_BY_SHIP = 1;
  const HIT_SHIP = 2;
  const MISSED_WATER = 3;

  const SUNK_DESTROYER = 12;
  const SUNK_BATTLESHIP = 15;
//the grid
  var grid = [];
  for(var i=0; i<10; i++) {
    var col = [];
    for(var j=0; j<10; j++) {
      col.push(OPEN_WATER);
    }
    grid.push(col);
  }

  //random location for destoyer
  destroyer = [];
  var direction = Math.floor(Math.random() * 2);
  for (var i = 0; i < 1; i++) {
    if (direction === 1) { //horizontal
      row = Math.floor(Math.random() * 9);
      var col1 = Math.floor(Math.random() * 6);
      var col2 = col1 + 1;
      var col3 = col2 + 1;
      var col4 = col3 + 1;
      destroyer.push([row, col1], [row, col2], [row, col3], [row, col4]);
    } else {
      var row1 = Math.floor(Math.random() * 6);
      var row2 = row1 + 1;
      var row3 = row2 + 1;
      var row4 = row3 + 1;
      col = Math.floor(Math.random() * 9);
      destroyer.push([row1, col],[row2, col],[row3, col],[row4, col]);
    }
  };
  //convert to coords
  destroyer.forEach(function(coords) {
    grid[coords[0]][coords[1]] = OCCUPIED_BY_SHIP;
  });

  //random location for destroyer2
  destroyer2 = [];
  var direction = Math.floor(Math.random() * 2);
  for (var i = 0; i < 1; i++) {
    if (direction === 1) { //horizontal
      row = Math.floor(Math.random() * 9);
      var col1 = Math.floor(Math.random() * 6);
      var col2 = col1 + 1;
      var col3 = col2 + 1;
      var col4 = col3 + 1;
      destroyer2.push([row, col1], [row, col2], [row, col3], [row, col4]);
    } else {
      var row1 = Math.floor(Math.random() * 6);
      var row2 = row1 + 1;
      var row3 = row2 + 1;
      var row4 = row3 + 1;
      col = Math.floor(Math.random() * 9);
      destroyer2.push([row1, col],[row2, col],[row3, col],[row4, col]);
    }
  };
//convert to coords
  destroyer2.forEach(function(coords) {
    grid[coords[0]][coords[1]] = OCCUPIED_BY_SHIP;
  });

  //random location for battleship
  battleship = [];
  var direction = Math.floor(Math.random() * 2);
  for (var i = 0; i < 1; i++) {
    if (direction === 1) { //horizontal
      row = Math.floor(Math.random() * 9);
      var col1 = Math.floor(Math.random() * 5);
      var col2 = col1 + 1;
      var col3 = col2 + 1;
      var col4 = col3 + 1;
      var col5 = col4 + 1;
      battleship.push([row, col1], [row, col2], [row, col3], [row, col4], [row, col5]);
    } else {
      var row1 = Math.floor(Math.random() * 5);
      var row2 = row1 + 1;
      var row3 = row2 + 1;
      var row4 = row3 + 1;
      var row5 = row4 + 1;
      col = Math.floor(Math.random() * 9);
      battleship.push([row1, col],[row2, col],[row3, col],[row4, col], [row5, col]);
    }
  };
  //convert to coords
  battleship.forEach(function(coords) {
    grid[coords[0]][coords[1]] = OCCUPIED_BY_SHIP;
  });

  var ships = [destroyer, destroyer2, battleship];
  // console.log(ships);

  destroyerCoords = ships[0];
  destroyer2Coords = ships[1];
  battleshipCoords = ships[2];

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
    console.log("You tried: " + guess);
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
      result = "hit";
    }
    // console.log(grid);

    //ship coords values - Destroyer
    firstDestroyerCoords = destroyerCoords[0];
    secondDestroyerCoords = destroyerCoords[1];
    thirdDestroyerCoords = destroyerCoords[2];
    fourthDestroyerCoords = destroyerCoords[3];

    firstDestroyerValue = grid[firstDestroyerCoords[0]][firstDestroyerCoords[1]];
    secondDestroyerValue = grid[secondDestroyerCoords[0]][secondDestroyerCoords[1]];
    thirdDestroyerValue = grid[thirdDestroyerCoords[0]][thirdDestroyerCoords[1]];
    fourthDestroyerValue = grid[fourthDestroyerCoords[0]][fourthDestroyerCoords[1]];

    destroyerValue = (firstDestroyerValue + secondDestroyerValue + thirdDestroyerValue + fourthDestroyerValue) - 4;

    //ship coords values - Destroyer2
    firstDestroyer2Coords = destroyer2Coords[0];
    secondDestroyer2Coords = destroyer2Coords[1];
    thirdDestroyer2Coords = destroyer2Coords[2];
    fourthDestroyer2Coords = destroyer2Coords[3];

    firstDestroyer2Value = grid[firstDestroyer2Coords[0]][firstDestroyer2Coords[1]];
    secondDestroyer2Value = grid[secondDestroyer2Coords[0]][secondDestroyer2Coords[1]];
    thirdDestroyer2Value = grid[thirdDestroyer2Coords[0]][thirdDestroyer2Coords[1]];
    fourthDestroyer2Value = grid[fourthDestroyer2Coords[0]][fourthDestroyer2Coords[1]];

    destroyer2Value = (firstDestroyer2Value + secondDestroyer2Value + thirdDestroyer2Value + fourthDestroyer2Value) - 4;

    //ship coords values - BattleShip
    firstBattleshipCoords = battleshipCoords[0];
    secondBattleshipCoords = battleshipCoords[1];
    thirdBattleshipCoords = battleshipCoords[2];
    fourthBattleshipCoords = battleshipCoords[3];
    fifthBattleshipCoords = battleshipCoords[4];

    firstBattleshipValue = grid[firstBattleshipCoords[0]][firstBattleshipCoords[1]];
    secondBattleshipValue = grid[secondBattleshipCoords[0]][secondBattleshipCoords[1]];
    thirdBattleshipValue = grid[thirdBattleshipCoords[0]][thirdBattleshipCoords[1]];
    fourthBattleshipValue = grid[fourthBattleshipCoords[0]][fourthBattleshipCoords[1]];
    fifthBattleshipValue = grid[fifthBattleshipCoords[0]][fifthBattleshipCoords[1]];

    battleshipValue = (firstBattleshipValue + secondBattleshipValue + thirdBattleshipValue + fourthBattleshipValue + fifthBattleshipValue) - 5;

    //log score to indicate sunk or not
    console.log("Destroyer One Hits: " + destroyerValue + "/4");
    console.log("Destroyer Two Hits: " + destroyer2Value + "/4");
    console.log("Battleship Hits: " + battleshipValue + "/5");
    console.log("Result: ");
    return result;
  }

  return Water;
})();
