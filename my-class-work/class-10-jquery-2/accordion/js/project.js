//you're going to use this to show/hide things 
//that are hidden under the wrappers
//so that you can make this an accordion

//at the start, the .wrapper has a display of 
//none, which is what is keeping the according 
//collapsed

$(document).ready(function () {

	$('.row').click(function () {
	//the wrapper you want is a child of row and it's what 
	//you want to show/hide - you can use find
	//or treat it as a child

	//when you use this instead of .row below,
	//it will only expand that specific row
	//instead of all of them

		//$(this).find('.wrapper').slideDown();
		$(this).find('.wrapper').slideToggle();

		//slideToggle will show it if it is hidden
		//and hide it if it is shown

	})

})