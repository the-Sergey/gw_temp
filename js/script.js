$(document).ready(function() {
    if (!Modernizr.inputtypes.date) {
       $('input[type=date]').datepicker({
            dateFormat: 'dd-mm-yy'
        });
    };
    if (!Modernizr.input.required) {
        load('js/libs/jquery.placeholder.min.js'),
        function() {
            $('input, textarea').placeholder();
        }
    };
    // Modernizr.load({
    //     test: Modernizr.input.required,
    //     nope: 'js/libs/jquery.placeholder.min.js',
    //     complete: function () {
    //         $('input, textarea').placeholder();
    //     }
    // });
    // if(!Modernizr.input.placeholder){
    //     $('[placeholder]').focus(function() {
    //         var input = $(this);
    //         if (input.val() == input.attr('placeholder')) {
    //             input.val('');
    //             input.removeClass('placeholder');
    //         }
    //     }).blur(function() {
    //         var input = $(this);
    //         if (input.val() == '' || input.val() == input.attr('placeholder')) {
    //         input.addClass('placeholder');
    //         input.val(input.attr('placeholder'));
    //     }
    //     }).blur();
    //     $('[placeholder]').parents('form').submit(function() {
    //         $(this).find('[placeholder]').each(function() {
    //             var input = $(this);
    //             if (input.val() == input.attr('placeholder')) {
    //             input.val('');
    //             }
    //         })
    //     });
    // }
});