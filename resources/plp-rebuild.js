// plp product-card change image //

document.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("spf-image-wrapper-change") || e.target.closest(".spf-image-wrapper-change")) {
   let el = e.target.classList.contains('spf-image-wrapper-change') ? e.target : e.target.closest('.spf-image-wrapper-change');
   let sliderContent = el.querySelectorAll(".spf-product-card__image-change");   
     for(let item of sliderContent){
      item.addEventListener("mouseenter",()=>{
      // dots change //
      let dataDotEle = el.parentNode.parentNode.querySelector(`div[data-count="${e.target.dataset.imgCount}"]`);
       let dotEle = el.parentNode.parentNode.querySelectorAll(".product-card_dot");
        // console.log(el.parentNode.parentNode,"parenNode")
        dotEle.forEach(dot => dot.classList.remove('active'));
        dataDotEle.classList.add("active");

       // image change //
         let imageEle = el.parentNode.querySelector(`img[data-img-count="${e.target.dataset.imgCount}"]`);
         let imgEleChange = el.parentNode.querySelectorAll(".spf-product-card__image");
          imgEleChange.forEach((itemImg) => {
             itemImg.classList.remove('spf-product-card__image-main');
             itemImg.classList.add('spf-product-card__image-hidden');
          });
          imageEle.classList.contains("spf-product-card__image-hidden") ? imageEle.classList.remove("spf-product-card__image-hidden") :imageEle.classList.add("spf-product-card__image-main")
          imageEle.classList.contains("spf-product-card__image-secondary") ? imageEle.classList.remove("spf-product-card__image-secondary") :imageEle.classList.add("spf-product-card__image-main")
      })
      
     }
  }
});

// plp add to cart //
document.addEventListener('click',(e)=>{
    if(e.target.classList.contains('spf-product__form-btn-addtocart') || e.target.closest('.spf-product__form-btn-addtocart')){ 
      e.preventDefault();
      // console.log(e.target.parentNode)
        e.target.parentNode.querySelector(".plp_addToCart").classList.add("hide");
                  e.target.parentNode.querySelector(".loader").classList.remove("hide");
                setTimeout(()=>{
                 $('#miniCart').load(' #miniCart');
                    document.querySelector("#count_cart_text").click();
                  e.target.parentNode.querySelector(".plp_addToCart").classList.remove("hide");
                  e.target.parentNode.querySelector(".loader").classList.add("hide");
                },1000);
               
      
              $("#miniCart").load(" #miniCart");
              let variant_id = e.target.closest(".spf-product__form-btn-addtocart").getAttribute("data-variant");
              let qty = 1;
              addItemToCart(variant_id, qty);  

            // update cart bubble //
          
            // Fetch the cart data using the Fetch API
           $("#miniCart").load(" #miniCart");
          setInterval(function() {
                 fetch('/cart.js').then(res => res.json())
                   .then(data => {
                        if(data.item_count > 0){
                        // document.querySelector("#CartCount span").textContent = data.item_count;
                        document.querySelector(".cart-popup__empty").classList.add("hide");
                        document.querySelector(".cart-popup__actions").classList.remove("hide");
                        }
                       })
          }, 1000);
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



// you may also like //
document.addEventListener("click",(e)=>{
  if(e.target.classList.contains('available plp-recommendation_btn') || e.target.closest('.available.plp-recommendation_btn')){
    let el = e.target.classList.contains('available plp-recommendation_btn') ? e.target : e.target.closest('.available.plp-recommendation_btn');
    el.querySelector(".plpAddtoCart").classList.add("hide");
                  el.querySelector(".load-spinner").classList.remove("hide");
                const myTimeoutFun = setTimeout(setTimeFun, 1500);
                function setTimeFun() {
                 $('#miniCart').load(' #miniCart');
                    document.querySelector("#count_cart_text").click();
                  el.querySelector(".plpAddtoCart").classList.remove("hide");
                  el.querySelector(".load-spinner").classList.add("hide");
                }
               
      
              $("#miniCart").load(" #miniCart");
              let variant_id = e.target.closest(".plp-recommendation_btn").getAttribute("data-variant");
              let qty = 1;
              likeToCart(variant_id, qty);  

            // update cart bubble //
          
            // Fetch the cart data using the Fetch API
           $("#miniCart").load(" #miniCart");
          setInterval(function() {
                 fetch('/cart.js').then(res => res.json())
                   .then(data => {
                        if(data.item_count > 0){
                        // document.querySelector("#CartCount span").textContent = data.item_count;
                        document.querySelector(".cart-popup__empty").classList.add("hide");
                        document.querySelector(".cart-popup__actions").classList.remove("hide");
                        }
                       })
          }, 1000);
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
  });

// you may also Add to cart button //
   function likeToCart(variant_id, qty) {
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
// plp notify me click //
document.addEventListener("click",(e)=>{
  if(e.target.classList.contains('notify_me plp-recommendation_btn') || e.target.closest('.notify_me.plp-recommendation_btn')){
    let el = e.target.classList.contains('notify plp-recommendation_btn') ? e.target : e.target.closest('.notify_me.plp-recommendation_btn');
   el.closest(".recent_atc-btn").querySelector(".notify_me-btn").click();
    let sam = document.querySelectorAll("#BIS_frame");
    let couterSam = document.querySelectorAll("#BIS_frame").length;
     if(couterSam >= 2 ){
      for(let item of sam){
          item.style.display = "none";
      }
    }
    }
  });

// sticky compare product //
document.addEventListener("click",(e)=>{
  if(e.target.classList.contains('checkbox-comparition') || e.target.closest('.compair-wrapper_list.checkbox')){
    let el = e.target.classList.contains('checkbox-comparition') ? e.target : e.target.closest('.compair-wrapper_list.checkbox');
    document.querySelector("header.collection-header").classList.contains("hide") ? document.querySelector("header.collection-header").classList.remove("hide") : " ";
    document.querySelector("header.collection-header").classList.add("sticky-compare");
   // el.parentNode.classList.contains("checked") ? document.querySelector(".collection-header").classList.remove("hide") : document.querySelector(".collection-header").classList.add("hide");
    
  }
});


  // breadcrumb height fixes //
window.onscroll = (event) => {
   let samHeight = document.querySelector("#shopify-section-header").offsetHeight;
  document.querySelector(".plp-bredcrumbs_container").style.top = (samHeight - 2) + "px";
};


window.addEventListener("resize", (event) => {
   let samHeight = document.querySelector("#shopify-section-header").offsetHeight;
   samHeight =  document.querySelector("#shopify-section-header").offsetHeight;
   document.querySelector(".plp-bredcrumbs_container").style.top = (samHeight - 2) + "px";
});



// filter  left sidebar sticky
setTimeout(()=>{
    window.addEventListener('scroll', function() {
        // console.log('scrolling');
       let stickyHeader = document.querySelector('.shopify-section.sticky').offsetHeight;
      let breadcrumbSticky = document.querySelector('.plp-bredcrumbs_container').offsetHeight;
      let totalHeight = stickyHeader + breadcrumbSticky;
      var element = document.querySelector('.gf-filter-contents');
      element.style.top = totalHeight + 20 + 'px';
      element.style.maxHeight = 'calc(100vh - ' + (totalHeight + 20) + 'px)';
});
  },2000) 


  jQuery(".btn-filter-collapse").click(function(){
      jQuery(this).toggleClass("btn-filter-collapse-active");
      jQuery(".collection-wrap").toggleClass("collection-wrap-active");
  })

// plp count update //
window.addEventListener("globoFilterRenderCompleted",()=>{
 let pCount = window.Shopify.locale == "en" ? 'products' : 'منتجات';
   document.querySelector(".plp-product_count").querySelector(".total-products").innerHTML = (document.querySelector(".gf-summary>b").innerHTML) + " " + pCount;
 });

// remove the item on cart //
document.querySelector(".cart-popup__close").addEventListener("click",()=>{
let removeIcon =  document.querySelector(".cart-popup-wrapper");
    if(removeIcon.classList.contains("cart-popup-wrapper--hidden")){
      removeIcon.classList.add("cart-popup-wrapper--hidden");
    }
}) 