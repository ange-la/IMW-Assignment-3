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



/* Trigger event after 2 buttons clicked in order */
/* @ https://stackoverflow.com/questions/38418062/how-can-i-trigger-an-event-after-two-different-buttons-have-been-clicked */
/* WATER button darkens the soil */
/* @ https://stackoverflow.com/questions/2001366/how-can-i-change-the-text-color-with-jquery */



/* 1-WATER > firstWater */
$(document).ready(function(){
  var firstWater;
  var secondWater;
  var thirdWater;
  var fourthWater;
  var fifthWater;
  var sixthWater;
  var seventhWater;
  var eighthWater;
  var ninthWater;
  var tenthWater;
  var eleventhWater;
  var twelevthWater;
  var thirteenthWater;
  var fourteenthWater;
  var fifteenthWater;
  var sixteenthWater;
  var seventeetnWater;
  var eighteenthWater;
  var ninteenthWater;
  var twentiethWater;
  var twentyfirstWater;
  var twentysecondWater;
  var twentythirdWater;
  var twentyfourthWater;
  var twentyfifthWater;
  /* Darken soil if watered first */
  $(".water-button-1").click(function(){
    firstWater = true;
    $(".soil-ground").css({'background-color': '#201613'});
    $(".small-soil-nurture").css({'background-color': '#160c09'});
    /* Change function of water-button-1 @https://stackoverflow.com/questions/4506219/how-to-change-onclick-event-with-jquery/8188681 */
    /* STAGE 1 show */
    $(".water-button-1").unbind("click");
    $(".water-button-1").click(function(){
      fourthWater = true;
      if (thirdWater){
        $(".soil-ground").css({'background-color': '#201613'});
        $(".small-soil-nurture").css({'background-color': '#160c09'});
        $(".stage-1").show();
      }
      /* Change function of water-button-1 */
      $(".water-button-1").unbind("click");
      $(".water-button-1").click(function(){
        seventhWater = true;
        if (sixthWater){
          $(".soil-ground").css({'background-color': '#201613'});
          $(".small-soil-nurture").css({'background-color': '#160c09'});
        }
        /* Change function of water-button-1 */
        /* STAGE 4 show + STAGE 3 remove */
        $(".water-button-1").unbind("click");
        $(".water-button-1").click(function(){
          tenthWater = true;
          if (ninthWater){
            $(".soil-ground").css({'background-color': '#201613'});
            $(".small-soil-nurture").css({'background-color': '#160c09'});
            $(".stage-3").remove();
            $(".stage-4").show();
          }
          /* Change function of water-button-1 */
          /* STAGE 6 show + STAGE 5 remove */
          $(".water-button-1").unbind("click");
          $(".water-button-1").click(function(){
            thirteenthWater = true;
            if (twelevthWater){
              $(".soil-ground").css({'background-color': '#201613'});
              $(".small-soil-nurture").css({'background-color': '#160c09'});
              $(".stage-5").remove();
              $(".stage-6").show();
            }
            /* Change function of water-button-1 */
            $(".water-button-1").unbind("click");
            $(".water-button-1").click(function(){
              sixteenthWater = true;
              if (fifteenthWater){
                $(".soil-ground").css({'background-color': '#201613'});
                $(".small-soil-nurture").css({'background-color': '#160c09'});
              }
              /* Change function of water-button-1 */
              $(".water-button-1").unbind("click");
              $(".water-button-1").click(function(){
                eighteenthWater = true;
                if (seventeenthWater) {
                  $(".soil-ground").css({'background-color': '#201613'});
                  $(".small-soil-nurture").css({'background-color': '#160c09'});
                }
                /* Change function of water-button-1 */
                $(".water-button-1").unbind("click");
                $(".water-button-1").click(function(){
                  twentiethWater = true;
                  if (ninteenthWater){
                    $(".soil-ground").css({'background-color': '#201613'});
                    $(".small-soil-nurture").css({'background-color': '#160c09'});
                  }
                  /* Change function of water-button-1 */
                  $(".water-button-1").unbind("click");
                  $(".water-button-1").click(function(){
                    twentysecondWater = true;
                    if (twentyfirstWater) {
                      $(".soil-ground").css({'background-color': '#201613'});
                      $(".small-soil-nurture").css({'background-color': '#160c09'});
                    }
                    /* Change function of water-button-1 */
                    $(".water-button-1").unbind("click");
                    $(".water-button-1").click(function(){
                      twentyfourthWater = true;
                      if (twentythirdWater){
                        $(".soil-ground").css({'background-color': '#201613'});
                        $(".small-soil-nurture").css({'background-color': '#160c09'});
                      }
                      /* Change function of water-button-1 */
                      /* STAGE 13 show + STAGE 12 remove */
                      /* FULLY GROWN CORSE FLOWER */
                      $(".water-button-1").unbind("click");
                      $(".water-button-1").click(function(){
                        if (twentyfifthWater){
                          $(".soil-ground").css({'background-color': '#201613'});
                          $(".small-soil-nurture").css({'background-color': '#160c09'});
                          $(".stage-12").remove();
                          $(".stage-13").show();
                        }
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
  /* lighten soil after firstWater */
  $(".sunlight-button-1").click(function(){
    secondWater = true;
    if (firstWater){
      $(".soil-ground").css({'background-color': '#30211d'});
      $(".small-soil-nurture").css({'background-color': '#24140f'});
    }
    /* Change function of sunlight-button-1 @https://stackoverflow.com/questions/4506219/how-to-change-onclick-event-with-jquery/8188681 */
    /* STAGE 3 show + STAGE 2 remove */
    $(".sunlight-button-1").unbind("click");
    $(".sunlight-button-1").click(function(){
      eighthWater = true;
      if (seventhWater){
        $(".soil-ground").css({'background-color': '#402c26'});
        $(".small-soil-nurture").css({'background-color': '#361e16'});
        $(".stage-2").remove();
        $(".stage-3").show();
      }
    });
  });
  /*lighten soil if left alone after sunlight */
  $(".leave-button-1").click(function(){
    thirdWater = true;
    if (secondWater){
      $(".soil-ground").css({'background-color': '#402c26'});
      $(".small-soil-nurture").css({'background-color': '#361e17'});
    }
    /* Change function of leave-button-1 @https://stackoverflow.com/questions/4506219/how-to-change-onclick-event-with-jquery/8188681 */
    $(".leave-button-1").unbind("click");
    $(".leave-button-1").click(function(){
      fifthWater = true;
      if (fourthWater){
        $(".soil-ground").css({'background-color': '#30211d'});
        $(".small-soil-nurture").css({'background-color': '#24140f'});
      }
      /* Change function of leave-button-1 */
      /* STAGE 2 show + STAGE 1 remove */
      $(".leave-button-1").unbind("click");
      $(".leave-button-1").click(function(){
        sixthWater = true;
        if (fifthWater){
          $(".soil-ground").css({'background-color': '#402c26'});
          $(".small-soil-nurture").css({'background-color': '#361e17'});
          $(".stage-1").remove();
          $(".stage-2").show();
        }
        /* Change function of leave-button-1 */
        $(".leave-button-1").unbind("click");
        $(".leave-button-1").click(function(){
          ninthWater = true;
          if (eighthWater){
            $(".soil-ground").css({'background-color': '#503730'});
            $(".small-soil-nurture").css({'background-color': '#47281f'});
          }
          /* Change function of leave-button-1 */
          /* STAGE 5 show + STAGE 4 remove */
          $(".leave-button-1").unbind("click");
          $(".leave-button-1").click(function(){
            eleventhWater = true;
            if (tenthWater){
              $(".soil-ground").css({'background-color': '#402c26'});
              $(".small-soil-nurture").css({'background-color': '#361e16'});
              $(".stage-4").remove();
              $(".stage-5").show();
            }
            /* Change function of leave-button-1 */
            $(".leave-button-1").unbind("click");
            $(".leave-button-1").click(function(){
              twelevthWater = true;
              if (eleventhWater){
                $(".soil-ground").css({'background-color': '#503730'});
                $(".small-soil-nurture").css({'background-color': '#48281e'});
              }
              /* Change function of leave-button-1 */
              $(".leave-button-1").unbind("click");
              $(".leave-button-1").click(function(){
                fourteenthWater = true;
                if (thirteenthWater){
                  $(".soil-ground").css({'background-color': '#402c26'});
                  $(".small-soil-nurture").css({'background-color': '#361e16'});
                }
                /* Change function of leave-button-1 */
                /* STAGE 7 show + STAGE 6 remove */
                $(".leave-button-1").unbind("click");
                $(".leave-button-1").click(function(){
                  fifteenthWater = true;
                  if (fourteenthWater){
                    $(".soil-ground").css({'background-color': '#503730'});
                    $(".small-soil-nurture").css({'background-color': '#48281e'});
                    $(".stage-6").remove();
                    $(".stage-7").show();
                  }
                  /* Change function of leave-button-1 */
                  /* STAGE 8 show + STAGE 7 remove */
                  $(".leave-button-1").unbind("click");
                  $(".leave-button-1").click(function(){
                    seventeenthWater = true;
                    if (sixteenthWater){
                      $(".soil-ground").css({'background-color': '#503730'});
                      $(".small-soil-nurture").css({'background-color': '#48281e'});
                      $(".stage-7").remove();
                      $(".stage-8").show();
                    }
                    /* Change function of leave-button-1 */
                    /* STAGE 9 show + STAGE 8 remove */
                    $(".leave-button-1").unbind("click");
                    $(".leave-button-1").click(function(){
                      ninteenthWater = true;
                      if (eighteenthWater){
                        $(".soil-ground").css({'background-color': '#503730'});
                        $(".small-soil-nurture").css({'background-color': '#48281e'});
                        $(".stage-8").remove();
                        $(".stage-9").show();
                      }
                      /* Change function of leave-button-1 */
                      /* STAGE 10 show + STAGE 9 remove */
                      $(".leave-button-1").unbind("click");
                      $(".leave-button-1").click(function(){
                        twentyfirstWater = true;
                        if (twentiethWater){
                          $(".soil-ground").css({'background-color': '#604239'});
                          $(".small-soil-nurture").css({'background-color': '#5a3226'});
                          $(".stage-9").remove();
                          $(".stage-10").show();
                        }
                        /* Change function of leave-button-1 */
                        /* STAGE 11 show + STAGE 10 remove */
                        $(".leave-button-1").unbind("click");
                        $(".leave-button-1").click(function(){
                          twentythirdWater = true;
                          if (twentysecondWater){
                            $(".soil-ground").css({'background-color': '#604239'});
                            $(".small-soil-nurture").css({'background-color': '#5a3226'});
                            $(".stage-10").remove();
                            $(".stage-11").show();
                          }
                          /* Change function of leave-button-1 */
                          /* STAGE 12 show + STAGE 11 remove */
                          $(".leave-button-1").unbind("click");
                          $(".leave-button-1").click(function(){
                            twentyfifthWater = true;
                            if (twentyfourthWater){
                              $(".soil-ground").css({'background-color': '#604239'});
                              $(".small-soil-nurture").css({'background-color': '#5a3226'});
                              $(".stage-11").remove();
                              $(".stage-12").show();
                            }
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});
