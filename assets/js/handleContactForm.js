/* global $ */

function handleContactForm () {

  var msg = {
    name: $('#name').val(),
    email: $('#email').val(),
    subject: $('#subject').val(),
    messageBody: $('#message-body').val()
  };

  console.log('You hit the button');
  console.log(JSON.stringify(msg));

  $.get('http://localhost:2368/mail', msg, function (data){
    console.log(data);
    if(data === 'OK'){
      $('.contactform').empty().html('<h2>Your message was sent!</h2>');
    }
    else if(data === 'ERROR'){
      $('.contactform').empty().html('<h2>Some ERROR happend! Please try again!</h2>');
    }
  });
}

$( function () {
  'use strict';
});