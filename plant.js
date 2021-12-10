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
/*------------------------------------------------------------------------*/
/* CLICKED "REMOVE THE STENCH" option */
  $(".remove-stench").click(function(){
    $(".nurture-flower").hide();
    $(".remove-stench").hide();
    $(".full-remove").show();
    $(".insecticide-button").show();
    $(".prune-button").show();
    $(".leaveTwo-button").show();
    $(".waterTwo-button").show();
    $(".harvest-button").hide();
    $(".flies-1").show(); /* FLIES-1 will show up from the beginning */
    $(".rotFlies-1").hide();
    $(".rotNF-1").hide();
    $(".wither-1").hide();
    $(".berry").hide();
    $(".seed").hide();
  });
/*------------------------------------------------------------------------*/
/* CLICKED "NURTURE THE TITAN ARUM" option */
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
});

/*------------------------------------------------------------------------*/
/* Simpler solution (Arrays) by Professor Ali Qadeer */
/* TRUE SEQUENCES */
const nurtureSequence1 = ["plant","water","sunlight","leave","leave","leave",
"water","sunlight","leave","leave","leave","water","sunlight","leave"];
const nurtureSequence2 = ["plant","sunlight","water","leave","leave","leave",
"sunlight","water","leave","leave","leave","sunlight","water"];
const nurtureSequence3 = ["plant","leave","sunlight","water","leave","leave",
"leave","sunlight","water","leave","leave","leave","sunlight","water"];

/* WHAT IS THAT STENCH? sequences */
const witherSequence = ["leaveTwo","leaveTwo","leaveTwo","leaveTwo","leaveTwo",
"leaveTwo","leaveTwo","leaveTwo","leaveTwo","leaveTwo","leaveTwo","harvest","plant"];
const insecticideSequence = ["insecticide","insecticide","insecticide","insecticide",
"insecticide","insecticide","insecticide","insecticide","insecticide","insecticide",
"insecticide","harvest","plant"]
const pruneSequence = ["prune","prune","prune","prune","prune","prune","prune",
"prune","prune","prune","prune","prune","prune"];
const waterSequence = ["waterTwo","waterTwo","waterTwo","waterTwo","waterTwo",
"waterTwo","waterTwo","waterTwo","waterTwo","waterTwo","waterTwo","waterTwo","waterTwo"];

/* Variables for the upcoming functions */
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
/* SEQUENCE 3 */
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

/*------------------------------------------------------------------------*/
var rotFlies;
var rotNF;

/* waterTwo darkens the soil */
/* Soil will not lighten with other buttons */
    document.getElementById("waterTwo-button").addEventListener("click",function(){
      $(".soil-ground").css({'background-color': '#201613'});
      $(".small-soil-nurture").css({'background-color': '#100b0a'});
    });

/* WHAT IS THAT STENCH? */
/* WITHER SEQUENCE 1 */
    if (buttonClicked == witherSequence[clickNumber]){
      console.log("LEAVE")
      $(".flies-1").attr("src","IMW-A3-Elements/flies-"+clickNumber+".svg")
      $(".rotFlies-1").attr("src","IMW-A3-Elements/rotFlies-"+clickNumber+".svg")
      $(".rotNF-1").attr("src","IMW-A3-Elements/rotNF-"+clickNumber+".svg")
      $(".berry").attr("src","IMW-A3-Elements/berry.svg")
      $(".seed").attr("src","IMW-A3-Elements/seed.svg")
      if (clickNumber == 10){
        $(".leaveTwo-button").hide();
        $(".prune-button").hide();
        $(".insecticide-button").hide();
        $(".waterTwo-button").hide();
        $(".remove-text").hide();
        $(".harvest-button").show();
        $(".harvest-text").show();
      }
/* INSECTICIDE REMOVES THE INSECT (small black specs in background) */
    } else if (buttonClicked == insecticideSequence[clickNumber]){
      console.log("insecticide")
      $(".wither-1").attr("src","IMW-A3-Elements/wither-"+clickNumber+".svg")
      $(".rotFlies-1").attr("src","IMW-A3-Elements/rotFlies-"+clickNumber+".svg")
      $(".rotNF-1").attr("src","IMW-A3-Elements/rotNF-"+clickNumber+".svg")
      $(".berry").attr("src","IMW-A3-Elements/berry.svg")
      $(".seed").attr("src","IMW-A3-Elements/seed.svg")
      if (clickNumber == 10){
        $(".leaveTwo-button").hide();
        $(".prune-button").hide();
        $(".insecticide-button").hide();
        $(".waterTwo-button").hide();
        $(".remove-text").hide();
        $(".harvest-button").show();
        $(".harvest-text").show();
      }
/* PRUNING WILL REMOVE THE PLANT FASTER */
    } else if (buttonClicked == pruneSequence[clickNumber]){
      console.log("prune")
      $(".wither-1").attr("src","IMW-A3-Elements/wither-"+clickNumber+".svg")
      $(".rotFlies-1").attr("src","IMW-A3-Elements/rotFlies-"+clickNumber+".svg")
      $(".rotNF-1").attr("src","IMW-A3-Elements/rotNF-"+clickNumber+".svg")
    } else if (buttonClicked == waterSequence[clickNumber]){
      console.log("water")
      $(".wither-1").attr("src","IMW-A3-Elements/wither-"+clickNumber+".svg")
      $(".rotFlies-1").attr("src","IMW-A3-Elements/rotFlies-"+clickNumber+".svg")
      $(".rotNF-1").attr("src","IMW-A3-Elements/rotNF-"+clickNumber+".svg")
    }

/* PRUNING WILL REMOVE THE PLANT FASTER */
    $(".prune-button").click(function(){
      if (clickNumber == 8){
        $("button").hide();
        $(".remove-text").hide();
        $(".harvest-button").show();
        $(".harvest-text").show();
      }
      /* IF ROTTED no flies */
      if (rotNF){
        $(".wither-1").hide();
        $(".rotFlies-1").hide();
        $(".rotNF-1").show();
      /* IF ROTTED with flies */
      }
      if (rotFlies){
        $(".wither-1").hide();
        $(".rotFlies-1").show();
        $(".rotNF-1").hide();
      }
    });

/* INSECTICIDE REMOVES THE INSECT (small grey specs in background) */
    $(".insecticide-button").click(function(){
      $(".wither-1").show();
      $(".flies-1").hide();
      $(".rotNF-1").hide();
      $(".rotFlies-1").hide()
      if (clickNumber == 10){
        $(".leaveTwo-button").hide();
        $(".prune-button").hide();
        $(".insecticide-button").hide();
        $(".waterTwo-button").hide();
        $(".remove-text").hide();
        $(".harvest-button").show();
        $(".harvest-text").show();
      }
      if (rotFlies){
        rotNF = true;
        $(".wither-1").hide();
        $(".flies-1").hide();
        $(".rotNF-1").show(); /* will stay rotted if .rotFlies-1 was activated */
        $(".rotFlies-1").hide();
        if (clickNumber == 10){
          $(".leaveTwo-button").hide();
          $(".prune-button").hide();
          $(".insecticide-button").hide();
          $(".waterTwo-button").hide();
          $(".remove-text").hide();
          $(".harvest-button").show();
          $(".harvest-text").show();
        }
      }
    });

/* WATERING BRINGS BACK INSECTS while rotting (small grey specs in background) */
/* Soil also darkens when watered */
    $(".waterTwo-button").click(function(){
      rotFlies = true;
      $(".wither-1").hide();
      $(".rotNF-1").hide();
      $(".rotFlies-1").show(); /* WILL ALWAYS BE FLIES + ROT WHEN WATERED */
    });

/* Harvest button will be replaced by plantTwo button */
    $(".harvest-button").click(function(){
      $(".harvest-button").hide();
      $(".wither-1").hide(); /* WITHER-1 is removed and only berry remains */
      $(".flies-1").hide(); /* FLIES-1 is removed and only berry remains */
      $(".rotFlies-1").hide();
      $(".rotNF-1").hide();
      $(".small-soil").hide();
      $(".berry").show(); /* red BERRY appears */
    });

/*------------------------------------------------------------------------*/
/* Remove buttons after reaching end of sequence */
    if (clickNumber == 13){
      $("button").hide();
    }
    clickNumber = clickNumber+1;
  })
})
