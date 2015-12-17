$(document).ready(function () {

	var lights = 'on';

	$('#lightswitch').click(function () {
		$('button').toggleClass('switch-off');
	

		if ($('#lightswitch').hasClass('switch-off')) {
			$('.switch-off').html('OFF');
		} else {
			$('.switch-on').html('ON');
		}
		
	
	})

})

//Alternate solution, though this means ON flashes in background
//$('#lightswitch').click(function () {
		//$('button').toggleClass('switch-off');
		// $('.switch-on').html('ON');
		// $('.switch-off').html('OFF');
		// $('button').toggleClass('switch-on');
