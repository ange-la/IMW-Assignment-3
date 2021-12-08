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
    $(".insecticide-button").show();
    $(".prune-button").show();
    $(".leave-button-2").show();
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

const nurtureSequence2 = ["plant","sunlight","water","leave","leave","leave",
"sunlight","water","leave","leave","leave","sunlight","leave"];

const rottedSequence = ["plant","water","water","water","water","water","water"
,"water","water","water","water","water","water","water"];

let clickNumber = 0;


/*Change colour of soil depending what button was clicked first*/
var water = true;
var sunlight = true;
var leave = true;


$(function(){
  $("button").click(function(){
    let buttonClicked = $(this).attr("class").replace("-button","")


/* COLOUR OF THE SOIL */
/* Trigger event after 2 buttons clicked in order */
/* @ https://stackoverflow.com/questions/38418062/how-can-i-trigger-an-event-after-two-different-buttons-have-been-clicked */
/* @ https://stackoverflow.com/questions/2001366/how-can-i-change-the-text-color-with-jquery */

/* addEventListener @ https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener */
/* multiple events with one button for addEventListener @ https://stackoverflow.com/questions/34559238/make-an-onclick-event-react-different-when-click-second-time */
/* WATER */
/* Dark soil when watered once */
    document.getElementById("water-button").addEventListener("click",function(){
      if (water) {
        $(".soil-ground").css({'background-color': '#201613'});
        $(".small-soil-nurture").css({'background-color': '#100b0a'});
        water = false;
      }
    });

/* SUNLIGHT */
/* Soil lightens by 2 */
    document.getElementById("sunlight-button").addEventListener("click",function(){
      if (sunlight){
        $(".soil-ground").css({'background-color': '#402c26'});
        $(".small-soil-nurture").css({'background-color': '#30211d'});
        sunlight = false;
      } else {
        $(".soil-ground").css({'background-color': '#604239'});
        $(".small-soil-nurture").css({'background-color': '#402c26'});
        sunlight = true;
      }
    });

/* LEAVE */
/* Soil lightens by 1 */
    document.getElementById("leave-button").addEventListener("click",function(){
      if (leave){
        $(".soil-ground").css({'background-color': '#30211d'});
        $(".small-soil-nurture").css({'background-color': '#1f1614'});
        leave = false;
      } else {
        $(".soil-ground").css({'background-color': '#402c26'});
        $(".small-soil-nurture").css({'background-color': '#2f211e'});
        leave = true;
      }
    });



/* Things appear below here if "true" */
/* SEQUENCE 1 */
    if (buttonClicked == nurtureSequence1[clickNumber]){
      console.log("TRUE-1")
      $(".stage-1").attr("src","IMW-A3-Elements/corpse-flower-"+clickNumber+".svg")
/* SEQUENCE 2 */
    } else if (buttonClicked == nurtureSequence2[clickNumber]){
      console.log("TRUE-2")
      $(".stage-1").attr("src","IMW-A3-Elements/corpse-flower-"+clickNumber+".svg")
/* Things appear below here if "false" */
    } else if (buttonClicked == rottedSequence[clickNumber]){
      console.log("OVERWATERED!")
      $(".root-rot-1").attr("src","IMW-A3-Elements/root-rot-"+clickNumber+".svg")
    } else {
/* Corpse Flower Underwatered / Neglected */
      console.log("FALSE!")
      $(".underwatered-1").attr("src","IMW-A3-Elements/underwatered-"+clickNumber+".svg")
      $(".nurture-text").remove();
      $(".true-text").remove();
    }

/* DOUBLE CLICK water twice in a row */
/* Corpse Flower Root Rot if false */
    document.getElementById("water-button").addEventListener("click",function(){
/* double click event @ https://api.jquery.com/dblclick/ */
      $(".water-button").dblclick(function(){
        $(".soil-ground").css({'background-color': '#100b0a'});
        $(".small-soil-nurture").css({'background-color': '#000000'});
        water = true;
        $(".stage-1").remove();
        $(".nurture-text").remove();
        $(".root-rot-1").attr("src","IMW-A3-Elements/root-rot-"+clickNumber+".svg")
        $(".root-rot-1").show();
        $(".false-text").show();
        $(".sunlight-text").remove();
        $(".true-text").remove();
      });
    });
/* ^^^^ FALSE TEXT IS NOT SHOWING UP AT THE END */




/* DOUBLE CLICK sunlight twice in a row */
/* Corpse Flower Underwatered */
    document.getElementById("sunlight-button").addEventListener("click",function(){
/* double click event @ https://api.jquery.com/dblclick/ */
      $(".sunlight-button").dblclick(function(){
        $(".soil-ground").css({'background-color': '#604239'});
        $(".small-soil-nurture").css({'background-color': '#402c26'});
        sunlight = true;
        $(".stage-1").remove();
        $(".nurture-text").remove();
        $(".underwatered-1").attr("src","IMW-A3-Elements/underwatered-"+clickNumber+".svg")
        $(".underwatered-1").show();
        $(".root-rot-1").remove();
        $(".sunlight-text").show();
      });
    });









/* Remove buttons after reaching end of sequence */
/* Change description after reaching end of sequence based on outcome */
    if (clickNumber == nurtureSequence1.length){
      $("button").hide();
      $(".nurture-text").remove();
      $(".true-text").show();
      $(".false-text").hide();
    }
    if (clickNumber == nurtureSequence2.length){
      $("button").hide();
      $(".nurture-text").remove();
      $(".true-text").show();
      $(".false-text").hide(); /* CHECK THIS */
    }
    if (clickNumber == rottedSequence.length){
      $("button").hide();
      $(".nurture-text").remove();
      $(".true-text").remove();
      $(".false-text").show();
    }

      clickNumber = clickNumber+1;
  })
})





/* WHAT IS THAT STENCH? */
/*
$(function(){
  $("button").click(function(){
    let buttonClicked = $(this).attr("class").replace("-button","")

    if (buttonclicked == sequence1[clickNumber]){
      console.log("")
    }
    if (clickNumber == sequence1.length){

    }
    clickNumber = clickNumber+1
  });
}); */
