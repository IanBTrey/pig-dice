$(document).ready(function() {
  $("#players").submit(function(event){
    event.preventDefault();
    var play1=$("#player1").val();
    var play2=$("#player2").val();
    $(".jumbotron").hide();
    $("#old").slideDown(2000);
    $("#old").show();
