/* jQuery Examples @ https://www.w3schools.com/jquery/jquery_examples.asp */
/* jQuery Hide & Show @ https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_hide_show */
/* CLICKED "NURTURE THE TITAN ARUM" option */
$(document).ready(function(){
  $(".nurture-flower").click(function(){
    $(".nurture-flower").hide();
    $(".remove-stench").hide();
    $(".full-nurture").show();
    $(".stage-1").hide(); /* STAGE 1 HIDDEN HERE */
    $(".root-rot-1").hide(); /* FALSE Root Rot hidden here */
    $(".underwatered-1").hide(); /* FALSE Underwatered hidden here */
  });
/* CLICKED "REMOVE THE STENCH" option */
  $(".remove-stench").click(function(){
    $(".nurture-flower").hide();
    $(".remove-stench").hide();
    $(".full-remove").show();
  });
/* FIRST BUTTON = "PLANT SEED" then shows the other buttons */
  $(".plant-button").click(function(){
    $(".plant-button").hide();
    $(".water-button").show();
    $(".sunlight-button").show();
    $(".leave-button").show();
    $(".small-soil-nurture").show();
  });
/* STAGE 1 APPEARS HERE */
  $(".water-button").click(function(){
    $(".stage-1").show();
  });
  $(".sunlight-button").click(function(){
    $(".stage-1").show();
  });
  $(".leave-button").click(function(){
    $(".stage-1").show();
  });
});



/* Simpler solution (Arrays) by Professor Ali Qadeer */
/* TRUE SEQUENCES */
const nurtureSequence1 = ["plant","water","sunlight","leave","leave","leave",
"water","sunlight","leave","leave","leave","water","sunlight","leave"];

/*
const nurtureSequence2 = ["plant","sunlight","water","leave","leave","leave",
"sunlight","water","leave","leave","leave","sunlight","water"]; */


let clickNumber = 0;


/*Change colour of soil depending what button was clicked first*/
var water;
var sunlight;
var sunlightOne;
var sunlightTwo;
var sunlightThree;
var leave;
var leaveOne;
var leaveTwo;
var leaveThree;
var leaveFour;


$(function(){
  $("button").click(function(){
    let buttonClicked = $(this).attr("class").replace("-button","")


/* COLOUR OF THE SOIL */
/* Trigger event after 2 buttons clicked in order */
/* @ https://stackoverflow.com/questions/38418062/how-can-i-trigger-an-event-after-two-different-buttons-have-been-clicked */
/* @ https://stackoverflow.com/questions/2001366/how-can-i-change-the-text-color-with-jquery */

/* WATER */
/* Dark soil when watered once */
/* FIRST WATER > before every other button is clicked */
    $(".water-button").click(function(){
      $(".soil-ground").css({'background-color': '#201613'});
      $(".small-soil-nurture").css({'background-color': '#100b0a'});
      water = true;
      if (sunlightOne){
        $(".soil-ground").css({'background-color': '#201613'});
        $(".small-soil-nurture").css({'background-color': '#100b0a'});
      }
    });

/* SUNLIGHT */
/* Soil lightens by 2 with Sunlight */
/* FIRST SUNLIGHT > before every other button is clicked */
    $(".sunlight-button").click(function(){
      sunlight = true;
      $(".soil-ground").css({'background-color': '#30211d'});
      $(".small-soil-nurture").css({'background-color': '#1f1614'});
/* Lighten soil if right after first water */
  //    $(".sunlight-button").unbind();
      $(".sunlight-button").click(function(){
        if (water || sunlight || leave){
          sunlightOne = true;
          $(".soil-ground").css({'background-color': '#402c26'});
          $(".small-soil-nurture").css({'background-color': '#2f201d'});
        }
  //      $(".sunlight-button").unbind();
        $(".sunlight-button").click(function(){
          if (sunlightOne || leaveOne){
          sunlightTwo = true;
            $(".soil-ground").css({'background-color': '#604239'});
            $(".small-soil-nurture").css({'background-color': '#4e3631'});
          }
/* MAX SOIL LIGHTNESS */
  //        $(".sunlight-button").unbind();
          $(".sunlight-button").click(function(){
            if (sunlightTwo || leaveTwo || leaveFour){
              sunlightThree = true;
              $(".soil-ground").css({'background-color': '#80584d'});
              $(".small-soil-nurture").css({'background-color': '#6e4c45'});
            }
          });
        });
      });
    });


/* LEAVE */
/* Soil lightens by 1 with Sunlight */
/* FIRST LEAVE > before every other button is clicked */
    $(".leave-button").click(function(){
      firstLeave = true;
      $(".soil-ground").css({'background-color': '#30211d'});
      $(".small-soil-nurture").css({'background-color': '#1f1614'});
/* Lighten soil if right after first water */
//      $(".leave-button").unbind();
      $(".leave-button").click(function(){
        if (water){
          leave = true;
          $(".soil-ground").css({'background-color': '#30211d'});
          $(".small-soil-nurture").css({'background-color': '#1f1614'});
        }
/* Leave right after Sunlight clicked Once */
  //      $(".leave-button").unbind();
        $(".leave-button").click(function(){
          if (sunlight){
            leaveOne = true;
            $(".soil-ground").css({'background-color': '#402c26'});
            $(".small-soil-nurture").css({'background-color': '#2f211e'});
          }
//          $(".leave-button").unbind();
          $(".leave-button").click(function(){
            if (sunlightOne){
              leaveTwo = true;
              $(".soil-ground").css({'background-color': '#503730'});
              $(".small-soil-nurture").css({'background-color': '#402c26'});
            }
  //          $(".leave-button").unbind();
            $(".leave-button").click(function(){
              if (sunlightTwo){
                leaveThree = true;
                $(".soil-ground").css({'background-color': '#704d43'});
                $(".small-soil-nurture").css({'background-color': '#5e413b'});
              }
/* Soil colour is the same from sunlightThree because of MAX SOIL LIGHTNESS */
    //          $(".leave-button").unbind();
              $(".leave-button").click(function(){
                if (sunlightThree){
                  leaveFour = true;
                  $(".soil-ground").css({'background-color': '#80584d'});
                  $(".small-soil-nurture").css({'background-color': '#6e4c45'});
                }
              });
            });
          });
        });
      });
    });


/* Things appear below here if "true" */
/* SEQUENCE 1 */
    if (buttonClicked == nurtureSequence1[clickNumber]){
      console.log("TRUE-1")
      $(".stage-1").attr("src","IMW-A3-Elements/corpse-flower-"+clickNumber+".svg")
/* SEQUENCE 2 */
    } /*else if (buttonClicked == nurtureSequence2[clickNumber]){
      console.log("TRUE-2")
      $(".stage-1").attr("src","IMW-A3-Elements/corpse-flower-"+clickNumber+".svg")
    } */

/* Things appear below here if "false" */
/* Corpse Flower Root Rot if false */


/* Remove buttons after reaching end of sequence */
/* Change description after reaching end of sequence based on outcome */
    if (clickNumber == nurtureSequence1.length){
      $("button").hide();
      $(".nurture-text").remove();
      $(".true-text").show();
      $(".false-text").remove();
    } /*
    if (clickNumber == nurtureSequence2.length){
      $("button").hide();
      $(".nurture-text").remove();
      $(".true-text").show();
      $(".false-text").remove();
    } */

      clickNumber = clickNumber+1;
  })
})
