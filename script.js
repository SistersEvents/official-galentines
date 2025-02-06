$(document).ready(function () {
    // Envelope hover animation
    $('.container').mouseenter(function () {
        $('.card').stop().animate({
            top: '-90px'
        }, 'slow');
    }).mouseleave(function () {
        $('.card').stop().animate({
            top: 0
        }, 'slow');
    });

    // ✅ Make the entire envelope clickable
    $('.valentines').click(function () {
        window.location.href = "https://book.stripe.com/fZeg1XbnYdVtfV68w"; // Your Stripe link
    });
});
