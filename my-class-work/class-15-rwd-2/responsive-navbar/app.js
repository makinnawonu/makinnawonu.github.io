$(document).ready(function () {
	$('#icon').click(function () {
		$('#small-nav').slideToggle()
	})
	 $(window).resize(function () {
	 	if ($(window).width() > 900){
	 		$('#small-nav').hide()
	 	}
	 })

//using the window function so that if you click on this and reveal the overflow menu you hide it if the screen then gets bigger



})