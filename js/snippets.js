$(document).ready( function(){	
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
    if (window.PIE) {
        $('.pie').each(function() {
            PIE.attach(this);
        });
    };    
});

<!--mainMenu-->
<script>
    $('.main_menu ul li').hover(
    function() {
        $(this).addClass('open').find('ul').stop(true, true);
        $(this).find('> ul').slideDown();
    }, function() {
        $(this).removeClass('open').find('> ul').slideUp('fast');
    });
</script>