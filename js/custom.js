$('input,textarea').val("");
  $('.form-group input, .form-group textarea').focusout(function() {
    var text_val = $(this).val();
    if (text_val === "") {
      console.log("empty!");
      $(this).removeClass('has-value');
    } else {
      $(this).addClass('has-value');
    }
});



