module.exports = (function() {
  var Ships = {};

  Ships.test = function() {
    return "test";
  }

//Ships have 5 properties: size, hits, sunk, direction & location
  Ships.new = function(squares) {
    var size = squares;
    var hits = 0;
    var sunk = function() {
      if (hits => squares) {
        sunk = true;
      } else {
        sunk = false;
      }
    };
    //random direction
    var direction = Math.floor(Math.random() * 2);
    //horizontal
    if (direction === 1) {
      var row = Math.floor(Math.random() * this.Water);
      var column = Math.floor(Math.random() * (this.Water - this.size + 1));
    //vertical
    } else {
        var row = Math.floor(Math.random() * (this.Water - this.size + 1));
        var column = Math.floor(Math.random() * this.Water);
    };
    //random location
    var location = [];
    for (var i = 0; i < this.size; i++) {
      if (direction === 1) {
        location.push(row + "" + (column + i));
      } else {
        location.push((row + i) + "" + column);
      }
    };
  }

//create the three ships
  var battleship = Ships.new(5);
  var destroyer = Ships.new(4);
  var destroyer2 = Ships.new(4);

  return Ships;
})();
