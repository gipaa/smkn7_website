$(document).ready(function(){
    
    // Existing code...
    
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if($(window).scrollTop() > 60){
            $('header').addClass('header-active');
        }else{
            $('header').removeClass('header-active');
        }

        $('section').each(function(){
            let top = $(window).scrollTop();
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let id = $(this).attr('id');

            if(top >= offset && top < offset + height){
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // New code to handle form submission
    $('#registration-form').on('submit', function(event){
        event.preventDefault(); // Prevent default form submission

        // Get values from the form
        let firstName = $('#first-name').val();
        let lastName = $('#last-name').val();
        let email = $('#email').val();
        let phone = $('#phone').val();
        let message = $('#message').val();

        // Construct the WhatsApp message
        let whatsappMessage = `Halo, Saya ingin mendaftar.%0A%0A` +
            `Nama: ${firstName} ${lastName}%0A` +
            `Email: ${email}%0A` +
            `Telepon: ${phone}%0A` +
            `Pesan: ${message}`;

        // WhatsApp API URL
        let whatsappUrl = `https://wa.me/6289676792642?text=${whatsappMessage}`; 
        // Redirect to WhatsApp
        window.open(whatsappUrl, '_blank');
    });

});