$(function() {
  // variables
  var carousel = $(".main_carousel_in ul");
  var $successLi = $('.main_carousel_in ul li');
  var successLength = $successLi.length;
  var $prev_btn = $('.main_carousel #prev_btn');
  var $next_btn = $('.main_carousel a#next_btn');
  var visiblePhoto = 3;  
  var currentPosSuccess = 0;
  // end: variables
  
  // settings
  var carouselCircular = false;
  var carouselAutoMove = false;
  // end: settings
  
  // init
  carousel.width(105 * successLength);
  // end: init
    
  // click
  $next_btn.on('click', function(e){
    
    console.log("Start currentPosSuccess " + currentPosSuccess);
    
    checkedPositionNext();
    
  });
  $prev_btn.on('click', function(e){    
    checkedPositionPrev();
  });
  // end: click
  
  function sliderMove() {
    console.log("sliderMove currentPosSuccess:" + currentPosSuccess);
    carousel.css("margin-left", (currentPosSuccess * (-105)) + 'px');
  }
  function checkedPositionNext() {
    
    if (currentPosSuccess == (successLength - visiblePhoto)) {
        if (carouselCircular === true) {
            currentPosSuccess = 0; 
            sliderMove();
        }
        else {
          console.log("stop");
          return false;
        }
    }
    else {
      currentPosSuccess++;
      sliderMove();
    }
    
    clearInterval(botSlide);
    botSlide = setInterval(bottomsliderMove, 4000);
  }
  
  function checkedPositionPrev() {    
    console.log(currentPosSuccess);
    if (currentPosSuccess === 0) {
      if (carouselCircular === true) {
        currentPosSuccess = successLength - 4;
        sliderMove();
      }
      else {
        return false;
      }
    }
    else {
      currentPosSuccess--;
      sliderMove();
    }
  }
  
  // auto move
  if (carouselAutoMove === true) {
    var botSlide = setInterval(bottomsliderMove, 4000);
    function bottomsliderMove() {
      currentPosSuccess += 1;
      if (currentPosSuccess == (successLength - visiblePhoto)) { 
        currentPosSuccess = 0; 
      }
      sliderMove();
    }
  }
  // end: auto move
  
});





