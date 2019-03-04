$(document).ready(function() {
  $("#players").submit(function(event){
    event.preventDefault();
    var play1=$("#player1").val();
    var play2=$("#player2").val();
    $(".jumbotron").hide();
    $("#old").slideDown(2000);
    $("#old").show();

  $("#nameOne").text(play1)
  $("#nameTwo").text(play2)
  })
})

var player1="";
var player2="";

var throwdice = function () {
  return Math.floor(6*Math.random())+1;
}
