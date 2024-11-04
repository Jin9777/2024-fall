$(document).ready(function () {
    // Example 1: Toggle Class
    $('#toggleClassButton').click(function () {
        $('#toggleBox').toggleClass('toggled');
    });

    // Example 2: Animate
    $('#animateButton').click(function () {
        $('#animateBox').animate({
            width: '150px',
            height: '150px',
            opacity: 0.5
        }, 1000); // Animation duration of 1 second
    });

    // Example 3: Add Content
    $('#addContentButton').click(function () {
        $('#contentTitle').append(' 🎉 Surprise! 🎉');
    });
});
