// gallery modal slider
$('[data-fancybox="products-gallery"]').fancybox({
    buttons: ["close"],
    thumbs: {
        autoStart: true,
        axis: "x",
    },
    loop: false,
    protect: true,
    animationEffect: "fade",
    animationDuration: 300
  
});


$(document).ready(function () {
  
    // gallery carousel on mobile
    let rtlView = window.langify.locale.iso_code == "ar" ? true : false;
    function setupCarousel() {
      if ($(window).width() < 768) {
        $(".product-detail-images").owlCarousel({
          loop: false,
          rewind: false,
          nav: true,
          rtl: rtlView,
          // touchDrag: false,
          touchStart: true,
          responsive: {
            0: {
              items: 1,
            },
            727: {
              items: 4,
            },
          },
        });
      } else {
        // Destroy the carousel if the window width is greater than or equal to 767
        $(".product-detail-images").trigger("destroy.owl.carousel").removeClass("owl-carousel owl-loaded");
        $(".product-detail-images").find(".owl-stage-outer").children().unwrap();
      }
    }
    
    // Call the function on initial page load
    setupCarousel();
    
    // Call the function when the window is resized

     window.addEventListener("resize", (event) => {
          if(window.innerWidth < 767 ){
           setupCarousel();
        }
    });
     if ($(window).width() > 767) {
    // view more button

    var itemsCount = $(".product-detail-images .item").length;
        if((itemsCount) >= 4) {
            $(".product-detail-images").addClass("product-detail-expands");
            $(".product-detail-images .item").slice(4).hide();
            $(".product-detail-images .item:eq(3)").addClass("media-item-half");
            $(".media-view-btn").removeClass("hide");
        }

    $(".media-view-btn").click(function () {
        $(this).toggleClass("expend-view-btn");
        if ((itemsCount) >= 4) {
            $(".product-detail-images").toggleClass("product-detail-expands");
            $(".product-detail-images .item")
                .slice(4)
                .toggle(0, "swing", () => {
                    !$(".media-view-btn")[0].classList.contains("expend-view-btn") ? $(".media-view-btn")[0].scrollIntoView(false) : "";
                });
            $(".product-detail-images .item:eq(3)").toggleClass("media-item-half");
        }
    });

    // button on click video trigger
    $(".media-view-btn").one("click", function () {
        $(".play-pause-button").click();
    });

    }

   /*  description tab */

    // show the first tab and hide rest
      $(".product-tab-list li:first-child").addClass("active");
      $(".product-tab-content").hide();
      $(".product-tab-content:first").show();

    // click function
      $(".product-tab-list li").click(function(){
        $(".product-tab-list li").removeClass("active");
        $(this).addClass("active");
        $(".product-tab-content").hide();

        var activeTab = $(this).find('a').attr('href');
        $(activeTab).fadeIn();
        return false;
      }) 

    // contact accordion 
    $(".conatct-collapse-header").click(function(){
        $(".conatct-collapse-body").slideToggle();
        $(this).toggleClass("conatct-collapse-active")
    })

    // main accordion 
    $(".maintaince-collapse-header").click(function(){
        $(".maintaince-collapse-body").slideToggle();
        $(this).toggleClass("maintaince-collapse-active")
    })

    // product unit slider
    $(".product-unit-slider").owlCarousel({
          loop: true,
          rewind: false,
          nav: true,
          rtl: rtlView,
          autoHeight: true,
          // touchDrag: false,
          autoplay: true,
          autoplayTimeout: 3000,
          touchStart: true,
          responsive: {
            0: {
              items: 1,
            }
          },
        });
  
  
  
});

// vimeo viode custom play button
var iframe = document.querySelector("#vimeo-player iframe");
if (iframe) {
    var player = new Vimeo.Player(iframe);
    var playPauseButtons = document.getElementsByClassName("play-pause-button");
    var isPlaying = false;
    for (var i = 0; i < playPauseButtons.length; i++) {
        playPauseButtons[i].addEventListener("click", function () {
            if (isPlaying) {
                player.pause();
                this.classList.remove("hide-play-button");
            } else {
                player.play();
                this.classList.add("hide-play-button");
            }
            isPlaying = !isPlaying;
        });
    }
}


// pdp vimeo video autoplay





// recommedation slider js //
 const handleIntersection = (entries, observer) => {
    if (!entries[0].isIntersecting) return;
    observer.unobserve(productRecommendationsSection);
    const url = productRecommendationsSection.dataset.url;
    fetch(url)
      .then(response => response.text())
      .then(text => {
        const html = document.createElement('div');
        html.innerHTML = text;
        const recommendations = html.querySelector('.product-recommendations');

        if (recommendations && recommendations.innerHTML.trim().length) {
          productRecommendationsSection.innerHTML = recommendations.innerHTML;
           // recommend slider js //
          
             let rtlViews = window.langify.locale.iso_code == "ar" ? true : false;
              $('#shopify-section-product-recommendations .slides').owlCarousel({
            loop:false,
            nav:true,
            rtl:rtlViews,
            dots: false,
            responsive:{
                0:{
                    items:1.5,
                    loop:true,
                },
                600:{
                    items:3,
                },
                1000:{
                    items:3,
                }
            }
        })
             // disabled arrow //
            document.querySelector('div#product-recommendation-slider .owl-nav .owl-prev').style.opacity = 0;
            document.querySelector('div#product-recommendation-slider .owl-nav .owl-next').addEventListener("click",()=>{
                document.querySelector('div#product-recommendation-slider .owl-nav .owl-prev').style.opacity = 1;
            })
             document.querySelector('.recently-viewed .owl-nav .owl-prev').style.opacity = 0;
            document.querySelector(".recently-viewed .owl-nav .owl-next").addEventListener("click",()=>{
            document.querySelector(".recently-viewed .owl-nav .owl-prev").style.opacity = 1;
           });
       // add to cart event //
            document.addEventListener("click",(e)=>{
            if(e.target.classList.contains("recommendation-atc") || e.target.closest(".recommendation-atc")){
              //console.log(e.target.querySelector("span[data-add-to-cart-text]"),"jfdkjsf");
                let el = e.target.classList.contains("recommendation-atc") ? e.target : e.target.closest(".recommendation-atc");
               el.querySelector(".load-spinner").classList.remove("hide");           
              el.querySelector("span[data-add-to-cart-text]").style.display = "none";
                const myTimeoutFun = setTimeout(setTimeFun, 600);
                function setTimeFun() {
                 document.querySelector("#count_cart_text").click();
                 $('#miniCart').load(' #miniCart');
                  el.querySelector(".load-spinner").classList.add("hide");
                  el.querySelector("span[data-add-to-cart-text]").style.display = "block";
                }
              // 
              $("#miniCart").load(" #miniCart");
              let variant_id = e.target.closest(".recommendation-atc").getAttribute("data-variant");
              let qty = 1;
              addItemToCart(variant_id, qty);  

            // update cart bubble //
          
            // Fetch the cart data using the Fetch API
           $("#miniCart").load(" #miniCart");
                 fetch('/cart.js').then(res => res.json())
                   .then(data => {
                        if(data.item_count > 0){
                        document.querySelector("#CartCount span").textContent = data.item_count;
                        document.querySelector(".cart-popup__empty").classList.add("hide");
                        document.querySelector(".cart-popup__actions").classList.remove("hide");
                        }
                       })
      
                 function setCartlineItem(line_item,cartDrawerSelector) {
      var itemPric = parseFloat(line_item.line_price / 100);
                     itemPric = itemPric.toFixed(2);
          var cartContent = `<div data-cart-item-index="1" class="cart-popup-item   ">
                              <div class="cart-popup-item__image-wrapper" data-cart-popup-image-wrapper="">
                                <div class="cart-popup-item__image cart-popup-item__image--placeholder" data-cart-popup-image-placeholder="">
                                  <div data-placeholder-size=""> <img class="cart__image" src="${line_item.image.src}" alt="${line_item.image.alt}" data-cart-item-image=""></div>
                                  <div class="placeholder-background placeholder-background--animation"></div>
                                </div>
                              </div>
                              <div class="cart-popup-item__description">
                                <div>
                                  <div class="cart-popup-item__title" data-cart-popup-title="">${line_item.product.title}</div>
								  <div class="cart-product-type"></div>
           
            <div class="cart-product-price">Dhs. ${itemPric}</div>
            
								  
                                  <ul class="product-details" aria-label="Product details" data-cart-popup-product-details="">
                                   <li>
                                      <p class="minicart_remove">
                                        <a href="/cart/change?line=1&amp;quantity=0" class="text-link text-link--accent" data-mini-cart-remove=""><span>Remove</span></a>
                                      </p>
                                    </li>
                                  </ul>
                                    
                                </div>
                               <div class="cart-popup-item__quantity"> 
                                  <span class="visually-hidden" data-cart-popup-quantity-label=""></span>
                                  <span aria-hidden="true"><span>Qty</span>: <span>1</span></span>
                                  <span aria-hidden="true" data-cart-popup-quantity=""></span>
                                  <div class="product-quantity__buttons" data-cart-item-quantity="3" data-mini-cart-item="1" data-mini-cart-item-handle="william-backpack">
                                    <button aria-label="Decrease quantity William Backpack" aria-disabled="true" data-cart-quantity-action="decrease">
                                        <span class="icon css-avaj45 ej69fo90" color="black" role="img"><svg viewBox="0 0 288 288"><path d="M0 136h288v16H0v-16z"></path></svg></span>
                                    </button>
                                    <button aria-label="Increase quantity William Backpack" aria-disabled="false" data-cart-quantity-action="increase" disabled="">
                                       <span class="icon css-avaj45 ej69fo90" color="black" role="img"><svg viewBox="0 0 18 18"><path d="M8.47 8.47V0h1.06v8.47H18v1.06H9.53V18H8.47V9.53H0V8.47h8.47z"></path></svg></span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>`
    cartDrawerSelector.appendChild(cartContent)
            return image;
        }

       // cart update //

               function renderCart(){
                var minicartSelecter = document.querySelector('#miniCart')
                fetch('/cart.js').then((cart)=>{
                  minicartSelecter.innerHTML = '';
                  cart.items.forEach(function(line_item){
                    setCartlineItem(line_item,minicartSelecter)
                  })
                  // cartDrawerOpen()
                })
              }
            }
          })
        }
      })
      .catch(e => {
        console.error(e);
      });
  };

  const productRecommendationsSection = document.querySelector('.product-recommendations');
  const observer = new IntersectionObserver(handleIntersection, {rootMargin: '0px 0px 200px 0px'});

  observer.observe(productRecommendationsSection);

// cart Add to cart button //
   function addItemToCart(variant_id, qty) {
    data = {
      "id": variant_id,
      "quantity": qty,
    }
    jQuery.ajax({
      type: 'POST',
      url: '/cart/add.js',
      data: data,
      dataType: 'json',
      success: function() {
      }
    
    });
    
  }

// cart drawer //
 document.addEventListener("click",(e)=>{
if(e.target.classList.contains("minicart_remove") || e.target.closest(".minicart_remove")){
   let el = e.target.classList.contains("minicart_remove") ? e.target : e.target.closest(".minicart_remove");
    // console.log("sammer",el);
         fetch("/cart.js").then(res => res.json()).then(data => {if(data.item_count == 0){
              document.querySelector(".cart-popup__actions").classList.add("hide");
              document.querySelector(".cart-popup__empty").classList.remove("hide");
              //console.log(data.item_count,"data.item_count")
           }})

}
  });

// header height fixes //

let HeaderPdpHeight = document.querySelector("#shopify-section-header").offsetHeight;
window.addEventListener("resize", (event) => {
   HeaderPdpHeight =  document.querySelector("#shopify-section-header").offsetHeight;
   document.querySelector(".product-sticky-bar").style.top = HeaderPdpHeight + "px";
});

