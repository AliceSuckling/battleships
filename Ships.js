module.exports = (function() {
  var Ships = {};

  Ships.test = function() {
    return "test";
  }

//Ships have 5 properties: size, hits, sunk, direction & location
  Ships.build = function(squares) {
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
      var row = Math.floor(Math.random() * this.grid);
      var col = Math.floor(Math.random() * (this.grid - this.size + 1));
    //vertical
    } else {
        var row = Math.floor(Math.random() * (this.grid - this.size + 1));
        var col = Math.floor(Math.random() * this.grid);
    };
    //random location
    var location = [];
    for (var i = 0; i < this.size; i++) {
      if (direction === 1) {
        location.push(row + "" + (col + i));
      } else {
        location.push((row + i) + "" + col);
      }
    };
  }

//create the three ships
  Ships.create = function() {
    var battleship = Ships.build(5);
    var destroyer = Ships.build(4);
    var destroyer2 = Ships.build(4);
  }

  return Ships;
})();
