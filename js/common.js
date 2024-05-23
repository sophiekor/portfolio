//main
setTimeout(function() {
  document.querySelector('#header .main .first').classList.add('show');
}, 1000);
setTimeout(function() {
  document.querySelector('#header .main .second').classList.add('show');
}, 1500);
setTimeout(function() {
  document.querySelector('#header .main .third').classList.add('show');
}, 2000);
setTimeout(function() {
  document.querySelector('#header .main .fourth').classList.add('show');
}, 2500);
setTimeout(function() {
  document.querySelector('#header .aside').classList.add('show');
}, 1000);
setTimeout(function() {
  document.querySelector('#header .menu-ico').classList.add('on');
}, 3000);

//menu-ico
$('document').ready(function () {
    var Closed = false;
  
    $('.hamburger').click(function () {
      if (Closed == true) {
        $(this).removeClass('open');
        $(this).addClass('closed');
        Closed = false;
      } else {               
        $(this).removeClass('closed');
        $(this).addClass('open');
        Closed = true;
      }
    });
  });

// acodian menu-new
$(function(){ 
    $("#header .menu-ico").on("click",function(){
      $(".menu").toggleClass("on"); 
    }); 
});


//스크롤시 메뉴버튼 색변화

var cont = $("#contents > section");
var menuBtn = $(".menu-ico");
var textA = $(".textA");
var textB = $(".textB");
var textC = $(".textC");
var works = $(".effect");


$(window).scroll(function(){
  var wScroll = $(this).scrollTop();
  
  if(wScroll >= cont.eq(0).offset().top *1.2){
      menuBtn.removeClass("show");
      textA.addClass("show");
  }else{textA.removeClass("show");}
  if(wScroll >= cont.eq(0).offset().top *1.8){
    menuBtn.removeClass("show");
    textB.addClass("show");
  }else{textB.removeClass("show");}
  if(wScroll >= cont.eq(0).offset().top *2){
    menuBtn.removeClass("show");
    textC.addClass("show");
  }else{textC.removeClass("show");}

  if(wScroll >= cont.eq(1).offset().top -200){
      menuBtn.removeClass("show");
      menuBtn.eq(0).addClass("show");
      textB.removeClass("show");
      textC.removeClass("show");
      works.addClass("show");
  }else{works.removeClass("show");}

  if(wScroll >= cont.eq(2).offset().top -200){
      menuBtn.removeClass("show");
      works.removeClass("show");
  }
});


//scroll

(function() {

  // const scrollElem = document.querySelector('.scroll-position');
  const aboutElem = document.querySelector('#about > h1');
  
  let num = 0;

  // window.addEventListener('scroll', function() {
  //   scrollElem.innerHTML = window.pageYOffset;
  // });

  function showValue() {
    let posY = aboutElem.getBoundingClientRect().top;

    if (posY < window.innerHeight * 0.4) {
      aboutElem.classList.add('on');
    } else {
      aboutElem.classList.remove('on');
    }
  }

  window.addEventListener('scroll', function() {
    showValue();
  });

  showValue();

})();

