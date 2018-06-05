$(document).ready(function() {

  var form = $('#contact-form'),
      email = $('#email'),
      subject = $('#name'),
      message = $('#message'),
      info = $('#phone'),
      submit = $("#submit");

  submit.on('click', function(e) {
    e.preventDefault();
    if(validate()) {
      $.ajax({
        type: "POST",
        url: "./mail/mailer.php",
        data: form.serialize(),
        dataType: "json"
      }).done(function(data) {
        if(data.success) {
          email.val('');
          subject.val('');
          message.val('');
          phone.val('');
        } else {
        }
      });
    } else {
      console.log("invalid");
    }
  });

  function validate() {
    var valid = true;
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if(!regex.test(email.val())) {
      email.css('border-color', 'red');
      valid = false;
    }
    if($.trim(subject.val()) === "") {
      subject.css('border-color', 'red');
      valid = false;
    }
    if($.trim(message.val()) === "") {
      message.css('border-color', 'red');
      valid = false;
    }

    return valid;
  }

});
