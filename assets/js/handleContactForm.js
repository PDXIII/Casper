/* global $ */

function handleContactForm () {
    // for production the var postToRoute
    // must be changed accordingly
    var postToRoute = 'http://localhost:2368/mail'; // dev route

    // the msg object must be in sync with the contact form
    // and the frontend controller in the core code!!!
    var msg = {
        name: $('#name').val(),
        email: $('#email').val(),
        subject: $('#subject').val(),
        messageBody: $('#message-body').val()
    };
    
    // sending the contact form
    $.get(postToRoute, msg, function (data){

        // let the user know about success or failure by
        // showing a message instead of the contact form
        if(data === 'OK'){
            $('.contactform').empty().html('<h2>Your message was sent!</h2>');
        }
        else if(data === 'ERROR'){
            $('.contactform').empty().html('<h2>Some ERROR happend! Please try again!</h2>');
        }
    });
}
