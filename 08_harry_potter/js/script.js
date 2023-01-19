function turnHarryLeft () {
    document
     .getElementById("harry")
     .src = "harry_heads_left.png"
     document
        .getElementById("btnTurn")
        .onclick = function() {turnHarryRight()}
}

function turnHarryRight () {
    document
     .getElementById("harry")
     .src = "harry_heads_right.png"
     document
        .getElementById("btnTurn")
        .onclick = function() {turnHarryLeft()}
}