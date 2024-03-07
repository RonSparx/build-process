function emailCheck(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email) {
    return re.test(String(email).toLowerCase());
  } else {
    return false;
  }
}

$("input[type=email],input[type=password]").on("change , keyup , blur", function () {

  if ($(this).attr("data-required")) {
    console.log($(this).attr("type"));
    let parentDiv = $(this).parents(".form-validate");
    if ($(this).attr("type") === "password") {
      if ($(this).val() === "") {
        parentDiv.addClass("not-valid").removeClass("valid");
      } else {
        parentDiv.removeClass("not-valid").addClass("valid");
      }
    } else if ($(this).attr("type") === "email") {
      let validval = emailCheck($(this).val());
      if (!validval) {
        parentDiv.addClass("not-valid").removeClass("valid");
      } else {
        parentDiv.removeClass("not-valid").addClass("valid");
      }
    }  else {
      if ($(this)[0].localName === "select" || $(this)[0].localName === "textarea") {
        if ($(this).val() === "") {
          parentDiv.addClass("not-valid").removeClass("valid");
        } else {
          parentDiv.removeClass("not-valid").addClass("valid");
        }
      }
    }
  }
  var disable_submit = true;
  for(let k =0;k<$('.form-validate').length;k++ ) {         
    if($('.form-validate').eq(k).hasClass('valid')){
      disable_submit = true;
    } else {
      disable_submit = false;
      break;
    }
  }          
  if(disable_submit) {
    console.log('button enable - ',disable_submit);
    $('.logbtn').removeAttr("disabled")
  } else {
    $('.logbtn').prop("disabled", true);
    console.log('button disableed - ',disable_submit);
  }


}); 