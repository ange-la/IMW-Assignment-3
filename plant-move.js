/* jQuery Examples @ https://www.w3schools.com/jquery/jquery_examples.asp */
/* jQuery Hide & Show @ https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_hide_show */
/* CLICKED "NURTURE THE TITAN ARUM" option */
$(document).ready(function(){
  $(".nurture-flower").click(function(){
    $(".nurture-flower").hide();
    $(".remove-stench").hide();
    $(".full-nurture").show();
  });
});

/* CLICKED "REMOVE THE STENCH" option */
$(document).ready(function(){
  $(".remove-stench").click(function(){
    $(".nurture-flower").hide();
    $(".remove-stench").hide();
    $(".full-remove").show();
  });
});

/* FIRST BUTTON = "PLANT SEED" then shows the other buttons */
$(document).ready(function(){
  $(".plant-button").click(function(){
    $(".plant-button").hide();
    $(".water-button").show();
    $(".sunlight-button").show();
    $(".leave-button-1").show();
    $(".small-soil-nurture").show();
  });
});




/* STAGE 1 appears after WATER + SUNLIGHT + LEAVE all clicked in order */
/* Trigger event after 2 buttons clicked in order */
/* @ https://stackoverflow.com/questions/38418062/how-can-i-trigger-an-event-after-two-different-buttons-have-been-clicked */
$(function(){
  var firstClicked;
  var secondClicked;
  var thirdClicked;
/* WATER button darkens the soil */
/* @ https://stackoverflow.com/questions/2001366/how-can-i-change-the-text-color-with-jquery */
$(".water-button").click(function() {
  firstClicked = true;
  $(".soil-ground").css({'background-color': '#201613'});
  $(".small-soil-nurture").css({'background-color': '#160c09'});
  if(fifthClicked) {
/* STAGE 4 */
    /* remove(); to prevent stage 3 from showing again after */
    sixthClicked = true;
    $(".stage-3").remove();
    $(".stage-4").show();
  }
});
/* STAGE 1 */
$(".sunlight-button").click(function() {
  if(firstClicked) {
    secondClicked = true;
    $(".stage-1").show();
    $(".soil-ground").css({'background-color': '#2d231f'});
    $(".small-soil-nurture").css({'background-color': '#1e1715'});
  }
  if (thirdClicked){
    $(".soil-ground").css({'background-color': '#5a453f'});
    $(".small-soil-nurture").css({'background-color': '#4b3a34'});
  }
});
/* STAGE 2 */
$(".leave-button-1").click(function() {
  if(secondClicked) {
    thirdClicked = true;
    /* remove(); to prevent stage 1 from showing again after */
    /* @ https://api.jquery.com/remove/ */
    $(".stage-1").remove();
    $(".stage-2").show();
    $(".soil-ground").css({'background-color': '#3c2e2a'});
    $(".small-soil-nurture").css({'background-color': '#2a201d'});
    /* SWITCH "LEAVE" BUTTON WITH NEW */
    $(".leave-button-1").remove();
    $(".leave-button-2").show();
  }
});
/* IN BETWEEN STAGE 2 AND 3 */
$(".leave-button-2").click(function() {
  if (thirdClicked) {
    fourthClicked = true;
    $(".soil-ground").css({'background-color': '#4b3934'});
    $(".small-soil-nurture").css({'background-color': '#2d231f'});
    /* SWITCH "LEAVE" BUTTON WITH NEW */
    $(".leave-button-2").remove();
    $(".leave-button-3").show();
  }
});
/* STAGE 3 */
$(".leave-button-3").click(function() {
  if (fourthClicked) {
    fifthClicked = true;
    /* remove(); to prevent stage 2 from showing again after */
    $(".stage-2").remove();
    $(".stage-3").show();
    $(".soil-ground").css({'background-color': '#5a453f'});
    $(".small-soil-nurture").css({'background-color': '#3c2f2a'});
    /* SWITCH "LEAVE" BUTTON WITH NEW */
    $(".leave-button-3").remove();
    $(".leave-button-4").show();
  }
});
/* IN BETWEEN STAGE 4 AND 5 */
$(".leave-button-4").click(function() {
  if (sixthClicked) {
    seventhClicked = true;
    $(".soil-ground").css({'background-color': '#30211d'});
    $(".small-soil-nurture").css({'background-color': '#160c09'});
    /* SWITCH "LEAVE" BUTTON WITH NEW */
    $(".leave-button-4").remove();
    $(".leave-button-5").show();
  }
});
/* STAGE 5 */
$(".leave-button-5").click(function() {
  if (seventhClicked) {
    eighthClicked = true;
    $(".soil-ground").css({'background-color': '#402c26'});
    $(".small-soil-nurture").css({'background-color': '#24140f'});
    /* remove(); to prevent stage 2 from showing again after */
    $(".stage-4").remove();
    $(".stage-5").show();
  }
});
});
