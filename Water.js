module.exports = (function() {
  var Water = {};

  const OPEN_WATER = 0;
  const OCCUPIED_BY_SHIP = 1;
  const HIT_SHIP = 2;
  const MISSED_WATER = 3;

//the grid
  var grid = [];
  for(var i=0; i<10; i++) {
    var col = [];
    for(var j=0; j<10; j++) {
      col.push(OPEN_WATER);
    }
    grid.push(col);
  }

  //random location for ships
  destroyer = [];
  destroyer2 = [];
  battleship = [];

  var space1 = Math.floor(Math.random() * 6); //anywhere allowing for 4 spaces at edge of grid
  var space2 = Math.floor(Math.random() * 9); //anywhere on 10 x 10 grid
  var space3 = Math.floor(Math.random() * 5); //anywhere allowing for 5 spaces at edge of grid
  var space4 = Math.floor(Math.random() * 6); //anywhere allowing for 4 spaces at edge of grid
  var space5 = Math.floor(Math.random() * 9); //anywhere on 10 x 10 grid
  var space6 = Math.floor(Math.random() * 9); //anywhere on 10 x 10 grid

  var destroyerDirection = Math.floor(Math.random() * 2); //horizontal or vertical
  var destroyer2Direction = Math.floor(Math.random() * 2); //horizontal or vertical
  var battleshipDirection = Math.floor(Math.random() * 2); //horizontal or vertical

  if (destroyerDirection === 1) { //horizontal
    destroyer.push([space2, space1], [space2, (space1 + 1)], [space2, (space1 + 2)], [space2, (space1 + 3)]);
  } else {
    destroyer.push([space1, space2],[(space1 + 1), space2],[(space1 + 2), space2],[(space1 + 3), space2]);
  }
  if (destroyer2Direction === 1) { //horizontal
    destroyer2.push([space5, space4], [space5, (space4 + 1)], [space5, (space4 + 2)], [space5, (space4 + 3)]);
  } else {
    destroyer2.push([space4, space5],[(space4 + 1), space5],[(space4 + 2), space5],[(space4 + 3), space5]);
  }
  if (battleshipDirection === 1) { //horizontal
    battleship.push([space6, space3], [space6, (space3 + 1)], [space6, (space3 + 2)], [space6, (space3 + 3)], [space6, (space3 + 4)]);
  } else {
    battleship.push([space3, space6],[(space3 + 1), space6],[(space3 + 2), space6],[(space3 + 3), space6], [(space3 + 4), space6]);
  }

  //convert to coords
  destroyer.forEach(function(coords) {
    grid[coords[0]][coords[1]] = OCCUPIED_BY_SHIP;
  });
  destroyer2.forEach(function(coords) {
    grid[coords[0]][coords[1]] = OCCUPIED_BY_SHIP;
  });
  battleship.forEach(function(coords) {
    grid[coords[0]][coords[1]] = OCCUPIED_BY_SHIP;
  });

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
    console.log(grid);

    //ship coords values - Destroyer
    firstDestroyerCoords = destroyer[0];
    secondDestroyerCoords = destroyer[1];
    thirdDestroyerCoords = destroyer[2];
    fourthDestroyerCoords = destroyer[3];

    destroyerValue =  grid[firstDestroyerCoords[0]][firstDestroyerCoords[1]] +
                      grid[secondDestroyerCoords[0]][secondDestroyerCoords[1]] +
                      grid[thirdDestroyerCoords[0]][thirdDestroyerCoords[1]] +
                      grid[fourthDestroyerCoords[0]][fourthDestroyerCoords[1]] - 4;

    //ship coords values - Destroyer2
    firstDestroyer2Coords = destroyer2[0];
    secondDestroyer2Coords = destroyer2[1];
    thirdDestroyer2Coords = destroyer2[2];
    fourthDestroyer2Coords = destroyer2[3];

    destroyer2Value = grid[firstDestroyer2Coords[0]][firstDestroyer2Coords[1]] +
                      grid[secondDestroyer2Coords[0]][secondDestroyer2Coords[1]] +
                      grid[thirdDestroyer2Coords[0]][thirdDestroyer2Coords[1]] +
                      grid[fourthDestroyer2Coords[0]][fourthDestroyer2Coords[1]] - 4;

    //ship coords values - BattleShip
    firstBattleshipCoords = battleship[0];
    secondBattleshipCoords = battleship[1];
    thirdBattleshipCoords = battleship[2];
    fourthBattleshipCoords = battleship[3];
    fifthBattleshipCoords = battleship[4];

    battleshipValue =   grid[firstBattleshipCoords[0]][firstBattleshipCoords[1]] +
                        grid[secondBattleshipCoords[0]][secondBattleshipCoords[1]] +
                        grid[thirdBattleshipCoords[0]][thirdBattleshipCoords[1]] +
                        grid[fourthBattleshipCoords[0]][fourthBattleshipCoords[1]] +
                        grid[fifthBattleshipCoords[0]][fifthBattleshipCoords[1]] - 5;


    //log score to indicate sunk or not
    console.log("Destroyer One Hits: " + destroyerValue + "/4");
    console.log("Destroyer Two Hits: " + destroyer2Value + "/4");
    console.log("Battleship Hits: " + battleshipValue + "/5");
    console.log("Result: ");
    return result;
  }

  return Water;
})();
