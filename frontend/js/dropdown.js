$(function dropdown() {
  var selectors = {
    countrySelect: '#country-select-drop-down-button, #select-locale-field-button',
    arrowIcon: '.up-down-chevron-icon',
    announcementBarClose: '.announcement-bar-close'
  };
  
  $countrySelect = $(selectors.countrySelect);
  
  function toggleCountrySelect(event) {
    event.stopPropagation();
    
  	$countrySelect.next().toggleClass('hidden');
    $(selectors.arrowIcon).toggleClass('up-down-chevron-icon--is-open');
  }

  $countrySelect.on('click', toggleCountrySelect);
  $(document).on('click', function(){
    $content = $countrySelect.next();
    
    if(!$content.hasClass('hidden')){
        $content.toggleClass('hidden');
    	$(selectors.arrowIcon).toggleClass('up-down-chevron-icon--is-open');
    }
  });
  
  $(selectors.announcementBarClose).on('click', function(){
  	$(this).parent().remove();
  });

});
