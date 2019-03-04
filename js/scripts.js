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

Player.prototype.rollDice = function(){
  if(this.roll === 1){
    this.roundscore = 0;
    alert("Your Turn is Over " + this.playerName + ", you rolled a 1 therefore get nothing in this round!!" );
  }else{
    this.roundscore += this.roll;
  }
}

Player.prototype.getWinner = function(){
  if(this.totalscore >= 100){
    alert(this.playerName + " Won this Round!BRAVOOOOOO!!!");
  }
}

$(document).ready(function(){
  $("button#startTheGame").click(function(event){
    player1 = new Player();
    player2 = new Player();

    var player1Name = $(".nomUno").val();
    $("#nomUno").text(player1Name);

    var player2Name = $(".nomDeux").val();
    $("#nomDeux").text(player2Name);

    player1.playerName = player1Name;
    player2.playerName = player2Name;
  });
