$(function(){

    $('#contact-form').submit( function(e) {

        e.prevendDefault();
        $('.comments').empty();

        var postData = $('#contact-form').serialize();

        $.ajax({
            type: 'POST',
            url: 'contact.php',
            data: postData,
            dataType: 'json',
            success: function(result){

                if(result.isSuccess){
                    $('#contact-form').append("<p class='thank-you'> Votre message a bien été envoyé. Merci de m'avoir contacté ! </p>");
                    $('#contact-form')[0].reset();
                }
                else{
                    $('#name + .comments').html(result.nameError);
                    $('#email + .comments').html(result.emailError);
                    $('#message + .comments').html(result.messageError);
                }
            }
        })
    });
});
