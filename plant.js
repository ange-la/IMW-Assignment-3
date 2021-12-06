/* jQuery Examples @ https://www.w3schools.com/jquery/jquery_examples.asp */
/* jQuery Hide & Show @ https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_hide_show */
/* CLICKED "NURTURE THE TITAN ARUM" option */
$(document).ready(function(){
  $(".nurture-flower").click(function(){
    $(".nurture-flower").hide();
    $(".remove-stench").hide();
    $(".full-nurture").show();
    $(".stage-1").hide(); /* STAGE 1 HIDDEN HERE */
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
});



/* Simpler solution (Arrays) by Professor Ali Qadeer */
/* OUTCOME 1 */
const nurtureSequence1 = ["plant","water","sunlight","leave","leave","water",
"sunlight","leave","leave","leave","water","leave","water","leave"]

let clickNumber = 0;

var water;
var sunlightOne;
var sunlightTwo;
var leaveOne;
var leaveTwo;
var leaveThree;
var leaveFour;
var leaveFive;

$(function(){
  $("button").click(function(){
    let buttonClicked = $(this).attr("class").replace("-button","")
    if (buttonClicked == nurtureSequence1[clickNumber]){
      console.log("true!")
      $(".stage-1").attr("src","IMW-A3-Elements/corpse-flower-"+clickNumber+".svg")
/* Things appear below here if "true" */

/* Trigger event after 2 buttons clicked in order */
/* @ https://stackoverflow.com/questions/38418062/how-can-i-trigger-an-event-after-two-different-buttons-have-been-clicked */
/* WATER button darkens the soil */
/* @ https://stackoverflow.com/questions/2001366/how-can-i-change-the-text-color-with-jquery */

/* COLOUR OF THE SOIL */
/* ".water-button" darkens the soil */
      $(".water-button").click(function(){
        water = true;
        $(".soil-ground").css({'background-color': '#201613'});
        $(".small-soil-nurture").css({'background-color': '#100b0a'});
      });


      /* Watered before Sunlight */
      $(".sunlight-button").click(function(){
        sunlightOne = true;
        if (water){
          $(".soil-ground").css({'background-color': '#402c26'});
          $(".small-soil-nurture").css({'background-color': '#2f201d'});
        }
        /* Sunlight right after Sunlight once */
        $(".sunlight-button").click(function(){
          sunlightTwo = true;
          if (sunlightOne){
            $(".soil-ground").css({'background-color': '#604239'});
            $(".small-soil-nurture").css({'background-color': '#4f3630'});
          }
        /* Sunlight right after Sunlight twice */
        /* MAX SOIL LIGHTNESS */
        /* EXTREMELY UNDERWATERED */
          $(".sunlight-button").click(function(){
            if (sunlightTwo) {
              $(".soil-ground").css({'background-color': '#80584d'});
              $(".small-soil-nurture").css({'background-color': '#6f4c44'});
            }
          });
        });
      });


      /* Leave right after Water */
      $(".leave-button").click(function(){
        leaveOne = true;
        if (water){
          $(".soil-ground").css({'background-color': '#30211d'});
          $(".small-soil-nurture").css({'background-color': '#1f1614'});
        }
        /* Leave right after Leave once */
        $(".leave-button").click(function(){
          leaveTwo = true;
          if (leaveOne){
            $(".soil-ground").css({'background-color': '#402c26'});
            $(".small-soil-nurture").css({'background-color': '#2f211e'});
          }
        /* Leave right after Leave twice */
          $(".leave-button").click(function(){
            leaveThree = true;
            if (leaveTwo){
              $(".soil-ground").css({'background-color': '#503730'});
              $(".small-soil-nurture").css({'background-color': '#3e2c28'});
            }
        /* Leave right after Leave three times */
            $(".leave-button").click(function(){
              leaveFour = true;
              if (leaveThree){
                $(".soil-ground").css({'background-color': '#604239'});
                $(".small-soil-nurture").css({'background-color': '#4e3732'});
              }
        /* Leave right after Leave four times */
              $(".leave-button").click(function(){
                leaveFive = true;
                if (leaveFour){
                  $(".soil-ground").css({'background-color': '#704d43'});
                  $(".small-soil-nurture").css({'background-color': '#5d423c'});
                }
        /*Leave right after Leave five times */
        /* MAX SOIL LIGHTNESS */
        /* EXTREMELY UNDERWATERED */
                $(".leave-button").click(function(){
                  if (leaveFive){
                    $(".soil-ground").css({'background-color': '#80584d'});
                    $(".small-soil-nurture").css({'background-color': '#6d4d46'});
                  }
        /* Leave right after Sunlight Once */
                  $(".leave-button").click(function(){
                    if (sunlightOne){
                      $(".soil-ground").css({'background-color': 'red'});
                      $(".small-soil-nurture").css({'background-color': '#3f2b27'});
                    }
                  });
                });
              });
            });
          });
        });
      });



    } else {
      console.log("false!")
/* Things appear below here if "false" */
/* Corpse Flower Root Rot if false */
      $(".root-rot-1").attr("src","IMW-A3-Elements/root-rot-"+clickNumber+".svg")
      $(".stage-1").remove();
    }
/* Remove buttons after reaching end of sequence */
    if (clickNumber == nurtureSequence1.length){
      $("button").hide();
    }
      clickNumber = clickNumber+1;
  })
})
