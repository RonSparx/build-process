$(document).ready(function() {
  $(":input").inputmask();
    $.validator.methods.email = function( value, element ) {
      return this.optional( element ) || /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/.test( value );
    };
  $.validator.methods.phone = function (value, element) {
  	return this.optional(element) || /^[+]?[0-9]{1,14}$/.test(value);
  }

    $('[data-open-oc-modal]').click(function(e) {
        e.preventDefault();
      
 	    $('#oc-modal .oc-modal__body').html('');
        $('#oc-modal .oc-modal__body').append($($(this).attr('href')).html()).fadeIn();
        $('body').addClass('oc-modal-open');

        var modalEvent =  new CustomEvent('on-oc-modal-open', {
            bubbles: true,
            detail: { element: $($(this).attr('href')) }
        });

        document.dispatchEvent(modalEvent);
    });

    $('#oc-modal').click(function() {
        $('body').removeClass('oc-modal-open');
        $('#oc-modal .oc-modal__body').fadeOut(function() {
            $(this).empty();
        });
    });

    $('#oc-modal').on('click', '.oc-modal__wrapper', function(e) {
        e.stopPropagation();
    });

    $('#oc-modal').on('click', '[data-close-oc-modal]', function() {
        $('body').removeClass('oc-modal-open');
        $('#oc-modal .oc-modal__body').fadeOut(function() {
            $(this).empty();
        });
    });

    // tab selection
    $('#oc-modal').on('click', '.tabs-header-item-container', function() {
        var tabSelector = '#'+$(this).attr('aria-controls');
        $('.tabs-header-item').removeClass('tabs-header-item-selected');
        $(this).find('.tabs-header-item').addClass('tabs-header-item-selected');
        $('.tabs-content .content').addClass('hidden');
        $(tabSelector).removeClass('hidden');
    });
});
