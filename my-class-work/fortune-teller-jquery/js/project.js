$(document).ready(function () {
	//you're adding the thing at the top so that the browser knows
	//not to load your jQuery until after it has loaded all of the
	//html and css.
	$('#clickme').click(getFortune)

	function getFortune () {

		// 1. Get your inputs
		var hometown = $('#hometown').val();
		var crush = $('#partner').val();
		var numKids = $('#numKids').val();
		var job = $('#jobTitle').val();

		// 2. Run your logic
		var fortuneStr = 'You will be a ' + job + ' in ' + 
		hometown + ', and married to ' + crush + ' with ' + 
		numKids + ' kids.';

		//3. Output
		alert(fortuneStr);
		//You're using innerHTML because you're writing over
		//the HTML that is already there. You use .value to 
		//grab data.
		$('#output').text(fortuneStr);
	}
}) //this thing at the end is the complement to the thing that
	//you put on the first line