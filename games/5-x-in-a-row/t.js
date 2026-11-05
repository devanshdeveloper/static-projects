var playing = true;
var xTurn = true;
var playCount = 0;

// logical operator's hierarchy, from first to last: NOT -> AND -> OR

/*
  a1 | b1 | c1 | d1 | e1 | f1 | g1 | h1 | i1
	a2 | b2 | c2 | d2 | e2 | f2 | g2 | h2 | i2
	a3 | b3 | c3 | d3 | e3 | f3 | g3 | h3 | i3
  a4 | b4 | c4 | d4 | e4 | f4 | g4 | h4 | i4
  a5 | b5 | c5 | d5 | e5 | f5 | g5 | h5 | i5
  a6 | b6 | c6 | d6 | e6 | f6 | g6 | h6 | i6
  a7 | b7 | c7 | d7 | e7 | f7 | g7 | h7 | i7
  a8 | b8 | c8 | d8 | e8 | f8 | g8 | h8 | i8
  a9 | b9 | c9 | d9 | e9 | f9 | g9 | h9 | i9
*/

function resetGame() {
  // restarts the game
  for (var i = 1; i <= 9; i++) {
    var resetSquare = "a" + i;
    document.getElementById(resetSquare).innerHTML = "-";
    resetSquare = "b" + i;
    document.getElementById(resetSquare).innerHTML = "-";
    resetSquare = "c" + i;
    document.getElementById(resetSquare).innerHTML = "-";
    resetSquare = "d" + i;
    document.getElementById(resetSquare).innerHTML = "-";
    resetSquare = "e" + i;
    document.getElementById(resetSquare).innerHTML = "-";
    resetSquare = "f" + i;
    document.getElementById(resetSquare).innerHTML = "-";
    resetSquare = "g" + i;
    document.getElementById(resetSquare).innerHTML = "-";
    resetSquare = "h" + i;
    document.getElementById(resetSquare).innerHTML = "-";
    resetSquare = "i" + i;
    document.getElementById(resetSquare).innerHTML = "-";
  }
  playing = true;
  xTurn = true;
  document.getElementById("info").innerHTML = "It's X turn!";
  document.getElementById("resetButton").disabled = true;
}

function testWin(lastPlayerIsX) {
  // tests if there's any winner combination
  var pW; // stands for "possible winner"
  if (lastPlayerIsX === true) {
    pW = "X";
  } else {
    pW = "O";
  }
  if (
    (document.getElementById("a1").innerHTML === pW &&
      document.getElementById("a2").innerHTML === pW &&
      document.getElementById("a3").innerHTML === pW &&
      document.getElementById("a4").innerHTML === pW &&
      document.getElementById("a5").innerHTML === pW) ||
    (document.getElementById("b1").innerHTML === pW &&
      document.getElementById("b2").innerHTML === pW &&
      document.getElementById("b3").innerHTML === pW &&
      document.getElementById("b4").innerHTML === pW &&
      document.getElementById("b5").innerHTML === pW) ||
    (document.getElementById("c1").innerHTML === pW &&
      document.getElementById("c2").innerHTML === pW &&
      document.getElementById("c3").innerHTML === pW &&
      document.getElementById("c4").innerHTML === pW &&
      document.getElementById("c5").innerHTML === pW) ||
    (document.getElementById("d1").innerHTML === pW &&
      document.getElementById("d2").innerHTML === pW &&
      document.getElementById("d3").innerHTML === pW &&
      document.getElementById("d4").innerHTML === pW &&
      document.getElementById("d5").innerHTML === pW) ||
    (document.getElementById("e1").innerHTML === pW &&
      document.getElementById("e2").innerHTML === pW &&
      document.getElementById("e3").innerHTML === pW &&
      document.getElementById("e4").innerHTML === pW &&
      document.getElementById("e5").innerHTML === pW) ||
    (document.getElementById("f1").innerHTML === pW &&
      document.getElementById("f2").innerHTML === pW &&
      document.getElementById("f3").innerHTML === pW &&
      document.getElementById("f4").innerHTML === pW &&
      document.getElementById("f5").innerHTML === pW) ||
    (document.getElementById("g1").innerHTML === pW &&
      document.getElementById("g2").innerHTML === pW &&
      document.getElementById("g3").innerHTML === pW &&
      document.getElementById("g4").innerHTML === pW &&
      document.getElementById("g5").innerHTML === pW) ||
    (document.getElementById("h1").innerHTML === pW &&
      document.getElementById("h2").innerHTML === pW &&
      document.getElementById("h3").innerHTML === pW &&
      document.getElementById("h4").innerHTML === pW &&
      document.getElementById("h5").innerHTML === pW) ||
    (document.getElementById("i1").innerHTML === pW &&
      document.getElementById("i2").innerHTML === pW &&
      document.getElementById("i3").innerHTML === pW &&
      document.getElementById("i4").innerHTML === pW &&
      document.getElementById("i5").innerHTML === pW) ||
    (document.getElementById("a2").innerHTML === pW &&
      document.getElementById("a3").innerHTML === pW &&
      document.getElementById("a4").innerHTML === pW &&
      document.getElementById("a5").innerHTML === pW &&
      document.getElementById("a6").innerHTML === pW) ||
    (document.getElementById("b2").innerHTML === pW &&
      document.getElementById("b3").innerHTML === pW &&
      document.getElementById("b4").innerHTML === pW &&
      document.getElementById("b5").innerHTML === pW &&
      document.getElementById("b6").innerHTML === pW) ||
    (document.getElementById("c2").innerHTML === pW &&
      document.getElementById("c3").innerHTML === pW &&
      document.getElementById("c4").innerHTML === pW &&
      document.getElementById("c5").innerHTML === pW &&
      document.getElementById("c6").innerHTML === pW) ||
    (document.getElementById("d2").innerHTML === pW &&
      document.getElementById("d3").innerHTML === pW &&
      document.getElementById("d4").innerHTML === pW &&
      document.getElementById("d5").innerHTML === pW &&
      document.getElementById("d6").innerHTML === pW) ||
    (document.getElementById("e2").innerHTML === pW &&
      document.getElementById("e3").innerHTML === pW &&
      document.getElementById("e4").innerHTML === pW &&
      document.getElementById("e5").innerHTML === pW &&
      document.getElementById("e6").innerHTML === pW) ||
    (document.getElementById("f2").innerHTML === pW &&
      document.getElementById("f3").innerHTML === pW &&
      document.getElementById("f4").innerHTML === pW &&
      document.getElementById("f5").innerHTML === pW &&
      document.getElementById("f6").innerHTML === pW) ||
    (document.getElementById("g2").innerHTML === pW &&
      document.getElementById("g3").innerHTML === pW &&
      document.getElementById("g4").innerHTML === pW &&
      document.getElementById("g5").innerHTML === pW &&
      document.getElementById("g6").innerHTML === pW) ||
    (document.getElementById("h2").innerHTML === pW &&
      document.getElementById("h3").innerHTML === pW &&
      document.getElementById("h4").innerHTML === pW &&
      document.getElementById("h5").innerHTML === pW &&
      document.getElementById("h6").innerHTML === pW) ||
    (document.getElementById("i2").innerHTML === pW &&
      document.getElementById("i3").innerHTML === pW &&
      document.getElementById("i4").innerHTML === pW &&
      document.getElementById("i5").innerHTML === pW &&
      document.getElementById("i6").innerHTML === pW) ||
    (document.getElementById("a3").innerHTML === pW &&
      document.getElementById("a4").innerHTML === pW &&
      document.getElementById("a5").innerHTML === pW &&
      document.getElementById("a6").innerHTML === pW &&
      document.getElementById("a7").innerHTML === pW) ||
    (document.getElementById("b3").innerHTML === pW &&
      document.getElementById("b4").innerHTML === pW &&
      document.getElementById("b5").innerHTML === pW &&
      document.getElementById("b6").innerHTML === pW &&
      document.getElementById("b7").innerHTML === pW) ||
    (document.getElementById("c3").innerHTML === pW &&
      document.getElementById("c4").innerHTML === pW &&
      document.getElementById("c5").innerHTML === pW &&
      document.getElementById("c6").innerHTML === pW &&
      document.getElementById("c7").innerHTML === pW) ||
    (document.getElementById("d3").innerHTML === pW &&
      document.getElementById("d4").innerHTML === pW &&
      document.getElementById("d5").innerHTML === pW &&
      document.getElementById("d6").innerHTML === pW &&
      document.getElementById("d7").innerHTML === pW) ||
    (document.getElementById("e3").innerHTML === pW &&
      document.getElementById("e4").innerHTML === pW &&
      document.getElementById("e5").innerHTML === pW &&
      document.getElementById("e6").innerHTML === pW &&
      document.getElementById("e7").innerHTML === pW) ||
    (document.getElementById("f3").innerHTML === pW &&
      document.getElementById("f4").innerHTML === pW &&
      document.getElementById("f5").innerHTML === pW &&
      document.getElementById("f6").innerHTML === pW &&
      document.getElementById("f7").innerHTML === pW) ||
    (document.getElementById("g3").innerHTML === pW &&
      document.getElementById("g4").innerHTML === pW &&
      document.getElementById("g5").innerHTML === pW &&
      document.getElementById("g6").innerHTML === pW &&
      document.getElementById("g7").innerHTML === pW) ||
    (document.getElementById("h3").innerHTML === pW &&
      document.getElementById("h4").innerHTML === pW &&
      document.getElementById("h5").innerHTML === pW &&
      document.getElementById("h6").innerHTML === pW &&
      document.getElementById("h7").innerHTML === pW) ||
    (document.getElementById("i3").innerHTML === pW &&
      document.getElementById("i4").innerHTML === pW &&
      document.getElementById("i5").innerHTML === pW &&
      document.getElementById("i6").innerHTML === pW &&
      document.getElementById("i7").innerHTML === pW) ||
    (document.getElementById("a4").innerHTML === pW &&
      document.getElementById("a5").innerHTML === pW &&
      document.getElementById("a6").innerHTML === pW &&
      document.getElementById("a7").innerHTML === pW &&
      document.getElementById("a8").innerHTML === pW) ||
    (document.getElementById("b4").innerHTML === pW &&
      document.getElementById("b5").innerHTML === pW &&
      document.getElementById("b6").innerHTML === pW &&
      document.getElementById("b7").innerHTML === pW &&
      document.getElementById("b8").innerHTML === pW) ||
    (document.getElementById("c4").innerHTML === pW &&
      document.getElementById("c5").innerHTML === pW &&
      document.getElementById("c6").innerHTML === pW &&
      document.getElementById("c7").innerHTML === pW &&
      document.getElementById("c8").innerHTML === pW) ||
    (document.getElementById("d4").innerHTML === pW &&
      document.getElementById("d5").innerHTML === pW &&
      document.getElementById("d6").innerHTML === pW &&
      document.getElementById("d7").innerHTML === pW &&
      document.getElementById("d8").innerHTML === pW) ||
    (document.getElementById("e4").innerHTML === pW &&
      document.getElementById("e5").innerHTML === pW &&
      document.getElementById("e6").innerHTML === pW &&
      document.getElementById("e7").innerHTML === pW &&
      document.getElementById("e8").innerHTML === pW) ||
    (document.getElementById("f4").innerHTML === pW &&
      document.getElementById("f5").innerHTML === pW &&
      document.getElementById("f6").innerHTML === pW &&
      document.getElementById("f7").innerHTML === pW &&
      document.getElementById("f8").innerHTML === pW) ||
    (document.getElementById("g4").innerHTML === pW &&
      document.getElementById("g5").innerHTML === pW &&
      document.getElementById("g6").innerHTML === pW &&
      document.getElementById("g7").innerHTML === pW &&
      document.getElementById("g8").innerHTML === pW) ||
    (document.getElementById("h4").innerHTML === pW &&
      document.getElementById("h5").innerHTML === pW &&
      document.getElementById("h6").innerHTML === pW &&
      document.getElementById("h7").innerHTML === pW &&
      document.getElementById("h8").innerHTML === pW) ||
    (document.getElementById("i4").innerHTML === pW &&
      document.getElementById("i5").innerHTML === pW &&
      document.getElementById("i6").innerHTML === pW &&
      document.getElementById("i7").innerHTML === pW &&
      document.getElementById("i8").innerHTML === pW) ||
    (document.getElementById("a5").innerHTML === pW &&
      document.getElementById("a6").innerHTML === pW &&
      document.getElementById("a7").innerHTML === pW &&
      document.getElementById("a8").innerHTML === pW &&
      document.getElementById("a9").innerHTML === pW) ||
    (document.getElementById("b5").innerHTML === pW &&
      document.getElementById("b6").innerHTML === pW &&
      document.getElementById("b7").innerHTML === pW &&
      document.getElementById("b8").innerHTML === pW &&
      document.getElementById("b9").innerHTML === pW) ||
    (document.getElementById("c5").innerHTML === pW &&
      document.getElementById("c6").innerHTML === pW &&
      document.getElementById("c7").innerHTML === pW &&
      document.getElementById("c8").innerHTML === pW &&
      document.getElementById("c9").innerHTML === pW) ||
    (document.getElementById("d5").innerHTML === pW &&
      document.getElementById("d6").innerHTML === pW &&
      document.getElementById("d7").innerHTML === pW &&
      document.getElementById("d8").innerHTML === pW &&
      document.getElementById("d9").innerHTML === pW) ||
    (document.getElementById("e5").innerHTML === pW &&
      document.getElementById("e6").innerHTML === pW &&
      document.getElementById("e7").innerHTML === pW &&
      document.getElementById("e8").innerHTML === pW &&
      document.getElementById("e9").innerHTML === pW) ||
    (document.getElementById("f5").innerHTML === pW &&
      document.getElementById("f6").innerHTML === pW &&
      document.getElementById("f7").innerHTML === pW &&
      document.getElementById("f8").innerHTML === pW &&
      document.getElementById("f9").innerHTML === pW) ||
    (document.getElementById("g5").innerHTML === pW &&
      document.getElementById("g6").innerHTML === pW &&
      document.getElementById("g7").innerHTML === pW &&
      document.getElementById("g8").innerHTML === pW &&
      document.getElementById("g9").innerHTML === pW) ||
    (document.getElementById("h5").innerHTML === pW &&
      document.getElementById("h6").innerHTML === pW &&
      document.getElementById("h7").innerHTML === pW &&
      document.getElementById("h8").innerHTML === pW &&
      document.getElementById("h9").innerHTML === pW) ||
    (document.getElementById("i5").innerHTML === pW &&
      document.getElementById("i6").innerHTML === pW &&
      document.getElementById("i7").innerHTML === pW &&
      document.getElementById("i8").innerHTML === pW &&
      document.getElementById("i9").innerHTML === pW) ||
    (document.getElementById("a1").innerHTML === pW &&
      document.getElementById("b1").innerHTML === pW &&
      document.getElementById("c1").innerHTML === pW &&
      document.getElementById("d1").innerHTML === pW &&
      document.getElementById("e1").innerHTML === pW) ||
    (document.getElementById("a2").innerHTML === pW &&
      document.getElementById("b2").innerHTML === pW &&
      document.getElementById("c2").innerHTML === pW &&
      document.getElementById("d2").innerHTML === pW &&
      document.getElementById("e2").innerHTML === pW) ||
    (document.getElementById("a3").innerHTML === pW &&
      document.getElementById("b3").innerHTML === pW &&
      document.getElementById("c3").innerHTML === pW &&
      document.getElementById("d3").innerHTML === pW &&
      document.getElementById("e3").innerHTML === pW) ||
    (document.getElementById("a4").innerHTML === pW &&
      document.getElementById("b4").innerHTML === pW &&
      document.getElementById("c4").innerHTML === pW &&
      document.getElementById("d4").innerHTML === pW &&
      document.getElementById("e4").innerHTML === pW) ||
    (document.getElementById("a5").innerHTML === pW &&
      document.getElementById("b5").innerHTML === pW &&
      document.getElementById("c5").innerHTML === pW &&
      document.getElementById("d5").innerHTML === pW &&
      document.getElementById("e5").innerHTML === pW) ||
    (document.getElementById("a6").innerHTML === pW &&
      document.getElementById("b6").innerHTML === pW &&
      document.getElementById("c6").innerHTML === pW &&
      document.getElementById("d6").innerHTML === pW &&
      document.getElementById("e6").innerHTML === pW) ||
    (document.getElementById("a7").innerHTML === pW &&
      document.getElementById("b7").innerHTML === pW &&
      document.getElementById("c7").innerHTML === pW &&
      document.getElementById("d7").innerHTML === pW &&
      document.getElementById("e7").innerHTML === pW) ||
    (document.getElementById("a8").innerHTML === pW &&
      document.getElementById("b8").innerHTML === pW &&
      document.getElementById("c8").innerHTML === pW &&
      document.getElementById("d8").innerHTML === pW &&
      document.getElementById("e8").innerHTML === pW) ||
    (document.getElementById("a9").innerHTML === pW &&
      document.getElementById("b9").innerHTML === pW &&
      document.getElementById("c9").innerHTML === pW &&
      document.getElementById("d9").innerHTML === pW &&
      document.getElementById("e9").innerHTML === pW) ||
    (document.getElementById("b1").innerHTML === pW &&
      document.getElementById("c1").innerHTML === pW &&
      document.getElementById("d1").innerHTML === pW &&
      document.getElementById("e1").innerHTML === pW &&
      document.getElementById("f1").innerHTML === pW) ||
    (document.getElementById("b2").innerHTML === pW &&
      document.getElementById("c2").innerHTML === pW &&
      document.getElementById("d2").innerHTML === pW &&
      document.getElementById("e2").innerHTML === pW &&
      document.getElementById("f2").innerHTML === pW) ||
    (document.getElementById("b3").innerHTML === pW &&
      document.getElementById("c3").innerHTML === pW &&
      document.getElementById("d3").innerHTML === pW &&
      document.getElementById("e3").innerHTML === pW &&
      document.getElementById("f3").innerHTML === pW) ||
    (document.getElementById("b4").innerHTML === pW &&
      document.getElementById("c4").innerHTML === pW &&
      document.getElementById("d4").innerHTML === pW &&
      document.getElementById("e4").innerHTML === pW &&
      document.getElementById("f4").innerHTML === pW) ||
    (document.getElementById("b5").innerHTML === pW &&
      document.getElementById("c5").innerHTML === pW &&
      document.getElementById("d5").innerHTML === pW &&
      document.getElementById("e5").innerHTML === pW &&
      document.getElementById("f5").innerHTML === pW) ||
    (document.getElementById("b6").innerHTML === pW &&
      document.getElementById("c6").innerHTML === pW &&
      document.getElementById("d6").innerHTML === pW &&
      document.getElementById("e6").innerHTML === pW &&
      document.getElementById("f6").innerHTML === pW) ||
    (document.getElementById("b7").innerHTML === pW &&
      document.getElementById("c7").innerHTML === pW &&
      document.getElementById("d7").innerHTML === pW &&
      document.getElementById("e7").innerHTML === pW &&
      document.getElementById("f7").innerHTML === pW) ||
    (document.getElementById("b8").innerHTML === pW &&
      document.getElementById("c8").innerHTML === pW &&
      document.getElementById("d8").innerHTML === pW &&
      document.getElementById("e8").innerHTML === pW &&
      document.getElementById("f8").innerHTML === pW) ||
    (document.getElementById("b9").innerHTML === pW &&
      document.getElementById("c9").innerHTML === pW &&
      document.getElementById("d9").innerHTML === pW &&
      document.getElementById("e9").innerHTML === pW &&
      document.getElementById("f9").innerHTML === pW) ||
    (document.getElementById("c1").innerHTML === pW &&
      document.getElementById("d1").innerHTML === pW &&
      document.getElementById("e1").innerHTML === pW &&
      document.getElementById("f1").innerHTML === pW &&
      document.getElementById("g1").innerHTML === pW) ||
    (document.getElementById("c2").innerHTML === pW &&
      document.getElementById("d2").innerHTML === pW &&
      document.getElementById("e2").innerHTML === pW &&
      document.getElementById("f2").innerHTML === pW &&
      document.getElementById("g2").innerHTML === pW) ||
    (document.getElementById("c3").innerHTML === pW &&
      document.getElementById("d3").innerHTML === pW &&
      document.getElementById("e3").innerHTML === pW &&
      document.getElementById("f3").innerHTML === pW &&
      document.getElementById("g3").innerHTML === pW) ||
    (document.getElementById("c4").innerHTML === pW &&
      document.getElementById("d4").innerHTML === pW &&
      document.getElementById("e4").innerHTML === pW &&
      document.getElementById("f4").innerHTML === pW &&
      document.getElementById("g4").innerHTML === pW) ||
    (document.getElementById("c5").innerHTML === pW &&
      document.getElementById("d5").innerHTML === pW &&
      document.getElementById("e5").innerHTML === pW &&
      document.getElementById("f5").innerHTML === pW &&
      document.getElementById("g5").innerHTML === pW) ||
    (document.getElementById("c6").innerHTML === pW &&
      document.getElementById("d6").innerHTML === pW &&
      document.getElementById("e6").innerHTML === pW &&
      document.getElementById("f6").innerHTML === pW &&
      document.getElementById("g6").innerHTML === pW) ||
    (document.getElementById("c7").innerHTML === pW &&
      document.getElementById("d7").innerHTML === pW &&
      document.getElementById("e7").innerHTML === pW &&
      document.getElementById("f7").innerHTML === pW &&
      document.getElementById("g7").innerHTML === pW) ||
    (document.getElementById("c8").innerHTML === pW &&
      document.getElementById("d8").innerHTML === pW &&
      document.getElementById("e8").innerHTML === pW &&
      document.getElementById("f8").innerHTML === pW &&
      document.getElementById("g8").innerHTML === pW) ||
    (document.getElementById("c9").innerHTML === pW &&
      document.getElementById("d9").innerHTML === pW &&
      document.getElementById("e9").innerHTML === pW &&
      document.getElementById("f9").innerHTML === pW &&
      document.getElementById("g9").innerHTML === pW) ||
    (document.getElementById("d1").innerHTML === pW &&
      document.getElementById("e1").innerHTML === pW &&
      document.getElementById("f1").innerHTML === pW &&
      document.getElementById("g1").innerHTML === pW &&
      document.getElementById("h1").innerHTML === pW) ||
    (document.getElementById("d2").innerHTML === pW &&
      document.getElementById("e2").innerHTML === pW &&
      document.getElementById("f2").innerHTML === pW &&
      document.getElementById("g2").innerHTML === pW &&
      document.getElementById("h2").innerHTML === pW) ||
    (document.getElementById("d3").innerHTML === pW &&
      document.getElementById("e3").innerHTML === pW &&
      document.getElementById("f3").innerHTML === pW &&
      document.getElementById("g3").innerHTML === pW &&
      document.getElementById("h3").innerHTML === pW) ||
    (document.getElementById("d4").innerHTML === pW &&
      document.getElementById("e4").innerHTML === pW &&
      document.getElementById("f4").innerHTML === pW &&
      document.getElementById("g4").innerHTML === pW &&
      document.getElementById("h4").innerHTML === pW) ||
    (document.getElementById("d5").innerHTML === pW &&
      document.getElementById("e5").innerHTML === pW &&
      document.getElementById("f5").innerHTML === pW &&
      document.getElementById("g5").innerHTML === pW &&
      document.getElementById("h5").innerHTML === pW) ||
    (document.getElementById("d6").innerHTML === pW &&
      document.getElementById("e6").innerHTML === pW &&
      document.getElementById("f6").innerHTML === pW &&
      document.getElementById("g6").innerHTML === pW &&
      document.getElementById("h6").innerHTML === pW) ||
    (document.getElementById("d7").innerHTML === pW &&
      document.getElementById("e7").innerHTML === pW &&
      document.getElementById("f7").innerHTML === pW &&
      document.getElementById("g7").innerHTML === pW &&
      document.getElementById("h7").innerHTML === pW) ||
    (document.getElementById("d8").innerHTML === pW &&
      document.getElementById("e8").innerHTML === pW &&
      document.getElementById("f8").innerHTML === pW &&
      document.getElementById("g8").innerHTML === pW &&
      document.getElementById("h8").innerHTML === pW) ||
    (document.getElementById("d9").innerHTML === pW &&
      document.getElementById("e9").innerHTML === pW &&
      document.getElementById("f9").innerHTML === pW &&
      document.getElementById("g9").innerHTML === pW &&
      document.getElementById("h9").innerHTML === pW) ||
    (document.getElementById("e1").innerHTML === pW &&
      document.getElementById("f1").innerHTML === pW &&
      document.getElementById("g1").innerHTML === pW &&
      document.getElementById("h1").innerHTML === pW &&
      document.getElementById("i1").innerHTML === pW) ||
    (document.getElementById("e2").innerHTML === pW &&
      document.getElementById("f2").innerHTML === pW &&
      document.getElementById("g2").innerHTML === pW &&
      document.getElementById("h2").innerHTML === pW &&
      document.getElementById("i2").innerHTML === pW) ||
    (document.getElementById("e3").innerHTML === pW &&
      document.getElementById("f3").innerHTML === pW &&
      document.getElementById("g3").innerHTML === pW &&
      document.getElementById("h3").innerHTML === pW &&
      document.getElementById("i3").innerHTML === pW) ||
    (document.getElementById("e4").innerHTML === pW &&
      document.getElementById("f4").innerHTML === pW &&
      document.getElementById("g4").innerHTML === pW &&
      document.getElementById("h4").innerHTML === pW &&
      document.getElementById("i4").innerHTML === pW) ||
    (document.getElementById("e5").innerHTML === pW &&
      document.getElementById("f5").innerHTML === pW &&
      document.getElementById("g5").innerHTML === pW &&
      document.getElementById("h5").innerHTML === pW &&
      document.getElementById("i5").innerHTML === pW) ||
    (document.getElementById("e6").innerHTML === pW &&
      document.getElementById("f6").innerHTML === pW &&
      document.getElementById("g6").innerHTML === pW &&
      document.getElementById("h6").innerHTML === pW &&
      document.getElementById("i6").innerHTML === pW) ||
    (document.getElementById("e7").innerHTML === pW &&
      document.getElementById("f7").innerHTML === pW &&
      document.getElementById("g7").innerHTML === pW &&
      document.getElementById("h7").innerHTML === pW &&
      document.getElementById("i7").innerHTML === pW) ||
    (document.getElementById("e8").innerHTML === pW &&
      document.getElementById("f8").innerHTML === pW &&
      document.getElementById("g8").innerHTML === pW &&
      document.getElementById("h8").innerHTML === pW &&
      document.getElementById("i8").innerHTML === pW) ||
    (document.getElementById("e9").innerHTML === pW &&
      document.getElementById("f9").innerHTML === pW &&
      document.getElementById("g9").innerHTML === pW &&
      document.getElementById("h9").innerHTML === pW &&
      document.getElementById("i9").innerHTML === pW) ||
    (document.getElementById("a1").innerHTML === pW &&
      document.getElementById("b2").innerHTML === pW &&
      document.getElementById("c3").innerHTML === pW &&
      document.getElementById("d4").innerHTML === pW &&
      document.getElementById("e5").innerHTML === pW) ||
    (document.getElementById("a5").innerHTML === pW &&
      document.getElementById("b4").innerHTML === pW &&
      document.getElementById("c3").innerHTML === pW &&
      document.getElementById("d2").innerHTML === pW &&
      document.getElementById("e1").innerHTML === pW) ||
    (document.getElementById("a2").innerHTML === pW &&
      document.getElementById("b3").innerHTML === pW &&
      document.getElementById("c4").innerHTML === pW &&
      document.getElementById("d5").innerHTML === pW &&
      document.getElementById("e6").innerHTML === pW) ||
    (document.getElementById("a6").innerHTML === pW &&
      document.getElementById("b5").innerHTML === pW &&
      document.getElementById("c4").innerHTML === pW &&
      document.getElementById("d3").innerHTML === pW &&
      document.getElementById("e2").innerHTML === pW) ||
    (document.getElementById("a3").innerHTML === pW &&
      document.getElementById("b4").innerHTML === pW &&
      document.getElementById("c5").innerHTML === pW &&
      document.getElementById("d6").innerHTML === pW &&
      document.getElementById("e7").innerHTML === pW) ||
    (document.getElementById("e3").innerHTML === pW &&
      document.getElementById("d4").innerHTML === pW &&
      document.getElementById("c5").innerHTML === pW &&
      document.getElementById("b6").innerHTML === pW &&
      document.getElementById("a7").innerHTML === pW) ||
    (document.getElementById("a4").innerHTML === pW &&
      document.getElementById("b5").innerHTML === pW &&
      document.getElementById("c6").innerHTML === pW &&
      document.getElementById("d7").innerHTML === pW &&
      document.getElementById("e8").innerHTML === pW) ||
    (document.getElementById("e4").innerHTML === pW &&
      document.getElementById("d5").innerHTML === pW &&
      document.getElementById("c6").innerHTML === pW &&
      document.getElementById("b7").innerHTML === pW &&
      document.getElementById("a8").innerHTML === pW) ||
    (document.getElementById("a5").innerHTML === pW &&
      document.getElementById("b6").innerHTML === pW &&
      document.getElementById("c7").innerHTML === pW &&
      document.getElementById("d8").innerHTML === pW &&
      document.getElementById("e9").innerHTML === pW) ||
    (document.getElementById("e5").innerHTML === pW &&
      document.getElementById("d6").innerHTML === pW &&
      document.getElementById("c7").innerHTML === pW &&
      document.getElementById("b8").innerHTML === pW &&
      document.getElementById("a9").innerHTML === pW) ||
    (document.getElementById("b1").innerHTML === pW &&
      document.getElementById("c2").innerHTML === pW &&
      document.getElementById("d3").innerHTML === pW &&
      document.getElementById("e4").innerHTML === pW &&
      document.getElementById("f5").innerHTML === pW) ||
    (document.getElementById("b5").innerHTML === pW &&
      document.getElementById("c4").innerHTML === pW &&
      document.getElementById("d3").innerHTML === pW &&
      document.getElementById("e2").innerHTML === pW &&
      document.getElementById("f1").innerHTML === pW) ||
    (document.getElementById("b2").innerHTML === pW &&
      document.getElementById("c3").innerHTML === pW &&
      document.getElementById("d4").innerHTML === pW &&
      document.getElementById("e5").innerHTML === pW &&
      document.getElementById("f6").innerHTML === pW) ||
    (document.getElementById("b6").innerHTML === pW &&
      document.getElementById("c5").innerHTML === pW &&
      document.getElementById("d4").innerHTML === pW &&
      document.getElementById("e3").innerHTML === pW &&
      document.getElementById("f2").innerHTML === pW) ||
    (document.getElementById("b3").innerHTML === pW &&
      document.getElementById("c4").innerHTML === pW &&
      document.getElementById("d5").innerHTML === pW &&
      document.getElementById("e6").innerHTML === pW &&
      document.getElementById("f7").innerHTML === pW) ||
    (document.getElementById("b7").innerHTML === pW &&
      document.getElementById("c6").innerHTML === pW &&
      document.getElementById("d5").innerHTML === pW &&
      document.getElementById("e4").innerHTML === pW &&
      document.getElementById("f3").innerHTML === pW) ||
    (document.getElementById("b4").innerHTML === pW &&
      document.getElementById("c5").innerHTML === pW &&
      document.getElementById("d6").innerHTML === pW &&
      document.getElementById("e7").innerHTML === pW &&
      document.getElementById("f8").innerHTML === pW) ||
    (document.getElementById("b8").innerHTML === pW &&
      document.getElementById("c7").innerHTML === pW &&
      document.getElementById("d6").innerHTML === pW &&
      document.getElementById("e5").innerHTML === pW &&
      document.getElementById("f4").innerHTML === pW) ||
    (document.getElementById("b5").innerHTML === pW &&
      document.getElementById("c6").innerHTML === pW &&
      document.getElementById("d7").innerHTML === pW &&
      document.getElementById("e8").innerHTML === pW &&
      document.getElementById("f9").innerHTML === pW) ||
    (document.getElementById("b9").innerHTML === pW &&
      document.getElementById("c8").innerHTML === pW &&
      document.getElementById("d7").innerHTML === pW &&
      document.getElementById("e6").innerHTML === pW &&
      document.getElementById("f5").innerHTML === pW) ||
    (document.getElementById("c1").innerHTML === pW &&
      document.getElementById("d2").innerHTML === pW &&
      document.getElementById("e3").innerHTML === pW &&
      document.getElementById("f4").innerHTML === pW &&
      document.getElementById("g5").innerHTML === pW) ||
    (document.getElementById("c5").innerHTML === pW &&
      document.getElementById("d4").innerHTML === pW &&
      document.getElementById("e3").innerHTML === pW &&
      document.getElementById("f2").innerHTML === pW &&
      document.getElementById("g1").innerHTML === pW) ||
    (document.getElementById("c2").innerHTML === pW &&
      document.getElementById("d3").innerHTML === pW &&
      document.getElementById("e4").innerHTML === pW &&
      document.getElementById("f5").innerHTML === pW &&
      document.getElementById("g6").innerHTML === pW) ||
    (document.getElementById("c6").innerHTML === pW &&
      document.getElementById("d5").innerHTML === pW &&
      document.getElementById("e4").innerHTML === pW &&
      document.getElementById("f3").innerHTML === pW &&
      document.getElementById("g2").innerHTML === pW) ||
    (document.getElementById("c3").innerHTML === pW &&
      document.getElementById("d4").innerHTML === pW &&
      document.getElementById("e5").innerHTML === pW &&
      document.getElementById("f6").innerHTML === pW &&
      document.getElementById("g7").innerHTML === pW) ||
    (document.getElementById("c7").innerHTML === pW &&
      document.getElementById("d6").innerHTML === pW &&
      document.getElementById("e5").innerHTML === pW &&
      document.getElementById("f4").innerHTML === pW &&
      document.getElementById("g3").innerHTML === pW) ||
    (document.getElementById("c4").innerHTML === pW &&
      document.getElementById("d5").innerHTML === pW &&
      document.getElementById("e6").innerHTML === pW &&
      document.getElementById("f7").innerHTML === pW &&
      document.getElementById("g8").innerHTML === pW) ||
    (document.getElementById("c8").innerHTML === pW &&
      document.getElementById("d7").innerHTML === pW &&
      document.getElementById("e6").innerHTML === pW &&
      document.getElementById("f5").innerHTML === pW &&
      document.getElementById("g4").innerHTML === pW) ||
    (document.getElementById("c5").innerHTML === pW &&
      document.getElementById("d6").innerHTML === pW &&
      document.getElementById("e7").innerHTML === pW &&
      document.getElementById("f8").innerHTML === pW &&
      document.getElementById("g9").innerHTML === pW) ||
    (document.getElementById("c9").innerHTML === pW &&
      document.getElementById("d8").innerHTML === pW &&
      document.getElementById("e7").innerHTML === pW &&
      document.getElementById("f6").innerHTML === pW &&
      document.getElementById("g5").innerHTML === pW) ||
    (document.getElementById("d1").innerHTML === pW &&
      document.getElementById("e2").innerHTML === pW &&
      document.getElementById("f3").innerHTML === pW &&
      document.getElementById("g4").innerHTML === pW &&
      document.getElementById("h5").innerHTML === pW) ||
    (document.getElementById("d5").innerHTML === pW &&
      document.getElementById("e4").innerHTML === pW &&
      document.getElementById("f3").innerHTML === pW &&
      document.getElementById("g2").innerHTML === pW &&
      document.getElementById("h1").innerHTML === pW) ||
    (document.getElementById("d2").innerHTML === pW &&
      document.getElementById("e3").innerHTML === pW &&
      document.getElementById("f4").innerHTML === pW &&
      document.getElementById("g5").innerHTML === pW &&
      document.getElementById("h6").innerHTML === pW) ||
    (document.getElementById("d6").innerHTML === pW &&
      document.getElementById("e5").innerHTML === pW &&
      document.getElementById("f4").innerHTML === pW &&
      document.getElementById("g3").innerHTML === pW &&
      document.getElementById("h2").innerHTML === pW) ||
    (document.getElementById("d3").innerHTML === pW &&
      document.getElementById("e4").innerHTML === pW &&
      document.getElementById("f5").innerHTML === pW &&
      document.getElementById("g6").innerHTML === pW &&
      document.getElementById("h7").innerHTML === pW) ||
    (document.getElementById("d7").innerHTML === pW &&
      document.getElementById("e6").innerHTML === pW &&
      document.getElementById("f5").innerHTML === pW &&
      document.getElementById("g4").innerHTML === pW &&
      document.getElementById("h3").innerHTML === pW) ||
    (document.getElementById("d4").innerHTML === pW &&
      document.getElementById("e5").innerHTML === pW &&
      document.getElementById("f6").innerHTML === pW &&
      document.getElementById("g7").innerHTML === pW &&
      document.getElementById("h8").innerHTML === pW) ||
    (document.getElementById("d8").innerHTML === pW &&
      document.getElementById("e7").innerHTML === pW &&
      document.getElementById("f6").innerHTML === pW &&
      document.getElementById("g5").innerHTML === pW &&
      document.getElementById("h4").innerHTML === pW) ||
    (document.getElementById("d5").innerHTML === pW &&
      document.getElementById("e6").innerHTML === pW &&
      document.getElementById("f7").innerHTML === pW &&
      document.getElementById("g8").innerHTML === pW &&
      document.getElementById("h9").innerHTML === pW) ||
    (document.getElementById("d9").innerHTML === pW &&
      document.getElementById("e8").innerHTML === pW &&
      document.getElementById("f7").innerHTML === pW &&
      document.getElementById("g6").innerHTML === pW &&
      document.getElementById("h5").innerHTML === pW) ||
    (document.getElementById("e1").innerHTML === pW &&
      document.getElementById("f2").innerHTML === pW &&
      document.getElementById("g3").innerHTML === pW &&
      document.getElementById("h4").innerHTML === pW &&
      document.getElementById("i5").innerHTML === pW) ||
    (document.getElementById("e5").innerHTML === pW &&
      document.getElementById("f4").innerHTML === pW &&
      document.getElementById("g3").innerHTML === pW &&
      document.getElementById("h2").innerHTML === pW &&
      document.getElementById("i1").innerHTML === pW) ||
    (document.getElementById("e2").innerHTML === pW &&
      document.getElementById("f3").innerHTML === pW &&
      document.getElementById("g4").innerHTML === pW &&
      document.getElementById("h5").innerHTML === pW &&
      document.getElementById("i6").innerHTML === pW) ||
    (document.getElementById("e6").innerHTML === pW &&
      document.getElementById("f5").innerHTML === pW &&
      document.getElementById("g4").innerHTML === pW &&
      document.getElementById("h3").innerHTML === pW &&
      document.getElementById("i2").innerHTML === pW) ||
    (document.getElementById("e3").innerHTML === pW &&
      document.getElementById("f4").innerHTML === pW &&
      document.getElementById("g5").innerHTML === pW &&
      document.getElementById("h6").innerHTML === pW &&
      document.getElementById("i7").innerHTML === pW) ||
    (document.getElementById("e7").innerHTML === pW &&
      document.getElementById("f6").innerHTML === pW &&
      document.getElementById("g5").innerHTML === pW &&
      document.getElementById("h4").innerHTML === pW &&
      document.getElementById("i3").innerHTML === pW) ||
    (document.getElementById("e4").innerHTML === pW &&
      document.getElementById("f5").innerHTML === pW &&
      document.getElementById("g6").innerHTML === pW &&
      document.getElementById("h7").innerHTML === pW &&
      document.getElementById("i8").innerHTML === pW) ||
    (document.getElementById("e8").innerHTML === pW &&
      document.getElementById("f7").innerHTML === pW &&
      document.getElementById("g6").innerHTML === pW &&
      document.getElementById("h5").innerHTML === pW &&
      document.getElementById("i4").innerHTML === pW) ||
    (document.getElementById("e5").innerHTML === pW &&
      document.getElementById("f6").innerHTML === pW &&
      document.getElementById("g7").innerHTML === pW &&
      document.getElementById("h8").innerHTML === pW &&
      document.getElementById("i9").innerHTML === pW) ||
    (document.getElementById("e9").innerHTML === pW &&
      document.getElementById("f8").innerHTML === pW &&
      document.getElementById("g7").innerHTML === pW &&
      document.getElementById("h6").innerHTML === pW &&
      document.getElementById("i5").innerHTML === pW)
  ) {
    document.getElementById("info").innerHTML =
      pW + " has won! Congratulations!";
    playing = false;
    playCount = 0;
    document.getElementById("resetButton").disabled = false;
  }
}

function play(choosenSquare) {
  // executes the playing commands
  if (
    document.getElementById(choosenSquare).innerHTML === "-" &&
    playing === true
  ) {
    if (xTurn === true) {
      document.getElementById(choosenSquare).innerHTML = "X";
      document.getElementById("info").innerHTML = "It's O turn!";
      xTurn = false;
    } else {
      document.getElementById(choosenSquare).innerHTML = "O";
      document.getElementById("info").innerHTML = "It's X turn!";
      xTurn = true;
    }
    playCount++;
    testWin(!xTurn);
    if (playCount === 81) {
      document.getElementById("info").innerHTML = "Draw!";
      document.getElementById("resetButton").disabled = false;
      playCount = 0;
    }
  }
}
var canvas = document.getElementById("jeje");
var c = canvas.getContext("2d");
var x = 340;
var y = 420;

function rob() {
  return setInterval(printLight, 10);
}

function nakresli() {
  var pozadie = c.createLinearGradient(0, 0, 40, 600);
  pozadie.addColorStop(1, "#f5f5f5");
  c.fillStyle = pozadie;
  c.beginPath();
  c.fillRect(0, 0, 900, 700);
  c.fill();
  Stromcek();
  darcek(550, 440, 100, 50, "#BA2551", "#000");
  darcek(630, 450, 70, 100, "#FF0066", "#000");
  darcek(130, 450, 130, 130, "#FFCC00", "#000");
  darcek(460, 450, 120, 60, "#CC00FF", "#000");
}

function Stromcek() {
  for (var i = 0; i < 4; i++) {
    var vyplnstrom = c.createLinearGradient(0, 0, 40, 600);
    vyplnstrom.addColorStop(0, "#073316");
    vyplnstrom.addColorStop(1, "#09AF09");
    c.fillStyle = vyplnstrom;
    c.strokeStyle = "rgba(13,125,13,1)";
    c.lineWidth = 3;
    c.beginPath();
    c.moveTo(400, 500 - 100 * i + (i - 1) * 20);
    c.lineTo(400 - 180 + 30 * i, 500 - 100 * i + (i - 1) * 20);
    c.lineTo(400, 500 - 100 * i + (i - 1) * 20 - 110);
    c.lineTo(400 + 180 - 30 * i, 500 - 100 * i + (i - 1) * 20);
    c.lineTo(400, 500 - 100 * i + (i - 1) * 20);
    c.fill();
    c.stroke();
  }
  c.beginPath();
  c.arc(380, 270, 10, 0, 2 * Math.PI, false);
  c.moveTo(420, 270);
  c.arc(420, 270, 10, 0, 2 * Math.PI, false);
  c.fillStyle = "#fff";
  c.lineWidth = 4;
  c.strokeStyle = "#000000";
  c.stroke();
  c.fill();
  c.beginPath();
  c.rect(380, 320, 20, 10);
  c.arc(390, 330, 10, 0, Math.PI, false);
  c.fillStyle = "#FF3300";
  c.lineWidth = 4;
  c.strokeStyle = "#CC0000";
  c.stroke();
  c.fill();
  gulka(370, 210, 5, 12, "#FF9999", "#FF0000");
  gulka(410, 190, 5, 12, "#FFFF66", "#FF9900");
  gulka(420, 360, 5, 12, "#4D4DFF", "#0000FF");
  gulka(490, 380, 5, 12, "#FFFF66", "#FF9900");
  gulka(360, 380, 5, 12, "#DB4DB8", "#993681");
  gulka(360, 320, 5, 12, "#DB4DB8", "#993681");
  gulka(340, 290, 5, 12, "#4D4DFF", "#0000FF");
  gulka(350, 350, 5, 12, "#FFFF66", "#FF9900");
  gulka(310, 380, 5, 12, "#4D4DFF", "#0000FF");
  gulka(410, 420, 5, 12, "#FF9999", "#FF0000");
  gulka(310, 450, 5, 12, "#FFFF66", "#FF9900");
}

function svetielko(x, y, smg, svg) {
  var vyplnenie = c.createRadialGradient(x, y, smg, x, y, svg);
  var r = Math.floor(500 * Math.random());
  var g = Math.floor(500 * Math.random());
  var b = Math.floor(500 * Math.random());
  var rr = Math.floor(500 * Math.random());
  var gg = Math.floor(500 * Math.random());
  var bb = Math.floor(500 * Math.random());
  vyplnenie.addColorStop(0, "rgba(" + r + "," + g + "," + b + ",1)");
  vyplnenie.addColorStop(1, "rgba(" + rr + "," + gg + "," + bb + ",0)");
  c.beginPath();
  c.fillStyle = vyplnenie;
  c.fillRect(x - svg - 5, y - svg - 5, svg * 2 + 10, svg * 2 + 10);
  c.fill();
}

function darcek(x, y, sir, vys, farba, farstuh) {
  c.beginPath();
  c.rect(x, y, sir, vys);
  c.fillStyle = farba;
  c.strokeStyle = "#000000";
  c.lineWidth = 5;
  c.stroke();
  c.fill();
  c.strokeStyle = farstuh;
  c.lineWidth = 5;
  c.moveTo(x + sir / 4, y + 30);
  c.quadraticCurveTo(x + sir / 3, y + 50, x + sir / 2, y);
  c.moveTo(x + (3 * sir) / 4, y + 30);
  c.quadraticCurveTo(x + (2 * sir) / 3, y + 50, x + sir / 2, y);
  c.moveTo(x + sir / 2, y);
  c.quadraticCurveTo(x + sir / 4, y - 2, x + 10, y - 25);
  c.quadraticCurveTo(x + sir / 4, y - 27, x + sir / 2, y);
  c.quadraticCurveTo(x + (3 * sir) / 4, y - 2, x + sir - 10, y - 25);
  c.quadraticCurveTo(x + (3 * sir) / 4, y - 27, x + sir / 2, y);
  c.lineTo(x + sir / 2, y + vys);
  c.stroke();
}

function gulka(x, y, vnr, vor, fvn, fvo) {
  var vyplnenie = c.createRadialGradient(x, y, vnr, x, y, vor);
  vyplnenie.addColorStop(0, fvn);
  vyplnenie.addColorStop(0.9, fvo);
  vyplnenie.addColorStop(1, "rgba(1,159,98,0)");
  c.beginPath();
  c.fillStyle = vyplnenie;
  c.fillRect(x - vor, y - vor, 2 * vor, 2 * vor);
  c.fill();
}

function printLight() {
  svetielko(400, 120, 5, 10);
  svetielko(400, 110, 3, 7);
  svetielko(400, 105, 2, 6);
  svetielko(400, 100, 2, 3);
  var xje = 450;
  var yje = 200;
  for (var i = 0; i < 10; i++) {
    svetielko(xje - i * i, yje + i * 5, 5, 7);
  }
  xje = 350;
  yje = 250;
  for (var i = 0; i < 12; i++) {
    svetielko(xje + i * i, yje + i * 5, 5, 7);
  }
  xje = 470;
  yje = 350;
  for (var i = 0; i < 12; i++) {
    svetielko(xje - i * i, yje + i * 5, 5, 7);
  }
  xje = 325;
  yje = 410;
  for (var i = 0; i < 12; i++) {
    svetielko(xje + i * i, yje + i * 5, 5, 7);
  }
}

nakresli();
rob();
