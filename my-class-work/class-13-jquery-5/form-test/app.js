$(document).ready(function () {

// $('#myForm').submit(function () {
// 	var name = $('#name-input').val();
// 	$('#target').html(name);
// 	//this alone is not working because there is
// 	//some kind of default that is wiping out the
// 	//the html that you're trying to display bec
// 	//of thing happening automatically with the form
// })

$('#myForm').submit(function (event) {
	event.preventDefault()

	var name = $('#name-input').val();
	$('#target').html(name);
	console.log(event);
})
	
//we need to pass an argument into our anonymous
//function and lean on that to prevent the defauls
//from happening

//it doesn't have to be called "event", it can be anyth
})
