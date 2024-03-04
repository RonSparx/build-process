$(document).on('keyup','input[type="text"], input[type="number"], input[type="search"], input[type="email"], textarea', function(event){
  const value = $(this).val();
  const regex = /[\u0600-\u06ff]|[\u0750-\u077f]|[\ufb50-\ufbc1]|[\ufbd3-\ufd3f]|[\ufd50-\ufd8f]|[\ufd92-\ufdc7]|[\ufe70-\ufefc]|[\uFDF0-\uFDFD]/;
  const key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
  if (value.match(regex)) {
    let newValue = value.substring(0, value.length-1);
    if (value.match(regex)) {
     newValue = '';
    }
    $(this).val(newValue);
    event.preventDefault();
    return false;
  }
});

$(document).on('paste','input[type="text"], input[type="number"], input[type="search"], input[type="email"], textarea', function(event){
  const value = $(this).val();
  const regex = /[\u0600-\u06ff]|[\u0750-\u077f]|[\ufb50-\ufbc1]|[\ufbd3-\ufd3f]|[\ufd50-\ufd8f]|[\ufd92-\ufdc7]|[\ufe70-\ufefc]|[\uFDF0-\uFDFD]/;
  const key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
  if (value.match(regex)) {
    $(this).val('');
    event.preventDefault();
    return false;
  }
});