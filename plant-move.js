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
    $(".water-button-1").show();
    $(".sunlight-button-1").show();
    $(".leave-button-1").show();
    $(".small-soil-nurture").show();
  });
});



/* ORGANIZE THIS DIFFERENTLY by firstClicked1, firstClicked2, etc */


/* STAGE 1 appears after WATER + SUNLIGHT + LEAVE all clicked in order */
/* Trigger event after 2 buttons clicked in order */
/* @ https://stackoverflow.com/questions/38418062/how-can-i-trigger-an-event-after-two-different-buttons-have-been-clicked */
$(function(){
  var firstClicked;
  var secondClicked;
  var thirdClicked;
/* WATER button darkens the soil */
/* @ https://stackoverflow.com/questions/2001366/how-can-i-change-the-text-color-with-jquery */
$(".water-button-1").click(function() {
  firstClicked = true;
  $(".soil-ground").css({'background-color': '#201613'});
  $(".small-soil-nurture").css({'background-color': '#160c09'});
  if(fourthClicked) {
/* STAGE 4 */
    fifthClicked = true;
    /* remove(); to prevent stage 3 from showing again after */
    $(".stage-3").remove();
    $(".stage-4").show();
  }
/* STAGE 8 */
  if(ninthClicked) {
    tenthClicked = true;
    /* remove(); to prevent stage 7 from showing again after */
    $(".leave-button-6").remove();
    $(".leave-button-7").show();
  }
});
/* STAGE 1 */
$(".sunlight-button-1").click(function() {
  if(firstClicked) {
    secondClicked = true;
    $(".stage-1").show();
    $(".soil-ground").css({'background-color': '#2d231f'});
    $(".small-soil-nurture").css({'background-color': '#1e1715'});
  }
  if (thirdClicked) {
    $(".soil-ground").css({'background-color': '#5a453f'});
    $(".small-soil-nurture").css({'background-color': '#4b3a34'});
    /* SWITCH SUNLIGHT" BUTTON WITH NEW */
    $(".sunlight-button-1").remove();
    $(".sunlight-button-2").show();
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
/* STAGE 3 */
$(".leave-button-2").click(function() {
  if (thirdClicked) {
    fourthClicked = true;
    $(".soil-ground").css({'background-color': '#4b3934'});
    $(".small-soil-nurture").css({'background-color': '#2d231f'});
    /* remove(); to prevent stage 2 from showing again after */
    $(".stage-2").remove();
    $(".stage-3").show();
    /* SWITCH "LEAVE" BUTTON WITH NEW */
    $(".leave-button-2").remove();
    $(".leave-button-3").show();
  }
});
/* IN BETWEEN STAGE 4 AND 5 */
$(".leave-button-3").click(function() {
  if (fifthClicked) {
    sixthClicked = true;
    $(".soil-ground").css({'background-color': '#30211d'});
    $(".small-soil-nurture").css({'background-color': '#24140f'});
    /* SWITCH "LEAVE" BUTTON WITH NEW */
    $(".leave-button-3").remove();
    $(".leave-button-4").show();
  }
});
/* STAGE 5 */
$(".leave-button-4").click(function() {
  if (sixthClicked) {
    seventhClicked = true;
    $(".soil-ground").css({'background-color': '#402c26'});
    $(".small-soil-nurture").css({'background-color': '#361e17'});
    /* SWITCH "LEAVE" BUTTON WITH NEW */
    $(".leave-button-4").remove();
    $(".leave-button-5").show();
    /* remove(); to prevent stage 4 from showing again after */
    $(".stage-4").remove();
    $(".stage-5").show();
  }
});
/* IN BETWEEN STAGES 5 AND 6 */
$(".sunlight-button-2").click(function() {
  if (seventhClicked) {
    eighthClicked = true;
    $(".soil-ground").css({'background-color': '#30211d'});
    $(".small-soil-nurture").css({'background-color': '#24140f'});
  }
});
/* STAGE 6 */
$(".leave-button-5").click(function() {
  if (eighthClicked) {
    ninthClicked = true;
    $(".soil-ground").css({'background-color': '#402c26'});
    $(".small-soil-nurture").css({'background-color': '#361e17'});
    /* SWITCH "LEAVE" BUTTON WITH NEW */
    $(".leave-button-5").remove();
    $(".leave-button-6").show();
    /* remove(); to prevent stage 5 from showing again after */
    $(".stage-5").remove();
    $(".stage-6").show();
  }
});
/* STAGE 7 */
$(".leave-button-6").click(function() {
  if (eighthClicked) {
    ninthClicked = true;
    $(".soil-ground").css({'background-color': '#604239'});
    $(".small-soil-nurture").css({'background-color': '#593226'});
    /* SWITCH "LEAVE" BUTTON WITH NEW */
    $(".leave-button-6").remove();
    $(".leave-button-7").show();
    /* remove(); to prevent stage 6 from showing again after */
    $(".stage-6").remove();
    $(".stage-7").show();
  }
});
/* STAGE 9 */
$(".leave-button-7").click(function() {
  if(tenthClicked) {
    eleventhClicked = true;
    $(".soil-ground").css({'background-color': '#402c26'});
    $(".small-soil-nurture").css({'background-color': '#361e16'});
    /* SWITCH "LEAVE" BUTTON WITH NEW */
    $(".leave-button-7").remove();
    $(".leave-button-8").show();
    /* remove(); to prevent stage 8 from showing again after */
    $(".stage-8").remove();
    $(".stage-9").show();
  }
});
/* STAGE 10 */
$(".leave-button-8").click(function() {
  if(eleventhClicked) {
    twelevthClicked = true;
    $(".soil-ground").css({'background-color': '#604239'});
    $(".small-soil-nurture").css({'background-color': '#5b3225'});
    /* remove(); to prevent stage 9 from showing again after */
    $(".stage-9").remove();
    $(".stage-10").show();
  }
});
/* STAGE 11 */
$(".water-button-2").click(function() {
  if(twelevthClicked) {
    thirteenthClicked = true;
    $(".soil-ground").css({'background-color': '#201613'});
    $(".small-soil-nurture").css({'background-color': '#160c09'});
    /* remove(); to prevent stage 9 from showing again after */
    $(".stage-10").remove();
    $(".stage-11").show();
  }
});
});
