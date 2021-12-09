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
/* FIRST BUTTON = "PLANT SEED" then shows the other buttons */
  $(".plant-button").click(function(){
    $(".plant-button").hide();
    $(".water-button").show();
    $(".sunlight-button").show();
    $(".leaveSunlight-button").hide();
    $(".moreSunlight-button").hide();
    $(".leave-button").show();
    $(".secondLeave-button").hide();
    $(".sunlightLeave-button").hide();
    $(".waterLeave-button").hide();
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


let clickNumber = 0;


var water;
var sunlightOne;
var sunlightTwo;
var leave;


$(function(){
  $("button").click(function(){
    let buttonClicked = $(this).attr("class").replace("-button","")


/* Trigger event after 2 buttons clicked in order */
/* @ https://stackoverflow.com/questions/38418062/how-can-i-trigger-an-event-after-two-different-buttons-have-been-clicked */
/* @ https://stackoverflow.com/questions/2001366/how-can-i-change-the-text-color-with-jquery */
/* addEventListener @ https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener */
/* multiple events with one button for addEventListener @ https://stackoverflow.com/questions/34559238/make-an-onclick-event-react-different-when-click-second-time */
/* COLOUR OF THE SOIL */

/* WATER */
/* OVERWATERED APPEARS with doubleClick */
    document.getElementById("water-button").addEventListener("click",function(){
      water = true;
      $(".soil-ground").css({'background-color': '#201613'});
      $(".small-soil-nurture").css({'background-color': '#100b0a'});
      /* Revive from underwatering */
      $(".stage-1").show(); /* SHOW > revived from Underwatering */
      $(".underwatered-1").hide(); /* HIDE bc Underwatering can still happen */
      /* leave buttons hide/show */
      $(".leave-button").hide();
      $(".waterLeave-button").show();
      $(".sunlightLeave-button").hide();
      /* double click event @ https://api.jquery.com/dblclick/ */
      $(".water-button").dblclick(function(){
        /* leave buttons hide/show */
        $(".leave-button").hide();
        $(".waterLeave-button").show();
        $(".sunlightLeave-button").hide();
        $(".secondLeave-button").hide();
        /* OVERWATERED */
        $(".stage-1").remove(); /* REMOVE bc of root rot */
        $(".underwatered-1").remove(); /* Cannot appear after root rot */
        $(".root-rot-1").show();
      });
    });

/* SUNLIGHT */
/* UNDERWATERED APPEARS with doubleClick */
    document.getElementById("sunlight-button").addEventListener("click",function(){
      sunlightOne = true;
      $(".soil-ground").css({'background-color': '#402c26'});
      $(".small-soil-nurture").css({'background-color': '#30211d'});
      /* leave buttons hide/show */
      $(".leave-button").hide();
      $(".waterLeave-button").hide();
      $(".sunlightLeave-button").show();
      $(".secondLeave-button").hide();
      /* double click event @ https://api.jquery.com/dblclick/ */
      $(".sunlight-button").dblclick(function(){
        if (sunlightOne){
          $(".soil-ground").css({'background-color': '#604239'});
          $(".small-soil-nurture").css({'background-color': '#503730'});
          /* leave buttons hide/show */
          $(".leave-button").hide();
          $(".waterLeave-button").hide();
          $(".sunlightLeave-button").show();
          /* UNDERWATERED */
          $(".stage-1").hide(); /* HIDE to bring it back when watered again */
          $(".underwatered-1").show();
          $(".root-rot-1").hide(); /* HIDE bc root rot can still happen */
        }
      });
    });
/* leaveSUNLIGHT */
    document.getElementById("leaveSunlight-button").addEventListener("click",function(){
      if (leaveSunlight){
        $(".soil-ground").css({'background-color': '#604239'});
        $(".small-soil-nurture").css({'background-color': '#503730'});
      }
    });


/* LEAVE */
    document.getElementById("leave-button").addEventListener("click",function(){
      leave = true;
      /* if LEAVE is first second button clicked */
      $(".soil-ground").css({'background-color': '#402c26'});
      $(".small-soil-nurture").css({'background-color': '#30211d'});
      /* moreSunlight hide / show */
      $(".sunlight-button").hide();
      $(".moreSunlight-button").show();
      $(".leaveSunlight-button").hide();
      /* LEAVE buttons hide / show */
      $(".leave-button").hide();
      $(".sunlightLeave-button").hide();
      $(".secondLeave-button").show();
      $(".waterLeave-button").hide();
    });
/* secondLEAVE */
/* LEAVE TWICE */
    document.getElementById("secondLeave-button").addEventListener("click",function(){
      if (moreSunlight){
        $(".soil-ground").css({'background-color': '#503730'});
        $(".small-soil-nurture").css({'background-color': '#402c26'});
      }
    });
/* waterLEAVE */
    document.getElementById("waterLeave-button").addEventListener("click",function(){
      waterLeave = true;
      $(".soil-ground").css({'background-color': '#30211d'});
      $(".small-soil-nurture").css({'background-color': '#201613'});
      /* waterLEAVE TWICE */
      /* double click event @ https://api.jquery.com/dblclick/ */
      $(".waterLeave-button").dblclick(function(){
        if (waterLeave){
          $(".soil-ground").css({'background-color': '#402c26'});
          $(".small-soil-nurture").css({'background-color': '#30211d'});
        }
      });
    });
/* sunlightLEAVE */
    document.getElementById("sunlightLeave-button").addEventListener("click",function(){
      sunlightLeave = true;
      $(".soil-ground").css({'background-color': '#503730'});
      $(".small-soil-nurture").css({'background-color': '#402c26'});
      /* sunlightLEAVE TWICE */
      /* double click event @ https://api.jquery.com/dblclick/ */
        if (sunlightLeave){
          leaveSunlight = true;
          $(".soil-ground").css({'background-color': '#604239'});
          $(".small-soil-nurture").css({'background-color': '#503730'});
          /* moreSunlight hide / show */
          $(".sunlight-button").hide();
          $(".moreSunlight-button").hide();
          $(".leaveSunlight-button").show();
        }
    });






/* Remove buttons after reaching end of sequence */
    if (clickNumber == 13){
      $("button").hide();
      $(".sunlightLeave-button").hide();
      $(".waterLeave-button").hide();
    }
    clickNumber = clickNumber+1;
  })
})
