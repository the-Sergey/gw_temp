
// Nav => main
$('ul.sub li').hover(function() {
    $(this).addClass('open').find('ul').stop(true, true);
    $(this).find('> ul').slideDown();
	},
	function() {
    $(this).removeClass('open').find('> ul').slideUp('fast');
});

// PIE init
if (window.PIE) {
    $('.pie').each(function() {
        PIE.attach(this);
    });
};
