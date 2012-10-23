
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

/* Create ImageFlow instances when the DOM structure has been loaded */
domReady(function(){
	var instanceOne = new ImageFlow();
    instanceOne.init({
        ImageFlowID:'myImageFlow',
        aspectRatio: 3.0,
        imageFocusM: 1.4,
        imagesM: 1.2,
        buttons: true,
        reflections: false,
        captions: false,
        startID: 4,
        circular: false,
        imageFocusMax: 2
    });
});
