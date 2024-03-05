let close_popup_model = ()=>{
		$(".sidebar-wrapper").removeClass("is-active");
      	$(".modal-background").css("display", "none");
  		$('body').removeClass('popup_mono_active');
        $('.progress-list li').removeClass('done');
  		$('.progress-list li:first-child').addClass('done');
  		$('.monogram-step').removeClass('active');
  		$('#monogram-step1').addClass('active');
}
let open_popup_model =()=>{
 if($(".sidebar-wrapper").hasClass("is-active")){
        $(".sidebar-wrapper").removeClass("is-active");
        $(".modal-background").css("display", "none");
    	$('body').removeClass('popup_mono_active');

      } else {
        $('body').addClass('popup_mono_active');
        $(".sidebar-wrapper").removeClass("is-active");
        $(".sidebar-wrapper").addClass("is-active");
        $(".modal-background").css("display", "block");
         $('.progress-list li').removeClass('done');
  		$('.progress-list li:first-child').addClass('done');
  		$('.monogram-step').removeClass('active');
  		$('#monogram-step1').addClass('active');
      }
}

let get_monogram_data = (pro_handle)=>{
	var data_monogram = localStorage.getItem("data_monogram");
  if(data_monogram){
    var dataint = JSON.parse(data_monogram);
    console.log(dataint);
    var finalData = dataint.filter((val,ind)=>{
      return (val['produntHandle'] == pro_handle)
    });
    if(finalData && finalData.length) {
      $('.monogram-free').hide();
      $('.monogram-active_mono').show();
      $('.mono-letter').html(finalData[0].monogramName);
      $('.pro_textfield').val(finalData[0].monogramName);
      let kl = finalData[0].monogramName.split('');
      let index_ = 0;
      $('.Initials_input').each(function(){
      	$(this).val(kl[index_]);
        index_=index_+1;;
      });
      
      var color = finalData[0].monogramColor;
     
     
    
      //$('.mono-letter, .pro_textfield').css('color',color2);
      $('.mono-letter, .pro_textfield').attr('color',color);
       $('.input_color').html(color);
     // $(".monogram-colors input[type='radio']").filter('[value="'+color+'"]').prop('checked', true);
      $(".monogram-colors input[type='radio'][value='"+color+"']").prop("checked",true)
       console.log(finalData[0]);
    }
  }
}

const monogram =(()=>{
  let pro_handle =  theme.prouct_handle ;        
  get_monogram_data(pro_handle);

        

    $(".monogramming-popup-link, .monogramming-edit").on("click",function(){
         open_popup_model();
    });

    $(".sidebar-dismiss, .modal-background, .monogram-cancel-btn").on("click",function(){
     close_popup_model();
    });


    $('.progress-list li').click(function(){
		var conid = $(this).attr('process-step');
      	$('.progress-list li').removeClass('done');
      	$(this).addClass("done").prevAll("li").addClass("done");
		$('.monogram-step').removeClass('active');
      	$("#monogram-step"+conid+"").addClass('active');
      	
    });

    $('.button-next').click(function(){
      
      if(!$('#monogram-step3').hasClass('active')){
        
       // process bar
	  $('.progress-list li.done').next('li').addClass('done'); 
        
      let cont = $('.content .monogram-step.active');
      cont.removeClass('active');
    	cont.next('.monogram-step').addClass('active');
      }
     
    });
    
    
    $('.button-prev').click(function(){
      if(!$('#monogram-step1').hasClass('active')){
      		
           // process bar
          $('.progress-list li.done').last('li').removeClass('done');
        
      let cont = $('.content .monogram-step.active');
      cont.removeClass('active');
    	cont.prev('.monogram-step').addClass('active');
      }
    });
    
    
    $('.monogram-input .Initials_input').keyup(function(e){
      
        var a = e.which || e.keyCode;

        if (a == 0 || a == 229) {
            a = this.value.charCodeAt(this.value.length - 1);
        }     
     //alert(a);
      	if((a>=65 && a<=90)|| (a>=97 && a<=122) || (a>=1575 && a<=1610)){
          
          if(e.originalEvent.key !="Unidentified") {
            e.target.value = e.originalEvent.key
          }
          let current=''
          $('.Initials_input').each(function(){
             current += $(this).val();
          })
         	current = current.toUpperCase();
        	$('.pro_textfield').val(current);

        	$(this).parent().next().find('.Initials_input').focus();
         	$(this).parent().next().find('.Initials_input').addClass('selected');
        	if(!$(this).hasClass('last')){
          		$(this).removeClass('selected');
        	}
      	}
      else{
      	$(this).val('');
      }
      
 });

    $('.monogram-input .Initials_input').focus(function(e){
            $('.monogram-input .Initials_input').removeClass("selected");
          $(this).addClass('selected');
    });

    $('.monogram-symbols li a').click(function(e){
            e.preventdefault;
      let symbol = $(this).attr('data-value');
        $('.Initials_input.selected').val(symbol);

       let current='';
          $('.Initials_input').each(function(){
             current += $(this).val();
          })
          current = current.toUpperCase();
          $('.pro_textfield').val(current);
      let focus_cls = '.Initials_input.selected';
        $(focus_cls).parent().next().find('.Initials_input').focus();
           $(focus_cls).parent().next().find('.Initials_input').addClass('selected');
          if(!$(focus_cls).hasClass('last')){
            $(focus_cls).removeClass('selected');
          }
    });

    // apply color
    $(".monogram-colors input[type='radio']").click(function(){
        var color = $(this).val();
      $('.input_color').html($(this).val());
        $('.pro_textfield').css('color',color);
       $('.pro_textfield').attr('color',color);
    });

    // apply
    $('.btn-mono-apply').click(function(){
        let text_val = $('.pro_textfield').val();
      if(text_val.length > 0){
        let text_color = $(".monogram-colors input[type='radio']:checked").val();
            set_monogram_data(pro_handle,text_val,text_color);
            get_monogram_data(pro_handle);
            $('.monogram-free').hide();
            $('.monogram-active_mono').show();
            close_popup_model();
      }
      else{
        $('.monogram-apply-failure').addClass('show');
        setTimeout(function(){$('.monogram-apply-failure').removeClass('show');},1000);
      }

    });

    //delete
    $('.monogramming-remove').click(function(){
        deleted_monogram(pro_handle); 

      $('.monogram-free').show();
      $('.monogram-active_mono').hide();

      $('.pro_textfield').val('');
      $(".monogram-colors input[type='radio']:checked").prop('checked', false);
      $('.Initials_input').val('');
      $('.Initials_input').removeClass('selected');
       $('.Initials_input:first-child').addClass('selected');

      $('.progress-list li').removeClass('done');
      $('.progress-list li:first-child').addClass('done');
      $('.monogram-step').removeClass('active');
      $('#monogram-step1').addClass('active');
    });

})();


let deleted_monogram = (pro_handle) => {
  let k = localStorage.getItem("data_monogram");
  if(k) {
    var arr = JSON.parse(k);
    for(var j =0; j< arr.length;j++) {
console.log(arr[j]['produntHandle'],pro_handle);
      if(arr[j]['produntHandle'] ==  pro_handle) {
        arr.splice(j,1);
        break;
      }
    } 
    localStorage.setItem("data_monogram",JSON.stringify(arr));
  }
   
}
  

let set_monogram_data =(pro_handle,text_val,text_color)=>{
  var arr = [];
  let obj = {produntHandle:pro_handle,monogramName:text_val,monogramColor:text_color};
  let k = localStorage.getItem("data_monogram");
  if(k) {
    arr = JSON.parse(k);
	var flag = true;
    for(var j =0; j< arr.length;j++) {
      if(arr[j]['produntHandle'] ==  pro_handle) {
		arr.splice(j,1,obj);
		flag = false;
		break;
      }
    } 
    if(flag){
		arr.push(obj);
    }
    localStorage.setItem("data_monogram",JSON.stringify(arr));
  } else {
    arr.push(obj);    
    localStorage.setItem("data_monogram",JSON.stringify(arr));    
  }
}

