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
const nurtureSequence1 = ["plant","water","sunlight","leave","water","water","water","water","water","water","water","water","water","water","water",]

let clickNumber = 0;

var firstWater;
var firstSunlight;
var firstLeave;

$(function(){
  $("button").click(function(){
    let buttonClicked = $(this).attr("class").replace("-button","")
    if (buttonClicked == nurtureSequence1[clickNumber]){
      console.log("true!")
      $(".stage-1").attr("src","IMW-A3-Elements/corpse-flower-"+clickNumber+".svg")
/* Things that appear if "true" */
      /* COLOUR OF THE SOIL */
      /* if WATERED FIRST */
      /* ".water-button" darkens the soil */
      $(".water-button").click(function(){
        firstWater = true;
        $(".soil-ground").css({'background-color': '#201613'});
        $(".small-soil-nurture").css({'background-color': '#160c09'});
      });
      /* ".sunlight-button" AFTER ".water-button" lightens soil by 2 */
      $(".sunlight-button").click(function(){
        firstSunlight = true;
        if (firstWater){
          $(".soil-ground").css({'background-color': '#402c26'});
          $(".small-soil-nurture").css({'background-color': '#361e16'});
        }
      });
      /* ".leave-button" AFTER ".water-button" lightens soil by 1 */
      $(".leave-button").click(function(){
        firstLeave = true;
        if (firstWater){
          $(".soil-ground").css({'background-color': '#30211d'});
          $(".small-soil-nurture").css({'background-color': '#24140f'});
        }
      });
      /* if SUNLIGHT BEFORE LEAVE */
      $(".leave-button").click(function(){
        secondSunlight = true;
        if (firstSunlight){
          $(".soil-ground").css({'background-color': '#503730'});
          $(".small-soil-nurture").css({'background-color': '#48281e'});
        }
      });
      /* if LEAVE BEFORE SUNLIGHT */
      $(".sunlight-button").click(function(){
        if (firstLeave){
          $(".soil-ground").css({'background-color': '#604239'});
          $(".small-soil-nurture").css({'background-color': '#5a3226'});
        }
      });


    } else {
      console.log("false!")
/* Things that appear if "false" */



    }
/* Remove buttons after reaching end of sequence */
/*    if (clickNumber == nurtureSequence1.length){
      $("button").hide();
    }*/
      clickNumber = clickNumber+1;
  })
})
