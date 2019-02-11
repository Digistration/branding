// SAFARI HEIGHT ALLOWANCE
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

// JS MEDIA QUERY
var x = window.matchMedia("(max-width: 801px)")

// CHANGE JS PAGE TO MOBILE
function myFunction(x) {
  if (x.matches) {
    document.getElementsByClassName("mobile_slider")[0].removeAttribute("id");
    $('.logo').attr('class', 'shapeshifter_down');

// INITIAL LOGO TO ARROW ANIMATION ON LOAD
    setTimeout(function(){
      $('.shapeshifter_down').toggleClass('play_down')
    },1500);

// REMOVE DESKTOP SLIDER CODE
    $('#ms_css').remove();
    $('#ms_easing').remove();
    $('#ms_js').remove();
    $('#main').remove();

    $('.ms-left').addClass('top');
    $('.ms-left').removeClass('ms-left');
    $('.ms-right').addClass('bottom');
    $('.ms-right').removeClass('ms-right');

    $('.section1').addClass('sec1');
    $('.section1').removeClass('ms-section');
    $('.section1').removeClass('section1');
    $('.section2').addClass('sec2');
    $('.section2').removeClass('ms-section');
    $('.section2').removeClass('section2');
    $('.section3').addClass('sec3');
    $('.section3').removeClass('ms-section');
    $('.section3').removeClass('section3');
    $('.section4').addClass('sec4');
    $('.section4').removeClass('ms-section');
    $('.section4').removeClass('section4');
    $('.section5').addClass('sec5');
    $('.section5').removeClass('ms-section');
    $('.section5').removeClass('section5');
    $('.section6').addClass('sec6');
    $('.section6').removeClass('ms-section');
    $('.section6').removeClass('section6');
    $('.section7').addClass('sec7');
    $('.section7').removeClass('ms-section');
    $('.section7').removeClass('section7');
  }
}
myFunction(x);
x.addListener(myFunction)

// ADD MOBILE EVENT
document.getElementById("mob_btn").addEventListener("click", scroll1);

      function scroll1(){
// DISABLE CLICK EVENT
        document.getElementById("mob_btn").removeEventListener("click", scroll1);
// LOGO TO ARROW-DOWN ANIMATION ON CLICK
        $('.shapeshifter_down').toggleClass('play_down')
         $('.shapeshifter_down').toggleClass('reverse_down')
         setTimeout(function(){
           $('.shapeshifter_down').toggleClass('play_down')
           setTimeout(function(){
             $('.shapeshifter_down').toggleClass('reverse_down')
           },999);
         },1000);
// SLIDE FRAME 1-2
        $('.bottom .sec1').toggleClass('moving_right');
        $('.top .sec1').toggleClass('moving_left');
        setTimeout(function(){
// ACTIVATE NEW CLICK EVENT
          document.getElementById("mob_btn").addEventListener("click", scroll2);
        }, 2000);
      }

      function scroll2(){
        document.getElementById("mob_btn").removeEventListener("click", scroll2);
// LOGO TO ARROW-DOWN ANIMATION ON CLICK
        $('.shapeshifter_down').toggleClass('play_down')
         $('.shapeshifter_down').toggleClass('reverse_down')
         setTimeout(function(){
           $('.shapeshifter_down').toggleClass('play_down')
           setTimeout(function(){
             $('.shapeshifter_down').toggleClass('reverse_down')
           },999);
         },1000);
// SLIDE FRAME 2-3
        $('.bottom .sec2').toggleClass('moving_right');
        $('.top .sec2').toggleClass('moving_left');
        setTimeout(function(){
          document.getElementById("mob_btn").addEventListener("click", scroll3);
        }, 2000);
      }

      function scroll3(){
        document.getElementById("mob_btn").removeEventListener("click", scroll3);
// LOGO TO ARROW-DOWN ANIMATION ON CLICK
        $('.shapeshifter_down').toggleClass('play_down')
         $('.shapeshifter_down').toggleClass('reverse_down')
         setTimeout(function(){
           $('.shapeshifter_down').toggleClass('play_down')
           setTimeout(function(){
             $('.shapeshifter_down').toggleClass('reverse_down')
           },999);
         },1000);
// SLIDE FRAME 3-4
        $('.bottom .sec3').toggleClass('moving_right');
        $('.top .sec3').toggleClass('moving_left');
        setTimeout(function(){
          document.getElementById("mob_btn").addEventListener("click", scroll4);
        }, 2000);
      }

      function scroll4(){
        document.getElementById("mob_btn").removeEventListener("click", scroll4);
// LOGO TO ARROW-DOWN ANIMATION ON CLICK
        $('.shapeshifter_down').toggleClass('play_down')
         $('.shapeshifter_down').toggleClass('reverse_down')
         setTimeout(function(){
           $('.shapeshifter_down').toggleClass('play_down')
           setTimeout(function(){
             $('.shapeshifter_down').toggleClass('reverse_down')
           },999);
         },1000);
// SLIDE FRAME 4-5
        $('.bottom .sec4').toggleClass('moving_right');
        $('.top .sec4').toggleClass('moving_left');
        setTimeout(function(){
          document.getElementById("mob_btn").addEventListener("click", scroll5);
        }, 2000);
      }

      function scroll5(){
        document.getElementById("mob_btn").removeEventListener("click", scroll5);
// LOGO TO ARROW-DOWN ANIMATION ON CLICK
        $('.shapeshifter_down').toggleClass('play_down')
         $('.shapeshifter_down').toggleClass('reverse_down')
         setTimeout(function(){
           $('.shapeshifter_down').toggleClass('play_down')
           setTimeout(function(){
             $('.shapeshifter_down').toggleClass('reverse_down')
           },999);
         },1000);
// SLIDE FRAME 5-6
        $('.bottom .sec5').toggleClass('moving_right');
        $('.top .sec5').toggleClass('moving_left');
        setTimeout(function(){
          document.getElementById("mob_btn").addEventListener("click", scroll6);
        }, 2000);
      }

      function scroll6(){
        document.getElementById("mob_btn").removeEventListener("click", scroll6);
// LOGO TO ARROW-DOWN ANIMATION ON CLICK
        $('.shapeshifter_down').toggleClass('play_down')
         $('.shapeshifter_down').toggleClass('reverse_down')
         setTimeout(function(){
           $('.shapeshifter_down').toggleClass('play_down')
           setTimeout(function(){
             $('.shapeshifter_down').attr('class', 'shapeshifter_up')
             $('.shapeshifter_up').toggleClass('play_up')
           },999);
         },1000);
// SLIDE FRAME 6-7
        $('.bottom .sec6').toggleClass('moving_right');
        $('.top .sec6').toggleClass('moving_left');
        setTimeout(function(){
          document.getElementById("mob_btn").addEventListener("click", scroll7);
        }, 2000);
      }

      function scroll7(){
        document.getElementById("mob_btn").removeEventListener("click", scroll7);
// LOGO TO ARROW-DOWN ANIMATION ON CLICK
        $('.shapeshifter_up').toggleClass('play_up')
        $('.shapeshifter_up').toggleClass('reverse_up')
         setTimeout(function(){
           $('.shapeshifter_up').toggleClass('play_up')
           setTimeout(function(){
             $('.shapeshifter_up').toggleClass('reverse_up')
           },999);
         },1000);
// SLIDE FRAME 7-6
        $('.bottom .sec6').css('z-index', '55');
        $('.top .sec6').css('z-index', '55');
        $('.bottom .sec6').toggleClass('moving_right');
        $('.top .sec6').toggleClass('moving_left');
        $('.bottom .sec7').toggleClass('moving_right');
        $('.top .sec7').toggleClass('moving_left');
        setTimeout(function(){
          document.getElementById("mob_btn").addEventListener("click", scroll8);
        }, 2000);
      }

      function scroll8(){
        document.getElementById("mob_btn").removeEventListener("click", scroll8);
// LOGO TO ARROW-DOWN ANIMATION ON CLICK
        $('.shapeshifter_up').toggleClass('play_up')
         $('.shapeshifter_up').toggleClass('reverse_up')
         setTimeout(function(){
           $('.shapeshifter_up').toggleClass('play_up')
           setTimeout(function(){
             $('.shapeshifter_up').toggleClass('reverse_up')
           },999);
         },1000);
// SLIDE FRAME 6-5
        $('.bottom .sec5').css('z-index', '50');
        $('.top .sec5').css('z-index', '50');
        $('.bottom .sec5').toggleClass('moving_right');
        $('.top .sec5').toggleClass('moving_left');
        $('.bottom .sec6').toggleClass('moving_right');
        $('.top .sec6').toggleClass('moving_left');
        setTimeout(function(){
          document.getElementById("mob_btn").addEventListener("click", scroll9);
        }, 2000);
      }

      function scroll9(){
        document.getElementById("mob_btn").removeEventListener("click", scroll9);
// LOGO TO ARROW-DOWN ANIMATION ON CLICK
        $('.shapeshifter_up').toggleClass('play_up')
         $('.shapeshifter_up').toggleClass('reverse_up')
         setTimeout(function(){
           $('.shapeshifter_up').toggleClass('play_up')
           setTimeout(function(){
             $('.shapeshifter_up').toggleClass('reverse_up')
           },999);
         },1000);
// SLIDE FRAME 5-4
        $('.bottom .sec4').css('z-index', '45');
        $('.top .sec4').css('z-index', '45');
        $('.bottom .sec4').toggleClass('moving_right');
        $('.top .sec4').toggleClass('moving_left');
        $('.bottom .sec5').toggleClass('moving_right');
        $('.top .sec5').toggleClass('moving_left');
        setTimeout(function(){
          document.getElementById("mob_btn").addEventListener("click", scroll10);
        }, 2000);
      }

      function scroll10(){
        document.getElementById("mob_btn").removeEventListener("click", scroll10);
// LOGO TO ARROW-DOWN ANIMATION ON CLICK
        $('.shapeshifter_up').toggleClass('play_up')
         $('.shapeshifter_up').toggleClass('reverse_up')
         setTimeout(function(){
           $('.shapeshifter_up').toggleClass('play_up')
           setTimeout(function(){
             $('.shapeshifter_up').toggleClass('reverse_up')
           },999);
         },1000);
// SLIDE FRAME 4-3
        $('.bottom .sec3').css('z-index', '40');
        $('.top .sec3').css('z-index', '40');
        $('.bottom .sec3').toggleClass('moving_right');
        $('.top .sec3').toggleClass('moving_left');
        $('.bottom .sec4').toggleClass('moving_right');
        $('.top .sec4').toggleClass('moving_left');
        setTimeout(function(){
          document.getElementById("mob_btn").addEventListener("click", scroll11);
        }, 2000);
      }

      function scroll11(){
        document.getElementById("mob_btn").removeEventListener("click", scroll11);
// LOGO TO ARROW-DOWN ANIMATION ON CLICK
        $('.shapeshifter_up').toggleClass('play_up')
         $('.shapeshifter_up').toggleClass('reverse_up')
         setTimeout(function(){
           $('.shapeshifter_up').toggleClass('play_up')
           setTimeout(function(){
             $('.shapeshifter_up').toggleClass('reverse_up')
           },999);
         },1000);
// SLIDE FRAME 3-2
        $('.bottom .sec2').css('z-index', '40');
        $('.top .sec2').css('z-index', '40');
        $('.bottom .sec2').toggleClass('moving_right');
        $('.top .sec2').toggleClass('moving_left');
        $('.bottom .sec3').toggleClass('moving_right');
        $('.top .sec3').toggleClass('moving_left');
        setTimeout(function(){
          document.getElementById("mob_btn").addEventListener("click", scroll12);
        }, 2000);
      }

      function scroll12(){
        document.getElementById("mob_btn").removeEventListener("click", scroll12);
// LOGO TO ARROW-DOWN ANIMATION ON CLICK
        $('.shapeshifter_up').toggleClass('play_up')
         $('.shapeshifter_up').toggleClass('reverse_up')
         setTimeout(function(){
           $('.shapeshifter_up').toggleClass('play_up')
           setTimeout(function(){
             $('.shapeshifter_up').toggleClass('reverse_up')
           },999);
         },1000);
// SLIDE FRAME 2-1
        $('.bottom .sec1').css('z-index', '35');
        $('.top .sec1').css('z-index', '35');
        $('.bottom .sec1').toggleClass('moving_right');
        $('.top .sec1').toggleClass('moving_left');
        $('.bottom .sec2').toggleClass('moving_right');
        $('.top .sec2').toggleClass('moving_left');
// RESET SLIDER TO BACK DOWN
        setTimeout(function(){
          document.getElementById("mob_btn").addEventListener("click", scroll1);
          $('.bottom .sec1').css('z-index', '90');
          $('.top .sec1').css('z-index', '90');
          $('.bottom .sec2').css('z-index', '85');
          $('.top .sec2').css('z-index', '85');
          $('.bottom .sec3').css('z-index', '80');
          $('.top .sec3').css('z-index', '80');
          $('.bottom .sec4').css('z-index', '75');
          $('.top .sec4').css('z-index', '75');
          $('.bottom .sec5').css('z-index', '70');
          $('.top .sec5').css('z-index', '70');
          $('.bottom .sec6').css('z-index', '65');
          $('.top .sec6').css('z-index', '65');
          $('.bottom .sec7').css('z-index', '60');
          $('.top .sec7').css('z-index', '60');

          $('.bottom .sec2').toggleClass('moving_right');
          $('.top .sec2').toggleClass('moving_left');
          $('.bottom .sec3').toggleClass('moving_right');
          $('.top .sec3').toggleClass('moving_left');
          $('.bottom .sec4').toggleClass('moving_right');
          $('.top .sec4').toggleClass('moving_left');
          $('.bottom .sec5').toggleClass('moving_right');
          $('.top .sec5').toggleClass('moving_left');
          $('.bottom .sec6').toggleClass('moving_right');
          $('.top .sec6').toggleClass('moving_left');
          $('.bottom .sec7').toggleClass('moving_right');
          $('.top .sec7').toggleClass('moving_left');

// RESET LOGO ANIMATION BACK TO DOWN ARROW
          $('.shapeshifter_up').attr('class', 'shapeshifter_down')
          $('.shapeshifter_down').toggleClass('play_down')
        }, 2000);
      }
