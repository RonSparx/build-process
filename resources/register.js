 $("#toggle-password, #contoggle-password").click(function () {
        $(this).toggleClass("active");
        let input = $(this).parent().find("input");
        if (input.attr("type") == "password") {
          input.attr("type", "text");
        } else {
          input.attr("type", "password");
        }
      });





function emailCheck(email) {
   const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   if (email) {
     return re.test(String(email).toLowerCase());
   } else {
     return false;
   }
 }
      function validateForm(form) {
        var flag = true;
        var data = $(form + " [data-required='true']");
        console.log(data);
        for (var j = 0; j < data.length; j++) {
          let val = $(data).eq(j);
          let formValidate = val.parents(".form-validate");
          if (val[0].localName === "input") {
            if (val.attr("type") === "email") {
              let validval = emailCheck(val.val());
              if (!validval) {
                formValidate.addClass("not-valid");
                flag = false;
              } else {
                formValidate.removeClass("not-valid").addClass("valid");
              }
            } else if (val.attr("type") === "radio" || val.attr("type") === "checkbox") {
              let randomName = "s" + Math.random().toString(36).substr(2, 5);
              var n = val.attr("name");
              if (!n) {
                formValidate.find("input").attr("name", randomName);
                n = randomName;
              }
              var length = formValidate.find($("input[name='" + n + "']")).length;
              if (formValidate.find($("input[name='" + n + "']:checked")).length === 0) {
                formValidate.addClass("not-valid").removeClass("valid");
                flag = false;
              } else {
                formValidate.removeClass("not-valid").addClass("valid");
              }
              j += length - 1;
            } else {
              if (val.attr("type") === "number") {
                if (val.val() === "") {
                  formValidate.addClass("not-valid").removeClass("valid not-valid-number");
                  flag = false;
                } else if (val.val().length <= 12 && val.val().length >= 6 ) {
                  formValidate.removeClass("not-valid not-valid-number").addClass("valid");
                } else {
                  formValidate.addClass("not-valid-number not-valid").removeClass("valid");
                  flag = false;
                }
              } else if(val.attr("type") === "password"){
                let val = $("#RegisterForm-password").val();
      			var str = passwordChecker(val);
                $("#RegisterForm-password").parents(".form-group").nextAll(".a-error-message").find("span").html(str['msg']);
             if(str['flag']) {
                $("#RegisterForm-password").parents(".form-validate").removeClass("valid").addClass("not-valid");
             } else {
                $("#RegisterForm-password").parents(".form-validate").removeClass("not-valid").addClass("valid");
             } 
              } else
                if (val.val() === "") {
                  formValidate.addClass("not-valid").removeClass("valid");
                  flag = false;
                } else {
                  formValidate.removeClass("not-valid").addClass("valid");
                }
            }
          } else if (val[0].localName === "select" || val[0].localName == "textarea") {
            if (val.val() === "") {
              formValidate.addClass("not-valid").removeClass("valid");
              flag = false;
            } else {
              formValidate.removeClass("not-valid").addClass("valid");
            }
          }
        }
        return flag;
      }
  
  function passwordChecker(value) {
    let flag = false;
    let str = "";
    if(value.length<=7) {
      str += "<span class='errors errors-length'>Minimum 8 characters</span>";
      flag = true;
    } else {
      str += "<span class='suceess suceess-length'>Minimum 8 characters</span>";
    }
    if(!/\d/.test(value)){
      str += "<span class='errors errors-number'>1 number</span>";
      flag = true;
    } else {
       str +=  "<span class='suceess suceess-number'>1 number</span>";
    }
    if(!/[A-Z]/.test(value)){
      str +=  "<span class='errors errors-uppercase'>1 uppercase </span>";
      flag = true;
    } else {
      str +=  "<span class='suceess suceess-uppercase'>1 uppercase </span>";
    }
    if(!/[a-z]/.test(value)) {
      str +=  "<span class='errors errors-lowercase'>1 lowercase </span>";
      flag = true;
    } else {
      str +=  "<span class='suceess suceess-lowercase'>1 lowercase </span>";
    }
    /* if(!/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(value)) {
      str +=  "<span class='errors errors-lowercase'>Atleast one Spacial Charector</span><br/>";
      flag = true;
    } else {
      str +=  "<span class='suceess suceess-lowercase'>Atleast one Spacial Charector</span><br/>";
    } */
    return {
        flag : flag,
        msg: str
      }
    }
    

      /* ------------------------- Form Validation ------------------------- */
      $("input[type=text],input[type=date],input[type=number],input[type=email],input[type=radio],input[type=checkbox],input[type=password],select,textarea").on("change , keyup , blur", function () {
        if ($(this).attr("data-required")) {
          console.log($(this).attr("type"));
          let parentDiv = $(this).parents(".form-validate");
          if ($(this).attr("type") === "date" || $(this).attr("type") === "text") {
            if ($(this).val() === "") {
              parentDiv.addClass("not-valid").removeClass("valid");
            } else {
              parentDiv.removeClass("not-valid").addClass("valid");
            }
          } else if($(this).attr("type") === "password"){
            let val = $("#RegisterForm-password").val();
      		var str = passwordChecker(val);
             $("#RegisterForm-password").parents(".form-group").nextAll(".a-error-message").find("span").html(str['msg']);
             if(str['flag']) {
                $("#RegisterForm-password").parents(".form-validate").removeClass("valid").addClass("not-valid");
             } else {
                $("#RegisterForm-password").parents(".form-validate").removeClass("not-valid").addClass("valid");
             }      	
          }else if ($(this).attr("type") === "number") {
            if ($(this).val() === "") {
              parentDiv.addClass("not-valid").removeClass("valid not-valid-number");
            } else if ($(this).val().length <= 12 && $(this).val().length >= 6) {
              parentDiv.removeClass("not-valid not-valid-number").addClass("valid");
            } else {
              parentDiv.addClass("not-valid-number not-valid").removeClass("valid");
            }
          } else if ($(this).attr("type") === "email") {
            let validval = emailCheck($(this).val());
            if (!validval) {
              parentDiv.addClass("not-valid").removeClass("valid");
            } else {
              parentDiv.removeClass("not-valid").addClass("valid");
            }
          } else if ($(this).attr("type") === "radio" || $(this).attr("type") === "checkbox") {
            let randomName = "s" + Math.random().toString(36).substr(2, 5);
            var n = $(this).attr("name");
            if (!n) {
              parentDiv.find("input").attr("name", randomName);
              n = randomName;
            }
            let checkedVal = parentDiv.find($("input[name='" + n + "']:checked"));
            if (checkedVal.length === 0) {
              parentDiv.addClass("not-valid").removeClass("valid");
            } else {
              parentDiv.removeClass("not-valid").addClass("valid");
            }
          } else {
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
          $('.register-btn').removeAttr("disabled")
        } else {
          $('.register-btn').prop("disabled", true);
          console.log('button disableed - ',disable_submit);
        }
        
         
       
        
        
      });

      $("#confirm-password").on("keyup", function () {
        if ($(this).val() == "") {
         $(this).parents(".form-validate").removeClass("password-not-match valid").addClass("not-valid");
       } else if($(this).val() != $("#RegisterForm #RegisterForm-password").val()) {
         $(this).parents(".form-validate").removeClass("valid not-valid").addClass("password-not-match");
       } else if($(this).val() == $("#RegisterForm #RegisterForm-password").val()) {
         $(this).parents(".form-validate").removeClass("password-not-match not-valid").addClass("valid");
       }
     });
  /*
  let flagtest = passwordChecker($(this).val());
            console.log(flagtest);
               if(flagtest['flag']) {
               		parentDiv.removeClass("not-valid").addClass("valid");
               } else {
               		parentDiv.addClass("not-valid").removeClass("valid");
               }
            $(this).parents(".form-group").nextAll(".a-error-message").find("span").html(flagtest['msg']);
  
  */
     $("#RegisterForm-password").on("keyup", function () {
       var regformval = $("#RegisterForm #confirm-password").parents(".form-validate");
       if ($(this).val() == "") {
         $(this).parents(".form-validate").removeClass("valid").addClass("not-valid");
         $(this).parents(".form-group").nextAll(".a-error-message").find("span").html("Should not be blank...");
       } else {
         var str = passwordChecker($(this).val());
         $(this).parents(".form-group").nextAll(".a-error-message").find("span").html(str['msg']);
         if(str['flag']) {
            $(this).parents(".form-validate").removeClass("valid").addClass("not-valid");
         } else {
            $(this).parents(".form-validate").removeClass("not-valid").addClass("valid");
         }
                
         
         /*
         $(this).parents(".form-validate").removeClass("not-valid").addClass("valid");
         if($(this).val() == $("#RegisterForm #confirm-password").val()) {
           regformval.removeClass("password-not-match not-valid").addClass("valid");
         } else {
           if($("#RegisterForm #confirm-password").val() == "") {
             regformval.removeClass("password-not-match valid").addClass("not-valid");
           } else {
             regformval.addClass("password-not-match").removeClass("valid not-valid");
           }
         }*/
       }
     });
      /* register page */
      $("#form-sumbit").on("click", function () {
        var flag = validateForm("#RegisterForm");
        if (!flag) {
          $("html, body").animate({ scrollTop: $(".not-valid .error").offset().top - 200 }, 600);
          //console.log("11111111111111111");
        } else {
          //console.log(flag);
          flag = true;
            var regFormCnf  = $("#RegisterForm #confirm-password").parents(".form-validate");
           var regFormPas  = $("#RegisterForm #RegisterForm-password").parents(".form-validate");
           if(regFormCnf.hasClass("password-not-match") || regFormCnf.hasClass("not-valid")) {
             flag = false;
           } else if(regFormPas.hasClass("not-valid")) {
             flag = false;
           }
         } 
        console.log(flag);
         if (flag) {
           $("#RegisterForm").submit();
         }
        
      });
      /* end register page */
 let emailExits = localStorage.getItem("emaildatasub");
  if(emailExits){
    localStorage.setItem("emaildatasub",'');
	$("#RegisterForm-email").val(emailExits);

  } 