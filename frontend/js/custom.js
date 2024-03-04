/*****POPUP JS code goes here *********/
$(document).ready(function(){
  $(function(){

    //     setInterval(()=>{
    //                 $('.popup-onload').show();
    //   }, 1000 * 60 * 5 ); // opens a pop-up on every 12th second

    //   $('.close').click(function(e){
    //     e.preventDefault();
    //     $('.popup-onload').hide();
    //     overlay.appendTo(document.body).remove();
    //     //return false;
    //   });

    // $('.popup-onload').show();
    //$('.close').click(function(e){
    //e.preventDefault();
    //$('.popup-onload').hide();
  });

  $('.tabbing-section-field').click(function(){
    $(".product-single__field").toggle();
    $(this).toggleClass("active");
  })  


  var customVal = setInterval(function(){
    if(jQuery(".custom-countapp").length && jQuery(".custom-instock").length) {
      clearInterval(customVal);
      jQuery(".custom-instock").text(jQuery(".custom-countapp").text() +" ");

    }
  },100);


  /* 31-Aug  */

  var slidesToShow = 4,slidesToScroll = 1;

  if($(window).width()>1024){
    slidesToShow = 4, slidesToScroll = 1;
  } else if($(window).width()<=1024 && $(window).width()>600){
    slidesToShow = 3, slidesToScroll = 1;
  } else if($(window).width()<=600 && $(window).width()>480){
    slidesToShow = 2, slidesToScroll = 1;
  } else {
    slidesToShow = 1, slidesToScroll = 1;
  }
  $('.custom-pro-loop').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: slidesToShow,
    slidesToScroll:slidesToScroll,
  });
  setTimeout(function(){
    $('.wrap-pro-slider').css({
      'opacity' :1 
    })          
  },0);



  $(function() {
    $('a[href*=\\#]:not([href=\\#])').on('click', function() {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.substr(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    });
  });


  // gift slider js 

  var slidesToShowone = 5,slidesToScrollone = 1;

  if($(window).width()>1024){
    slidesToShowone = 5, slidesToScrollone = 1;
  } else if($(window).width()<=1024 && $(window).width()>768){
    slidesToShowone = 5, slidesToScrollone = 1;
  } else if($(window).width()<=767 && $(window).width()>480){
    slidesToShowone = 2, slidesToScrollone = 1;
  } else {
    slidesToShowone = 2, slidesToScrollone = 1;
  }


  $('.gift-for-him').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: slidesToShowone,
    slidesToScroll: slidesToScrollone,
    arrows:true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: slidesToShowone,
          slidesToScroll: slidesToScrollone,
          infinite: true,
          dots: false
        }
      }
    ]
  });

  //  modal popup js

  jQuery(".show-pop").click(function(){
    jQuery(".my-modal-overlay").addClass("modal-overlay-show");
    jQuery(".my-modal").addClass("my-modal-show");
  })

  jQuery(".close-md").click(function(){ 
    jQuery(".my-modal-overlay").removeClass("modal-overlay-show");
    jQuery(".my-modal").removeClass("my-modal-show");
  })


  // search scrolltop js
  $(window).scroll(function(){
    var headerHeight = $('header'). outerHeight();
    if ($(window). scrollTop() > headerHeight) {
      $('#ui-id-2, #ui-id-1').addClass('serachresult-sticky');
    } else if ($(window).scrollTop() < headerHeight){
      $('#ui-id-2, #ui-id-1').removeClass('serachresult-sticky');
    }
  }); 
  
  
  
  // recent views js start
  
  setInterval(function(){
    if(jQuery('div#recently-viewed-products div').length < 1){
      jQuery('.pdp-recent').addClass('pdp-recent-hide');
    }
    else{
      jQuery('pdp-recent').removeClass('pdp-recent-hide');
    }
  }, 1000);


  var slidesToShowonerec = 3,slidesToScrollonerec = 1;
  if($(window).width()>767){
    slidesToShowonerec = 3, slidesToScrollonerec = 1;
  } else {
    slidesToShowonerec = 2, slidesToScrollonerec = 1;
  }


  var aaaa = setInterval(()=>{
	//console.log("$('.recent-wrap div.grid__item').length" , $('.recent-wrap div.grid__item').length);
	if($('.recent-wrap div.grid__item') && $('.recent-wrap div.grid__item').length) {
    clearInterval(aaaa); 

    $('.recent-wrap').slick({
      dots: false,
      infinite: false,
      arrows:false,
      speed: 300,
      centerMode: true,
      slidesToShow: slidesToShowonerec,
      slidesToScroll: slidesToScrollonerec,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: slidesToShowonerec,
            slidesToScroll: slidesToScrollonerec,
            infinite: true,
            dots: false,
            arrows:false
          }
        }
      ]
    });
  }
},3000);
  

// recent views js end
  



});


/*21-03-2022*/

if($(window).width()<750){

  $(".site-footer h4, .site-footer .h4").on("click",function(){
    if($(this).hasClass("active")){
      $(".site-footer h4, .site-footer .h4").removeClass("active");
      $(".site-footer__linklist").slideUp();
    } else {
      $(".site-footer h4, .site-footer .h4").removeClass("active");
      $(".site-footer__linklist").slideUp();
      $(this).addClass("active");
      $(this).nextAll(".site-footer__linklist").slideDown();
    }
  });
}

$(window).scroll(function(){
  if($(this).scrollTop()>=$("#shopify-section-header").outerHeight()){
    $("#shopify-section-header").addClass("sticky");
  } else {
    $("#shopify-section-header").removeClass("sticky");
  };
});



$(".site-header__icons-wrapper .site-header__icon.js-drawer-open-top").on("click",function(e){
  e.stopPropagation();
  $("body").addClass("js-drawer-open-top");
  if($("#shopify-section-header").hasClass('sticky')){
    $("body").addClass("js-sticky-open");
  }
  else{
    $("body").removeClass("js-sticky-open");
  }
  $(".search-bar__form input.search-form__input.search-bar__input").focus();
});
$(".search-form input").on("click keyup",function(e) {
  e.stopPropagation();
});
$("body, .js-drawer-close").on("click",function() {
  $("body").removeClass("js-drawer-open-top");
});



//hover effect on navigation

if($(window).width()>750){
  jQuery(".site-nav > li").hover(function() {
    jQuery(".site-nav--has-dropdown").find(".site-nav__childlist").css({"opacity":0});
    jQuery(".site-nav--has-dropdown").find(".site-nav__dropdown").css({"z-index":""});
    //console.log(jQuery(this).find(".site-nav__dropdown"));
    if(jQuery(this).find(".site-nav__dropdown").length) {
      jQuery(this).addClass("active-current");
      jQuery(this).find(".site-nav__dropdown").css({"z-index":9,"opacity":1}).show();
      jQuery(this).find(".site-nav__childlist").css({"opacity":1});
    } else {        
      jQuery(".site-nav--has-dropdown").find(".site-nav__dropdown").css({"opacity":0,"z-index":""}).hide();
      jQuery(".site-nav--has-dropdown").removeClass("active-current");
    }

  },function() {
    jQuery(this).find(".site-nav__childlist").css("opacity",0);
  });
  $("#SiteNav").hover(function() {

  },function() {
    $(this).find(".site-nav__childlist").css("opacity",0); 
    $(this).find(".site-nav--has-dropdown").removeClass("active-current site-nav--active-dropdown").find(".site-nav__dropdown").hide().css({
      "opacity":0,
      "z-index":""
    });
  });
}



// replace arabic in ar

$(".ly-inner-text").text(function () {
    return $(this).text().replace("Arabic", "العربية"); 
});