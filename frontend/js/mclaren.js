//window.onload = function(e){ 
var videoId = "504681517";
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
var sticky = '';
var $menu = document.querySelector(".sticky_menu")
// AOS.init({ duration: 800 });
var $menufind = setInterval(function() {
    $menu = document.querySelector(".sticky_menu");
    if ($menu) {
        clearInterval($menufind);
        sticky = $menu.offsetTop;
    }
}, 100);

function animateCSS(e, t, s = "animate__") {
    return new Promise((i, o) => {
        const n = `${s}${t}`, a = document.querySelector(e);
        a.classList.add(`${s}animated`, n);
        a.addEventListener("animationend", function(e) {
            e.stopPropagation(), a.classList.remove(`${s}animated`, n), i("Animation ended");
          }, { once: !0 }
        );
    });
}

function stickyMenu() {
  console.log($('[data-section-id="header"]').outerHeight(true),window.scrollY,"=========>",$('[data-section-id="header"]').outerHeight(true)<window.scrollY)
  if($('[data-section-id="header"]').outerHeight(true)<window.scrollY) {
    $(".sticky_menu").addClass("sticky");
  } else {
    $(".sticky_menu").removeClass("sticky");
  }
//     if (typeof sticky == "number") {
//         window.pageYOffset >= sticky ? $menu.classList.add("sticky") : $menu.classList.remove("sticky");
//     }
}

function Dimension(e) {
    var t, s;
    return (
        document.all ?
        ((t = e.offsetHeight), (s = parseInt(e.currentStyle.marginTop, 10) + parseInt(e.currentStyle.marginBottom, 10))) :
        ((t = e.offsetHeight), (s = parseInt(document.defaultView.getComputedStyle(e, "").getPropertyValue("margin-top")) + parseInt(document.defaultView.getComputedStyle(e, "").getPropertyValue("margin-bottom")))),
        t + s
    );
}

function toggleMenu() {
    document.querySelector(".hamburger").classList.toggle("is-active"), document.querySelector(".sticky_menu").classList.toggle("opened");
}
var images = new Array();

function preload() {
    for (i = 0; i < preload.arguments.length; i++)(images[i] = new Image()), (images[i].src = preload.arguments[i]);
}

function scrollPos() {
    var e = this.getAttribute("href"),
        t = document.querySelector(e);
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? (zenscroll.to(t), "#video" != e && toggleMenu()) : zenscroll.center(t);
}
//preload("img/bag1.png", "img/bag2.png", "img/bag3.png", "img/bag4.png", "img/bag5.png"),
(window.onscroll = function() { 
  if($(".intro_con.aos-animate").length){
    $(".line.line1").addClass("animate__animated animate__slideInRight");
  } else {
    $(".line.line1").removeClass("animate__animated animate__slideInRight");
  }
    if($(".intro_txt.aos-animate").length){
    $(".line.line2").addClass("animate__animated animate__slideInRight");
  } else {
    $(".line.line2").removeClass("animate__animated animate__slideInRight");
  }
  
      if($(".car_box_zoom.aos-animate").length){
    $(".car_box.zoom-img").addClass("animate__animated animate__zoomImg");
  } else {
    $(".car_box.zoom-img").removeClass("animate__animated animate__zoomImg");
  }
  
    stickyMenu();
});
var demo = "",
    $anchors = document.querySelectorAll("a[data-scroll]");
$anchors.forEach((e) => {
    e.addEventListener("click", scrollPos);
});
var int = setInterval(() => {
    if ($('.glide').length > 0) {
        clearInterval(int);
      /* -------------- Resize Trigger Start ---------------*/
        var resizeEvent = window.document.createEvent('UIEvents');
        resizeEvent.initUIEvent('resize', true, false, window, 0);
        window.dispatchEvent(resizeEvent);
      /* -------------- Resize Trigger Start ---------------*/
        $(".glide").slick({
            centerMode: !0,
            centerPadding: "30%",
            slidesToShow: 1,
            arrows: !1,
            infinite: !0,
            autoplay: !0,
            autoplaySpeed: 800,
            responsive: [{
                    breakpoint: 768,
                    settings: {
                        centerPadding: "10%",
                        slidesToShow: 1
                    }
                }, {
                    breakpoint: 480,
                    settings: {
                        centerPadding: "15%",
                        slidesToShow: 1
                    }
                },
            ],
        });
        $(".case_txt_slide").slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: !1,
                fade: !0,
                infinite: !1,
                asNavFor: ".glide_case"
            });
              
             $(".glide_case").slick({
                centerMode: !0,
                centerPadding: "15%",
                slidesToShow: 3,
                asNavFor: ".case_txt_slide",
                arrows: !1,
                infinite: !1,
                responsive: [{
                        breakpoint: 768,
                        settings: {
                            centerPadding: "30%",
                            slidesToShow: 1
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            centerPadding: "5%",
                            slidesToShow: 1
                        }
                    },
                ],
            });

    }
}, 500);
                         

document.addEventListener("aos:in:zoom-img", ({
        detail: e
    }) => {
        animateCSS("." + e.dataset.aosId, "zoomImg");
    }),
    document.addEventListener("aos:in:car_slide", ({
        detail: e
    }) => {
        animateCSS(".line2", "slideInRight");
    }),
    document.addEventListener("aos:in:super-duper", ({
        detail: e
    }) => {
        animateCSS(".line", "slideInRight");
    });
document.addEventListener('aos:out', ({ detail }) => {
  console.log('animated out', detail);
})
document.addEventListener('aos:in', ({ detail }) => {
  console.log('animated In', detail);
})
$(".glide_case").on("beforeChange", function(e, t, s, i) {
    var o = t.$slides;
    switch (i) {
        case 0:
            $(o[0]).css({
                top: "0"
            }), $(o[1]).css({
                top: "-20px"
            }), $(o[2]).css({
                top: "-40px"
            }), $(o[3]).css({
                top: "-60px"
            });
            break;
        case 1:
            $(o[0]).css({
                top: "-20px"
            }), $(o[2]).css({
                top: "-20px"
            }), $(o[1]).css({
                top: "0"
            }), $(o[3]).css({
                top: "-40px"
            }), $(o[4]).css({
                top: "-60px"
            });
            break;
        case 2:
            $(o[1]).css({
                top: "-20px"
            }), $(o[3]).css({
                top: "-20px"
            }), $(o[2]).css({
                top: "0"
            }), $(o[0]).css({
                top: "-40px"
            }), $(o[4]).css({
                top: "-40px"
            });
            break;
        case 3:
            $(o[2]).css({
                top: "-20px"
            }), $(o[4]).css({
                top: "-20px"
            }), $(o[3]).css({
                top: "0"
            }), $(o[1]).css({
                top: "-40px"
            }), $(o[0]).css({
                top: "-60px"
            });
            break;
        case 4:
            $(o[3]).css({
                top: "-20px"
            }), $(o[4]).css({
                top: "0"
            }), $(o[2]).css({
                top: "-40px"
            }), $(o[1]).css({
                top: "-60px"
            });
            break;
        default:
            $(o[0]).css({
                top: "0"
            }), $(o[1]).css({
                top: "-20px"
            }), $(o[2]).css({
                top: "-40px"
            }), $(o[3]).css({
                top: "-60px"
            });
    }
});
const slider = $(".glide_case");
$(".case_box").on("wheel", function(e) {
    var t = slider[0].slick.slideCount,
        s = slider.slick("slickCurrentSlide");
    if (e.originalEvent.deltaY < 0);
    else {
        if (t - s == 1) return;
        e.preventDefault(), slider.slick("slickNext");
    }
});   