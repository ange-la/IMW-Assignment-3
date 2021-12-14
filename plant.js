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
    $(".leaveTwo-button").show();
    $(".waterTwo-button").show();
    $(".flies-1").show(); /* FLIES-1 will show up from the beginning */
    $(".rotFlies-1").hide();
    $(".rotNF-1").hide();
    $(".wither-1").hide();
    $(".berry").hide();
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
/* SEQUENCES for FULL-NURTURE + FULL-REMOVE options */
const nurtureSequence1 = ["plant","water","sunlight","leave","leave","leave",
"water","sunlight","leave","leave","leave","water","sunlight","leave"];
const nurtureSequence2 = ["plant","sunlight","water","leave","leave","leave",
"sunlight","water","leave","leave","leave","sunlight","water"];

/* WHAT IS THAT STENCH? sequences */
const witherSequence = ["leaveTwo","leaveTwo","leaveTwo","leaveTwo","leaveTwo",
"leaveTwo","leaveTwo","leaveTwo","leaveTwo","leaveTwo","leaveTwo","harvest"];
const insecticideSequence = ["insecticide","insecticide","insecticide","insecticide",
"insecticide","insecticide","insecticide","insecticide","insecticide","insecticide",
"insecticide","insecticide","insecticide"];
const rotInsectSequence = ["rotInsect","rotInsect","rotInsect","rotInsect","rotInsect",
"rotInsect","rotInsect","rotInsect","rotInsect","rotInsect","rotInsect","rotInsect",
"rotInsect"];
const waterSequence = ["waterTwo","waterTwo","waterTwo","waterTwo","waterTwo",
"waterTwo","waterTwo","waterTwo","waterTwo","waterTwo","waterTwo","waterTwo","waterTwo"];
const leaveRot = ["leaveRot","leaveRot","leaveRot","leaveRot","leaveRot","leaveRot",
"leaveRot","leaveRot","leaveRot","leaveRot","leaveRot","leaveRot"];

/* Variables for the upcoming functions */
var water;
var sunlight;
var overwatered;
var underwatered;
var reviveWater;
var overwaterAgain;
var overwaterLeave;
var leave;

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



/* UNALTERED button inputs */
/* original WATER */
    $(".water-button").click(function(){
      water = true;
    });
/* original SUNLIGHT */
    $(".sunlight-button").click(function(){
      sunlight = true;
    });
/* original LEAVE */
/* only works if WATER or SUNLIGHT buttons were clicked before */
    $(".leave-button").click(function(){
      leave = true;
    });



/* Things appear below here if "true" */
/* SEQUENCE 1 */
    if (buttonClicked == nurtureSequence1[clickNumber]){
      console.log("TRUE-1")
      $(".stage-1").attr("src","IMW-A3-Elements/corpse-flower-"+clickNumber+".svg")
      /* true TEXT RESULT */
      if (clickNumber == 13){
        $(".nurture-text").hide();
        $(".true-text").show(); /* healthy text result */
      }
/* SEQUENCE 2 */
    } else if (buttonClicked == nurtureSequence2[clickNumber]){
      console.log("TRUE-2")
      $(".stage-1").attr("src","IMW-A3-Elements/corpse-flower-"+clickNumber+".svg")
      /* true TEXT RESULT */
      if (clickNumber == 13){
        $(".nurture-text").hide();
        $(".true-text").show(); /* healthy text result */
      }
/* FALSE OUTCOMES */
    } else {
      $(".stage-1").attr("src","IMW-A3-Elements/corpse-flower-"+clickNumber+".svg")
      $(".underwatered-1").attr("src","IMW-A3-Elements/underwatered-"+clickNumber+".svg")
      $(".root-rot-1").attr("src","IMW-A3-Elements/root-rot-"+clickNumber+".svg")
      /* SUNLIGHT */
      /* UNDERWATERED + if plant is rotting */
      $(".sunlight-button").click(function(){
        if (sunlight){
          console.log("UNDERWATERED!")
          underwatered = true;
          $(".stage-1").hide(); /* can be revived from underwatering */
          $(".root-rot-1").hide(); /* can still get root rot later */
          $(".underwatered-1").show();
          /* TEXT */
          $(".nurture-text").hide();
          $(".rot-text").hide();
          $(".underwatered-text").show(); /* underwatered text */
          if (clickNumber == 14){
            $(".nurture-text").hide();
            $(".rot-text").hide();
            $(".underwatered-text").hide();
            $(".underwatered-result").show(); /* underwatered text result */
          }
        }
        /* If plant is rotting then other buttons only show root-rot-1 */
        if (overwatered){
          console.log("OVERWATERED!")
          $(".stage-1").hide();
          $(".underwatered-1").hide();
          $(".root-rot-1").show();
          /* TEXT */
          $(".nurture-text").hide();
          $(".underwatered-text").hide();
          $(".rot-text").show();
          if (clickNumber == 14){
            $("nurture-text").hide();
            $(".rot-text").hide();
            $(".underwatered-text").hide();
            $(".rot-result").show(); /* rot text result */
            $(".underwatered-result").hide();
          }
        }
        if (overwaterAgain){
          overwaterLeave = true;
          console.log("OVERWATERED!")
          $(".stage-1").hide();
          $(".underwatered-1").hide();
          $(".root-rot-1").show();
          /* TEXT */
          $(".nurture-text").hide();
          $(".underwatered-text").hide();
          $(".rot-text").show();
          if (clickNumber == 14){
            $("nurture-text").hide();
            $(".rot-text").hide();
            $(".underwatered-text").hide();
            $(".rot-result").show(); /* rot text result */
            $(".underwatered-result").hide();
          }
        }
      });
      /* WATER */
      /* REVIVE UNDERWATERED + OVERWATERED */
      $(".water-button").click(function(){
        /* REVIVE from underwatering */
        if (underwatered){
          console.log("REVIVED!")
          reviveWater = true;
          $(".root-rot-1").hide(); /* can still get root rot later */
          $(".underwatered-1").hide(); /* can still be underwatered later */
          $(".stage-1").show(); /* revived from underwatering */
          /* TEXT */
          $(".rot-text").hide();
          $(".underwatered-text").hide();
          $(".nurture-text").show();
          if (clickNumber == 14){
            $(".nurture-text").hide();
            $(".rot-text").hide();
            $(".underwatered-text").hide();
            $(".true-text").show(); /* healthy text result */
          }
          if (overwaterAgain){
            if (clickNumber == 14){
              $(".root-rot-1").show();
              $(".nurture-text").hide();
              $(".rot-text").hide();
              $(".underwatered-text").hide();
              $(".true-text").hide(); /* healthy text result */
              $(".rot-result").show(); /* rot text result */
            }
          }
        }
        /* OVERWATERED after click water again affter REVIVE */
        if (reviveWater){
          $(".water-button").click(function(){
            overwaterAgain = true;
            console.log("OVERWATERED AGAIN!")
            $(".stage-1").hide(); /* can no longer be saved */
            $(".underwatered-1").hide(); /* can no longer be underwatered */
            $(".root-rot-1").show();
            /* TEXT */
            $(".nurture-text").hide();
            $(".underwatered-text").hide();
            $(".rot-text").show();
            if (clickNumber == 14){
              $(".nurture-text").hide();
              $(".rot-text").hide();
              $(".underwatered-text").hide();
              $(".true-text").hide();
              $(".rot-result").show(); /* rot text result */
            }
          });
        }
        /* OVERWATERED */
        if (water){
          console.log("OVERWATERED!!");
          overwatered = true;
          $(".stage-1").hide(); /* can no longer be saved */
          $(".underwatered-1").hide(); /* can no longer be underwatered */
          $(".root-rot-1").show();
          /* TEXT */
          $(".nurture-text").hide();
          $(".underwatered-text").hide();
          $(".rot-text").show();
          if (clickNumber == 14){
            $(".nurture-text").hide();
            $(".rot-text").hide();
            $(".underwatered-text").hide();
            $(".rot-result").show(); /* rot text result */
          }
        }
      });
      /* LEAVE */
      /* OVERWATERED + OVERWATERED */
      $(".leave-button").click(function(){
        /* UNDERWATERED stays underwatered */
        if (leave){
          $(".stage-1").hide();
          $(".underwatered-1").show();
          if (clickNumber == 14){
            $(".nurture-text").remove();
            $(".rot-text").remove();
            $(".underwatered-text").hide();
            $(".underwatered-result").hide();
            $(".true-text").hide();
            $(".neglect-text").show(); /* neglect text result */
          }
        }
        if (underwatered){
          $(".stage-1").hide(); /* can be revived */
          $(".root-rot-1").hide(); /* can still get root rot */
          $(".underwatered-1").show(); /* underwatered stays underwatered */
          /* TEXT */
          $(".nurture-text").hide();
          $(".rot-text").hide();
          $(".underwatered-text").show();
          if (clickNumber == 14){
            $(".nurture-text").remove();
            $(".rot-text").remove();
            $(".underwatered-text").hide();
            $(".underwatered-result").show(); /* underwatered text result */
            $(".neglect-text").hide();
            $(".true-text").hide();
          }
        }
        /* OVERWATERED stays overwatered */
        if (overwatered){
          $(".stage-1").remove(); /* cannot be revived anymore */
          $(".underwatered-1").remove(); /* cannot be underwatered anymore */
          $(".root-rot-1").show();
          /* TEXT */
          $(".nurture-text").remove();
          $(".underwatered-text").remove();
          $(".rot-text").show();
          if (clickNumber == 14){
            $(".nurture-text").remove();
            $(".underwatered-text").remove();
            $(".rot-text").remove();
            $(".rot-result").show(); /* rot text result */
            $(".underwatered-result").hide();
            $(".neglect-text").hide();
            $(".true-text").hide();
          }
        }
        if (overwaterLeave){
          $(".stage-1").remove(); /* cannot be revived anymore */
          $(".underwatered-1").remove(); /* cannot be underwatered anymore */
          $(".root-rot-1").show();
          /* TEXT */
          $(".nurture-text").remove();
          $(".underwatered-text").remove();
          $(".rot-text").show();
          if (clickNumber == 14){
            $(".nurture-text").remove();
            $(".underwatered-text").remove();
            $(".rot-text").remove();
            $(".rot-result").show(); /* rot text result */
            $(".underwatered-result").hide();
            $(".neglect-text").hide();
            $(".true-text").hide();
          }
        }
        if (overwaterAgain){
          $(".stage-1").remove(); /* cannot be revived anymore */
          $(".underwatered-1").remove(); /* cannot be underwatered anymore */
          $(".root-rot-1").show();
          /* TEXT */
          $(".nurture-text").remove();
          $(".underwatered-text").remove();
          $(".rot-text").show();
          if (clickNumber == 14){
            $(".nurture-text").remove();
            $(".underwatered-text").remove();
            $(".rot-text").remove();
            $(".rot-result").show(); /* rot text result */
            $(".underwatered-result").hide();
            $(".neglect-text").hide();
            $(".true-text").hide();
          }
        }
      });
    }





/*------------------------------------------------------------------------*/
/* WHAT IS THAT STENCH? option */
/* ARRAYS for this are at the top of the page */

var rotFlies;
var rotNF;
var witherInsecticide;

/* waterTwo darkens the soil */
/* Soil will not lighten with other buttons */
/* addEventListener @ https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener */
/* @ https://stackoverflow.com/questions/2001366/how-can-i-change-the-text-color-with-jquery */
/* @ https://stackoverflow.com/questions/38418062/how-can-i-trigger-an-event-after-two-different-buttons-have-been-clicked */
    document.getElementById("waterTwo-button").addEventListener("click",function(){
      $(".soil-ground").css({'background-color': '#201613'});
      $(".small-soil").css({'background-color': '#100b0a'});
    });

/* WITHER SEQUENCE 1 */
    if (buttonClicked == witherSequence[clickNumber]){
      console.log("LEAVE")
      $(".flies-1").attr("src","IMW-A3-Elements/flies-"+clickNumber+".svg")
      $(".wither-1").attr("src","IMW-A3-Elements/wither-"+clickNumber+".svg")
      $(".rotFlies-1").attr("src","IMW-A3-Elements/rotFlies-"+clickNumber+".svg")
      $(".rotNF-1").attr("src","IMW-A3-Elements/rotNF-"+clickNumber+".svg")
      $(".berry").attr("src","IMW-A3-Elements/berry.svg")
/* LEAVE BUTTON */
      $(".leaveTwo-button").click(function(){
        if (witherInsecticide){
          $(".wither-1").show();
          $(".flies-1").hide();
        }
      });
      if (clickNumber == 10){
        /* NOT removing ALL the buttons */
        $(".leaveTwo-button").hide();
        $(".insecticide-button").hide();
        $(".rotInsect-button").hide();
        $(".waterTwo-button").hide();
        $(".remove-text").hide();
        /* Harvest button shows up for "healthy" withered plant */
        $(".harvest-button").show();
        $(".harvest-text").show();
      }
/* INSECTICIDE REMOVES THE INSECT (small black specs in background) */
    } else if (buttonClicked == insecticideSequence[clickNumber]){
      console.log("insecticide")
      $(".rotFlies-1").attr("src","IMW-A3-Elements/rotFlies-"+clickNumber+".svg")
      $(".wither-1").attr("src","IMW-A3-Elements/wither-"+clickNumber+".svg")
      $(".rotFlies-1").attr("src","IMW-A3-Elements/rotFlies-"+clickNumber+".svg")
      $(".rotNF-1").attr("src","IMW-A3-Elements/rotNF-"+clickNumber+".svg")
      $(".berry").attr("src","IMW-A3-Elements/berry.svg")
      /* if not rotted yet > remove flies + "healthy" */
      witherInsecticide = true;
      $(".insecticide-button").click(function(){
        $(".wither-1").show();
        $(".flies-1").hide();
        $(".rotFlies-1").hide();
        $(".rotNF-1").hide();
        if (clickNumber == 10){
          /* NOT removing ALL the buttons */
          $(".leaveTwo-button").hide();
          $(".insecticide-button").hide();
          $(".rotInsect-button").hide();
          $(".waterTwo-button").hide();
          $(".remove-text").hide();
          /* Harvest button shows up for "healthy" withered plant */
          $(".harvest-button").show();
          $(".harvest-text").show();
        }
      });
/* WATER ROTS THE TITAN ARUM + brings flies */
    } else if (buttonClicked == rotInsectSequence[clickNumber]){
      console.log("rotInsect")
      $(".rotFlies-1").attr("src","IMW-A3-Elements/rotFlies-"+clickNumber+".svg")
      $(".wither-1").attr("src","IMW-A3-Elements/wither-"+clickNumber+".svg")
      $(".rotFlies-1").attr("src","IMW-A3-Elements/rotFlies-"+clickNumber+".svg")
      $(".rotNF-1").attr("src","IMW-A3-Elements/rotNF-"+clickNumber+".svg")
      /* if watered > rotted */
      $(".rotInsect-button").click(function(){
        rotNF = true;
        $(".wither-1").hide();
        $(".flies-1").hide();
        $(".rotNF-1").show(); /* will stay rotted if .rotFlies-1 was activated */
        $(".rotFlies-1").hide();  /* will stay rotted if .rotFlies-1 was activated */
        if (clickNumber == 11){
          /* removing ALL the buttons */
          $("button").hide();
          $(".remove-text").hide();
          /* Harvest button doesn't show up for rotted plant */
          /* berries can not be recovered if rotted */
          $(".harvest-button").hide();
          $(".harvest-text").hide();
          /* RESULT TEXT FOR ROT */
          $(".witherRot-text").show();
        }
      });
/* waterTwo BUTTON */
/* Harvest button will NOT show up for rotted Titan Arum */
    } else if (buttonClicked == waterSequence[clickNumber]){
      console.log("water")
      $(".rotFlies-1").attr("src","IMW-A3-Elements/rotFlies-"+clickNumber+".svg")
      $(".wither-1").attr("src","IMW-A3-Elements/wither-"+clickNumber+".svg")
      $(".rotFlies-1").attr("src","IMW-A3-Elements/rotFlies-"+clickNumber+".svg")
      $(".rotNF-1").attr("src","IMW-A3-Elements/rotNF-"+clickNumber+".svg")
      $(".waterTwo-button").click(function(){
        rotFlies = true;
        $(".wither-1").hide();
        $(".flies-1").hide();
        $(".rotNF-1").hide();
        $(".rotFlies-1").show(); /* WILL ALWAYS BE FLIES + ROT WHEN WATERED */
        /* CHANGE INSECTICIDE BUTTONS */
        $(".insecticide-button").hide();
        $(".rotInsect-button").show();
        /* CHANGE LEAVE BUTTONS */
        $(".leaveTwo-button").hide();
        $(".leaveRot-button").show();
        /* ALL buttons HIDDEN with rot */
        /* berries can not be recovered if rotted */
        if (clickNumber == 11){
          /* ALL buttons HIDDEN */
          $("button").hide();
          $(".harvest-text").hide();
          $(".wither-1").hide();
          $(".flies-1").hide();
          $(".rotNF-1").hide();
          $(".berry").hide();
          /* rot + flies and no berries */
          $(".remove-text").hide();
          $(".rotFlies-1").show();
          $(".witherRot-text").show();
        }
      });
    } else if (buttonClicked == leaveRot[clickNumber]){
      $(".flies-1").attr("src","IMW-A3-Elements/flies-"+clickNumber+".svg")
      $(".wither-1").attr("src","IMW-A3-Elements/wither-"+clickNumber+".svg")
      $(".rotFlies-1").attr("src","IMW-A3-Elements/rotFlies-"+clickNumber+".svg")
      $(".rotNF-1").attr("src","IMW-A3-Elements/rotNF-"+clickNumber+".svg")
      /* leaveTwo button if plant is ROTTED */
      $(".leaveRot-button").click(function(){
        /* IF rotted + insecticide = rotNF (rot No Flies) */
        /* if ROT no flies */
        if (rotNF){
          $(".wither-1").hide();
          $(".flies-1").hide();
          $(".rotFlies-1").hide();
          $(".rotNF-1").show();
          if (clickNumber == 10){
            /* ALL buttons HIDDEN with rot */
            $("button").hide();
            /* berry doesn't show up because of rot */
            $(".harvest-text").hide();
            $(".berry").hide();
            /* rot result TEXT */
            $(".remove-text").hide();
            $(".witherRot-text").show();
          }
        }
        /* if ROT with FLIES */
        if (rotFlies){
          $(".wither-1").hide();
          $(".flies-1").hide();
          $(".rotFlies-1").show();
          $(".rotNF-1").hide();
          if (clickNumber == 10){
            /* ALL buttons HIDDEN with rot */
            $("button").hide();
            /* berry doesn't show up because of rot */
            $(".berry").hide();
            $(".harvest-text").hide();
            /* rot result TEXT */
            $(".remove-text").hide();
            $(".witherRot-text").show();
          }
        }
      });
    }




/* LAST BUTTON if not rotted */
/* Harvest button will be replaced by plantTwo button */
    $(".harvest-button").click(function(){
      $(".harvest-button").hide();
      $(".wither-1").hide(); /* WITHER-1 is removed and only berry remains */
      $(".flies-1").hide(); /* FLIES-1 is removed and only berry remains */
      $(".rotFlies-1").hide();
      $(".rotNF-1").hide();
      $(".small-soil").hide(); /* small-soil hidden because plant is removed */
      $(".harvest-text").hide();
      $(".berry").show(); /* red BERRY appears */
      $(".berry-text").show(); /* replaces harvest-text */
    });






/*------------------------------------------------------------------------*/
/* Remove all buttons after reaching end of sequence / 13 clicks */
/* Mainly for FULL-NURTURE option*/
    if (clickNumber == 13){
      $("button").hide();
    }
    clickNumber = clickNumber+1;
  })
})
