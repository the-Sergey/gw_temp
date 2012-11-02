$(document).ready(function(){
    Modernizr.load({
    	test: Modernizr.inputtypes.date,
  		nope: ['http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js',
  				'http://ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min.js',
  				'jquery-ui.css'],
  		complete: function () {
    		$('input[type=date]').datepicker({
      		dateFormat: 'yy-mm-dd'
   			});
  		}
	});
});