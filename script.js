$(document).ready(function () {
    $('.container').mouseenter(function () {
        $('.card').stop().animate({
            top: '-90px'
        }, 'slow');
    }).mouseleave(function () {
        $('.card').stop().animate({
            top: 0
        }, 'slow');
    });

    // Redirect to Stripe when the heart is clicked
    $('.heart').click(function () {
        window.location.href = "https://book.stripe.com/3cs1739fQcRp24g144"; // Replace with your Stripe checkout link
    });
});
