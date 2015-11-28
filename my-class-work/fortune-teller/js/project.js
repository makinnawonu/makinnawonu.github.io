//you should really write your function first and then put in
//your click handler. that could be a source of errors.
//defining your function and then calling the click makes
//a lot of sense.

document.getElementById('clickme').onclick = getFortune

function getFortune () {

	// 1. Get your inputs
	var hometown = document.getElementById('hometown').value;
	var crush = document.getElementById('partner').value;
	var numKids = document.getElementById('numKids').value;
	var job = document.getElementById('jobTitle').value;

	// 2. Run your logic
	var fortuneStr = 'You will be a ' + job + ' in ' + 
	hometown + ', and married to ' + crush + ' with ' + 
	numKids + ' kids.';

	//3. Output
	alert(fortuneStr);
	//You're using innerHTML because you're writing over
	//the HTML that is already there. You use .value to 
	//grab data.
	document.getElementById('output').innerHTML = fortuneStr;
}