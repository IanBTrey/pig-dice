$(document).ready(function() {
  $("#players").submit(function(event){
    event.preventDefault();
    var play1=$("#player1").val();
    var play2=$("#player2").val();
    $(".jumbotron").hide();
    $("#old").slideDown(2000);
    $("#old").show();

  $("#nomUno").text(play1)
  $("#nomDeux").text(play2)
  })
})

var player1="";
var player2="";

var throwdice = function () {
  return Math.floor(6*Math.random())+1;
}

function Player(turn){
  this.roll = 0;
  this.roundscore = 0;
  this.totalscore = 0;
  this.turn = turn;
  this.playerName;
}

player.prototype.holdButton = function(){
  this.totalscore += this.roundscore;
  this.roundscore = 0;
  alert(this.playerName + ", Your Turn is Over,nice move playing safe, Your rival gets the go!");
}
