//we need to grab the button color in order
//to change it. since we already know that we
//want to do the onclick event to change it to
//several different things, we can go ahead
//and make it a function now 


//after you set this onclick event to do a specific thing,
//you still need create a function with that thing - the grayed
//out fucntion was your test
document.getElementById('color-button').onclick = changeColor;

// function changeColor () {

// 	alert('test test test');
// }

function changeColor () {
	var red = document.getElementById('red').value;
	var green = document.getElementById('green').value;
	var blue = document.getElementById('blue').value;


//this is going to create a string rbg(0,0,0) but with the #s
//that have been put in the boxes
	var rgbString = 'rgb(' + red + ',' + green + ',' + blue + ')';

//scope is important here! the elements below have to be inside 
//of the function for this to be recognized by your browser, otherwise
//you'll get an error

//this is where you're replacing the string on the page with the 
//new rgb number (change the rgb(0,0,0) text to rgbString)
document.getElementById('colorful-text').innerHTML = rgbString;

//this is where you're setting the new background color
document.body.style.backgroundColor = rgbString;

//this will just print some stuff out for you in the console as
//a sanity check
	console.log(rgbString);
}







