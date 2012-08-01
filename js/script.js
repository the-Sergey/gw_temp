$(document).ready(function(){
    $('.main_menu ul li').hover(
        function() {
            $(this).addClass('open');
            $(this).find('ul').stop(true, true);
            $(this).find('> ul').slideDown();
        },
        function() {
            $(this).removeClass('open');
            $(this).find('> ul').slideUp('fast'); 
        }
    );
    $('#slider1').bxSlider({
        auto: true,
        speed: 800,
        infiniteLoop: false,
        displaySlideQty: 4,
        moveSlideQty: 1,
        hideControlOnEnd: false 
    });
});