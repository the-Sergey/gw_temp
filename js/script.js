$(document).ready(function() {
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
    // domReady(function(){
    //     var instanceOne = new ImageFlow();
    //     instanceOne.init({
    //         ImageFlowID:'myImageFlow',
    //         aspectRatio: 3.0,
    //         imageFocusM: 1.4,
    //         imagesM: 1.2,
    //         buttons: true,
    //         reflections: false,
    //         captions: false,
    //         startID: 4,
    //         circular: false,
    //         imageFocusMax: 2
    //     });
    // });

    // Modernizr.load([      
    //     {        
    //         test : Modernizr.input.placeholder,            
    //         nope : 'js/libs/jquery.placeholder.min.js',
    //         complete: function () {                
    //             $('input, textarea').placeholder();                                
    //         }
    //     }              
    // ]);

    if (!Modernizr.inputtypes.date) {
        $('input[type=date]').datepicker({
            dateFormat: 'dd-mm-yy'
        });
    };
    if(!Modernizr.input.placeholder){
        $('[placeholder]').focus(function() {
            var input = $(this);
            if (input.val() == input.attr('placeholder')) {
                input.val('');
                input.removeClass('placeholder');
            }
        }).blur(function() {
            var input = $(this);
            if (input.val() == '' || input.val() == input.attr('placeholder')) {
                input.addClass('placeholder');
                input.val(input.attr('placeholder'));
            }
        }).blur();
        $('[placeholder]').parents('form').submit(function() {
            $(this).find('[placeholder]').each(function() {
                var input = $(this);
                if (input.val() == input.attr('placeholder')) {
                    input.val('');
                }
            })
        });
    };
    if (!Modernizr.input.required) {
        form.onsubmit = function() {
            var required = [], att, val;            
            for (var i = 0; i < inputs.length; i++) {
                att = inputs[i].getAttribute('required');                
                if (att != null) {
                    val = inputs[i].value;                
                    if (val.replace(/^\s+|\s+$/g, '') == '') {
                        required.push(inputs[i].name);
                    }
                }
            }            
            if (required.length > 0) {
                alert('Эти поля должны быть заполнены: ' + required.join(', '));                
                return false;
            }
        };
    }    
});