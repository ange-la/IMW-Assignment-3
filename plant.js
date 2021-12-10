/* jQuery Examples @ https://www.w3schools.com/jquery/jquery_examples.asp */
/* jQuery Hide & Show @ https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_hide_show */
/* CLICKED "NURTURE THE TITAN ARUM" option */
$(document).ready(function(){
  $(".nurture-flower").click(function(){
    $(".nurture-flower").hide();
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
    $(".leave-button").show();
    $(".small-soil-nurture").show();
  });
/* STAGE 1 APPEARS HERE */
/* STAGE 1 will not show up if "leave" is pressed before "water" and "sunlight" */
  $(".water-button").click(function(){
    $(".stage-1").show();
  });
  $(".sunlight-button").click(function(){
    $(".stage-1").show();
  });

/*  $(".leave-button").click(function(){
    $(".stage-1").hide();
  }); */
});



/* Simpler solution (Arrays) by Professor Ali Qadeer */
/* TRUE SEQUENCES */
const nurtureSequence1 = ["plant","water","sunlight","leave","leave","leave",
"water","sunlight","leave","leave","leave","water","sunlight","leave"];

const nurtureSequence2 = ["plant","sunlight","water","leave","leave","leave",
"sunlight","water","leave","leave","leave","sunlight","water"];

const nurtureSequence3 = ["plant","leave","sunlight","water","leave","leave",
"leave","sunlight","water","leave","leave","leave","sunlight","water"];

var sunlight;
var water;
var rot;

let clickNumber = 0;

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
      $(".soil-ground").css({'background-color': '#201613'});
      $(".small-soil-nurture").css({'background-color': '#100b0a'});
    });
/* SUNLIGHT */
/* Lighten soil when watered once (same as LEAVE) */
    document.getElementById("sunlight-button").addEventListener("click",function(){
      $(".soil-ground").css({'background-color': '#402c26'});
      $(".small-soil-nurture").css({'background-color': '#30211d'});
    });
/* LEAVE */
/* Lighten soil when watered once (same as SUNLIGHT) */
    document.getElementById("leave-button").addEventListener("click",function(){
      $(".soil-ground").css({'background-color': '#402c26'});
      $(".small-soil-nurture").css({'background-color': '#2f211e'});
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
    } else if (buttonClicked == nurtureSequence3[clickNumber]){
      console.log("TRUE-3")
      $(".stage-1").attr("src","IMW-A3-Elements/corpse-flower-"+clickNumber+".svg")
    } else {
/* Corpse Flower Underwatered / Neglected */
      console.log("FALSE!")
      if (sunlight){
        $(".underwatered-1").attr("src","IMW-A3-Elements/underwatered-"+clickNumber+".svg")
      }
      else if (water){
        $(".root-rot-1").attr("src","IMW-A3-Elements/underwatered-"+clickNumber+".svg")
      }
    }

/* DOUBLE CLICK water twice in a row */
/* Corpse Flower Root Rot */
/* CANNOT BE SAVED FROM ROOT ROT */
    document.getElementById("water-button").addEventListener("click",function(){
      /* double click event @ https://api.jquery.com/dblclick/ */
      $(".water-button").dblclick(function(){
      rot = true;
      $(".root-rot-1").attr("src","IMW-A3-Elements/root-rot-"+clickNumber+".svg")
      $(".root-rot-1").show();
      $(".stage-1").remove(); /* cannot be healthy anymore */
      $(".underwatered-1").remove(); /* cannot be underwatered anymore */
      /* TEXT */
      $(".rot-text").show();
      $(".nurture-text").remove(); /* remove bc it can't happen anymore */
      $(".underwatered-text").remove(); /* remove bc it can't happen anymore */
      /* ROOT ROT RESULT */
      if (clickNumber == 13){
        $(".rot-result").show();
      }
      });
    });

/* DOUBLE CLICK sunlight twice in a row */
/* Corpse Flower Underwatered */
    document.getElementById("sunlight-button").addEventListener("click",function(){
      /* double click event @ https://api.jquery.com/dblclick/ */
      $(".sunlight-button").dblclick(function(){
        sunlight = true;
        $(".underwatered-1").attr("src","IMW-A3-Elements/underwatered-"+clickNumber+".svg")
        $(".underwatered-1").show();
        $(".root-rot-1").hide(); /* can still get root rot later */
        $(".stage-1").hide(); /* can still become healthy later */
        /* TEXT */
        $(".underwatered-text").show();
        $(".nurture-text").hide();
        $(".rot-text").hide();
        /* If plant is rotting then other buttons only show root-rot-1 */
        /* CANNOT BE SAVED FROM ROOT ROT */
        if (rot){
          $(".root-rot-1").show();
          $(".underwatered-1").remove();
          $(".stage-1").remove();
          /* TEXT */
          $(".rot-text").show();
          $(".nurture-text").remove(); /* remove bc it can't happen anymore */
          $(".underwatered-text").remove(); /* remove bc it can't happen anymore */
          /* ROOT ROT RESULT */
          if (clickNumber == 13){
            $(".rot-result").show();
            $(".rot-text").remove(); /* remove bc it won't show up again */
          }
        }
      });
    });

/* SUNLIGHT clicked once */
/* If plant is rotting then other buttons only show root-rot-1 */
    $(".sunlight-button").click(function(){
      /* if UNDERWATERED then hide healthy ".stage-1" */
      if (sunlight){
        $(".stage-1").hide();
      }
      if (rot){
        $(".root-rot-1").show();
        $(".underwatered-1").remove();
        $(".stage-1").remove();
        /* TEXT */
        $(".rot-text").show();
        $(".nurture-text").remove(); /* remove bc it can't happen anymore */
        $(".underwatered-text").remove(); /* remove bc it can't happen anymore */
        /* ROOT ROT RESULT */
        if (clickNumber == 13){
          $(".rot-result").show();
          $(".rot-text").remove(); /* remove bc it won't show up again */
        }
      }
    });

/* LEAVE clicked once */
/* If plant is rotting then other buttons only show root-rot-1 */
/* CANNOT BE SAVED FROM ROOT ROT */
    $(".leave-button").click(function(){
      if (rot){
        $(".root-rot-1").show();
        $(".underwatered-1").remove();
        $(".stage-1").remove();
        /* TEXT */
        $(".rot-text").show();
        $(".nurture-text").remove(); /* remove bc it can't happen anymore */
        $(".underwatered-text").remove(); /* remove bc it can't happen anymore */
        /* ROOT ROT RESULT */
        if (clickNumber == 13){
          $(".rot-result").show();
          $(".rot-text").remove(); /* remove bc it won't show up again */
        }
      }
    });

/* HEALTHY > brought back from underwatering */
    $(".water-button").click(function(){
      if (sunlight){
        $(".stage-1").show();
        $(".underwatered-1").hide(); /* can still be underwatered later */
        $("root-rot-1").hide(); /* can still get root rot later */
        /* TEXT */
        $(".rot-text").hide(); /* can still get root rot later */
        $(".nurture-text").show();
        $(".underwatered-text").hide(); /* can still be underwatered later */
      }
      /* If plant is rotting then other buttons only show root-rot-1 */
      /* CANNOT BE SAVED FROM ROOT ROT */
      /*??? MAYBE keep */
      $(".water-button").click(function(){
        if (rot){
        $(".root-rot-1").show();
        $(".underwatered-1").remove();
        $(".stage-1").remove();
        /* TEXT */
        $(".rot-text").show();
        $(".nurture-text").remove(); /* remove bc it can't happen anymore */
        $(".underwatered-text").remove(); /* remove bc it can't happen anymore */
        }
        /* ROOT ROT RESULT */
        if (clickNumber == 13){
          $(".rot-result").show();
          $(".rot-text").remove(); /* remove bc it won't show up again */
        }
      });
    });

/* Remove buttons after reaching end of sequence */
    if (clickNumber == 13){
      $("button").hide();
    }
    clickNumber = clickNumber+1;
  })
})
