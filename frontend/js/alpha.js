
$( document ).ready(function() {

  
  
    var slidesToShowexp = 4,slidesToScrollexp = 1;

  if($(window).width()>1024){
    slidesToShowexp = 4, slidesToScrollexp = 1;
  } else if($(window).width()<=1024 && $(window).width()>600){
    slidesToShowexp = 3, slidesToScrollexp = 1;
  } else if($(window).width()<=600 && $(window).width()>480){
    slidesToShowexp = 2, slidesToScrollexp = 1;
  } else {
    slidesToShowexp = 1, slidesToScrollexp = 1;
  }
 var kk = $('#aplhaone .pro_count').length;
  if(kk>4){
  $('#aplhaone .explore-slider .explore-row').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: slidesToShowexp,
    slidesToScroll:slidesToScrollexp,
  });
  }
  
  var hh = $('#aplhathree .pro_count').length;
  if(hh>4){
  $('#aplhathree .explore-slider .explore-row').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: slidesToShowexp,
    slidesToScroll:slidesToScrollexp,
  });
  }
  
  
  
  
  var slidesToShowdic = 4,slidesToScrolldic = 1;

  if($(window).width()>1024){
    slidesToShowdic = 4, slidesToScrolldic = 1;
  } else if($(window).width()<=1024 && $(window).width()>600){
    slidesToShowdic = 3, slidesToScrolldic = 1;
  } else if($(window).width()<=600 && $(window).width()>480){
    slidesToShowdic = 2, slidesToScrolldic = 1;
  } else {
    slidesToShowdic = 1, slidesToScrolldic = 1;
  }
  $('.discover-slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: slidesToShowdic,
    slidesToScroll:slidesToScrolldic,
  });
  
  
  
    var slidesToShowtrl = 4,slidesToScrolltrl = 1;

  if($(window).width()>1024){
    slidesToShowtrl = 4, slidesToScrolltrl = 1;
  } else if($(window).width()<=1024 && $(window).width()>600){
    slidesToShowtrl = 3, slidesToScrolltrl = 1;
  } else if($(window).width()<=600 && $(window).width()>480){
    slidesToShowtrl = 2, slidesToScrolltrl = 1;
  } else {
    slidesToShowtrl = 1, slidesToScrolltrl = 1;
  }
  $('.travel-slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: slidesToShowtrl,
    slidesToScroll:slidesToScrolltrl,
  });

});



 