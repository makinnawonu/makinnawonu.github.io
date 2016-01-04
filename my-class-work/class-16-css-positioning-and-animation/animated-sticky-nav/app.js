$(document).ready(function () {

	$(window).scroll(function () {
		//console.log($(this).scrollTop())
		//you're doing that so that you
		//can see if anything is being logged
		//when you scroll down the page

		//you're using window to say please
		//look for a user scrolling down the
		//the page, then we're going to do
		//something

		if ($(this).scrollTop() > 100) {
			$('header').addClass('sticky')

		//will add the class of sticky
		//to the element
		//as you scroll down
		} else {
			$('header').removeClass('sticky')
		}
	})

})




//we need to look at how much the 
//user has scrolled so that we
//can figure out when to add the
//sticky class and change the nav