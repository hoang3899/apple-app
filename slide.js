/*
$('.paddlenav-arrow-next').click(function () {
    $('.noteul').addClass('active');
});
$('.paddlenav-arrow-previous').click(function () {
    $('.noteul').removeClass('active');
});
*/
const ul = document.querySelector('.noteul');
const ul2 = document.querySelector('.theul');
var init = 0;
var i = 0;
const btnButton = document.querySelector('.section-accessories .paddlenav-arrow-next');
const btnButton01 = document.querySelector('.section-accessories .paddlenav-arrow-previous');
$('.section-accessories .paddlenav-arrow-next').click(function() {    
    if (init < 800) {
      init += 400;
      ul2.style.transform = "translateX(-" + init + "px)";
     
      btnButton01.style.opacity = "1";
     } else if (init == 800){
       btnButton.style.opacity = "0.2";
     } 
  });

  $('.section-accessories .paddlenav-arrow-previous').click(function() {
    if (init > 0) {
      init -= 400;
     
      ul2.style.transform = "translateX(-" + init + "px)";
      
      btnButton.style.opacity = "1";
     } else {
       init = 0;
       ul2.style.tranform = "translateX(-" + init + "px)";
       
       btnButton01.style.opacity = "0.2";
     }
  });
  const btnButton2 = document.querySelector('.section-smart-home .paddlenav-arrow-next');
const btnButton02 = document.querySelector('.section-smart-home .paddlenav-arrow-previous');
  $('.section-smart-home .paddlenav-arrow-next').click(function() {    
    if (i < 800) {
      i += 400;
      ul.style.transform = "translateX(-" + i + "px)";
     
      btnButton02.style.opacity = "1";
     } else if (i == 800){
       btnButton2.style.opacity = "0.2";
     } 
  });

  $('.section-smart-home .paddlenav-arrow-previous').click(function() {
    if (i > 0) {
      i -= 400;
     
      ul.style.transform = "translateX(-" + i + "px)";
      
      btnButton2.style.opacity = "1";
     } else {
       i = 0;
       ul.style.tranform = "translateX(-" + i + "px)";
       
       btnButton02.style.opacity = "0.2";
     }
  });


  var video = document.getElementById("big-screen-video");
  
  function Play() {
    if(video.paused){
      video.play();
      $('.video-wrapper.loaded').addClass('playing');
    } else {
      video.pause();
      $('.video-wrapper.loaded').removeClass('playing');
    }
  }
