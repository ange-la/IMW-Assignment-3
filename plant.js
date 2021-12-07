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
const nurtureSequence1 = ["plant","water","sunlight","leave","leave","water",
"sunlight","leave","leave","leave","water","leave","water","leave"];
const nurtureSequence2 = ["plant","sunlight","water","leave","leave","leave",
"water","leave","leave","leave","water","sunlight","leave","leave"];

/* FALSE SEQUENCES ROOT ROT*/
const falseSequence1 = ["plant","water","water","water","water","water","water",
"water","water","water","water","water","water","water"];
const falseSequence2 = ["plant","leave","leave","leave","water","leave","water",
"leave","water","leave","water","leave","water","leave"];

/* FALSE SEQUENCES UNDERWATERED */
const falseSequence3 = ["plant","sunlight","leave","water","leave","sunlight","leave",
"sunlight","leave","leave","leave","water","sunlight","leave"]

let clickNumber = 0;

$(function(){
  $("button").click(function(){
    let buttonClicked = $(this).attr("class").replace("-button","")
    if (buttonClicked == nurtureSequence2[clickNumber]){
      console.log("TRUE-1")
      $(".stage-1").attr("src","IMW-A3-Elements/corpse-flower-"+clickNumber+".svg")
    } else if (buttonClicked == nurtureSequence1[clickNumber]){
      console.log("TRUE-2")
      $(".stage-1").attr("src","IMW-A3-Elements/corpse-flower-"+clickNumber+".svg")
/* Things appear below here if "true" */

/* Trigger event after 2 buttons clicked in order */
/* @ https://stackoverflow.com/questions/38418062/how-can-i-trigger-an-event-after-two-different-buttons-have-been-clicked */
/* WATER button darkens the soil */
/* @ https://stackoverflow.com/questions/2001366/how-can-i-change-the-text-color-with-jquery */

/* COLOUR OF THE SOIL */
/* ".water-button" darkens the soil */



/* Things appear below here if "false" */
/* Corpse Flower Root Rot if false */
    } else if (buttonClicked == falseSequence1[clickNumber]){
      console.log("FALSE-1")
      $(".root-rot-1").attr("src","IMW-A3-Elements/root-rot-"+clickNumber+".svg")
      $(".stage-1").remove();
      $(".root-rot-1").show();
    } else if (buttonClicked == falseSequence2[clickNumber]){
      console.log("FALSE-2")
      $(".root-rot-1").attr("src","IMW-A3-Elements/root-rot-"+clickNumber+".svg")
      $(".stage-1").remove();
      $(".root-rot-1").show();
/* Corpse Flower Underwatered if false */
    } else if (buttonClicked == falseSequence3[clickNumber]){
      console.log("FALSE-3")
      $(".underwatered-1").attr("src","IMW-A3-Elements/underwatered-"+clickNumber+".svg")
      $(".stage-1").remove();
      $(".underwatered-1").show();
    }
/* Remove buttons after reaching end of sequence */
    if (clickNumber == nurtureSequence1.length){
      $("button").hide();
      $(".nurture-text").remove();
      $(".true-text").show();
      $(".false-text").remove();
    }
    if (clickNumber == nurtureSequence2.length){
      $("button").hide();
      $(".nurture-text").remove();
      $(".true-text").show();
      $(".false-text").remove();
    }
    if (clickNumber == falseSequence1.length){
      $("button").hide();
      $(".true-text").remove();
      $(".nurture-text").remove();
      $(".false-text").show();
    }
    if (clickNumber == falseSequence2.length){
      $("button").hide();
      $(".true-text").remove();
      $(".nurture-text").remove();
      $(".false-text").show();
    }
    if (clickNumber == falseSequence3.length){
      $("button").hide();
      $(".nurture-text").remove();
      $(".true-text").remove();
      $(".underwatered-text").show();
    }
      clickNumber = clickNumber+1;
  })
})
