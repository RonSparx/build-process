window.addEventListener("load", (event) => {

  let weekDays =  ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"
];
  let shippingSelector = document.querySelector("#shipcityselector");
  let custom_shippingSelector = document.querySelector(".shipcityselectorbox_main");
  let shippingDaysmin = +document.querySelector(".excepted_shipping_message").getAttribute('delivery_min');
  let shippingDaysmax = +document.querySelector(".excepted_shipping_message").getAttribute('delivery_max');
  let date = new Date(); 

  const hideElement = (element) => {  
    let elementsArray = document.querySelectorAll(element);
    elementsArray.forEach(function(elem) {
          elem.style.display = 'none'
    });
  }


  shippingSelector.addEventListener('change', function (event) {
   let selectedCity = event.target.value ;  
    hideElement('.area_messages')
    let messages = document.querySelector(`.area_messages[city="${selectedCity}"]`) ;
        messages.style.display = 'block' ;
    
    // cutoff time delivery express delivery

    let cityCutofftime = +shippingSelector.options[shippingSelector.selectedIndex].getAttribute('cutoff');
    hideElement('.expressdelivery')
    if(messages.querySelector('.expressdelivery.aftercutoff')) {
      if (cityCutofftime <= date.getHours() )
      {
        messages.querySelector('.expressdelivery.aftercutoff').style.display = 'block'   
      }
      else {
        messages.querySelector('.expressdelivery.beforecutoff').style.display = 'block' 
      }
    }

    // standard delivery

    let currentDay = date.getDay(),
     standardDevivery,
     lastday = date.getDay() + shippingDaysmax ,
     minDate = date.getDate() + shippingDaysmin ,
     maxDate = date.getDate() + shippingDaysmax ,
     deliveryMonth = date.getMonth(),
     nextDeliveryMonth = date.getMonth(), 
     monthlastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate() ;    

    if (lastday > 6 ) lastday -=  7 ;
      if (monthlastDay < maxDate  ) {
      maxDate -= monthlastDay 
      nextDeliveryMonth +=1
     }

   if (monthlastDay < minDate  ) {
      minDate -= monthlastDay 
      deliveryMonth +=1
     }

    let minDay = new Date(date.getFullYear(), date.getMonth() + 1, minDate).getDay() ;
 
    if (weekDays[minDay] == 'Friday' && document.querySelector(".excepted_shipping_message").hasAttribute('firday_off')) {
       minDate += 1
       maxDate +=1
    }
    if ( document.querySelector(".excepted_shipping_message").hasAttribute('firday_off') && weekDays[lastday] == 'Friday') {
        maxDate +=1
    }

    standardDevivery = `${monthNames[deliveryMonth]} ${minDate}  and  ${monthNames[nextDeliveryMonth]} ${maxDate}` ;
    messages.querySelector('.expected-delivery-time.standarddelivery .between_days').innerHTML = standardDevivery ; 
  });

  let changeEvent = new Event('change');
  shippingSelector.dispatchEvent(changeEvent);

  
    $( ".shipcityselectorbox_options span" ).click(function() {
          if (typeof $(this).attr('selected') == 'undefined' && $(this).attr('selected') == true && $(this).attr('selected') == 'selected') return ;
          let sValue = $(this).attr('value') ;
          $( ".shipcityselectorbox_options span" ).removeAttr('selected') ;
          $(this).attr('selected','true') ;
          $('#shipcityselector').val(sValue);
          $('.shipcityselectorbox_value span').text($(this).attr('data-value'))
          shippingSelector.dispatchEvent(changeEvent);
          $("#shipcityselectorbox .shipcityselectorbox_options").toggle();
    });

        $(document).click(function(e) 
      {
          var container = $("#shipcityselectorbox");
          if (!container.is(e.target) && container.has(e.target).length === 0) 
          {
              $("#shipcityselectorbox .shipcityselectorbox_options").hide();
          }
      });

    custom_shippingSelector.addEventListener("click", () => {
       $("#shipcityselectorbox .shipcityselectorbox_options").toggle();
     });
  

});