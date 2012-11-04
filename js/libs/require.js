window.onload = function() {
    // get the form and its input elements
    var form = document.forms[0],
        inputs = form.elements;
    // if no autofocus, put the focus in the first field
    if (!Modernizr.input.autofocus) {
        inputs[0].focus();
    }
    // if required not supported, emulate it
    if (!Modernizr.input.required) {
        form.onsubmit = function() {
            var required = [], att, val;
            // loop through input elements looking for required
            for (var i = 0; i < inputs.length; i++) {
                att = inputs[i].getAttribute('required');
                // if required, get the value and trim whitespace
                if (att != null) {
                    val = inputs[i].value;
                    // if the value is empty, add to required array
                    if (val.replace(/^\s+|\s+$/g, '') == '') {
                        required.push(inputs[i].name);
                    }
                }
            }
            // show alert if required array contains any elements
            if (required.length > 0) {
                alert('The following fields are required: ' + required.join(', '));
            // prevent the form from being submitted return false;
            }
        };
    } 
}