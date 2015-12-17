$(document).ready(function () { 

//this is the longer way to do it - you would go 
//look for that specific id in the code so you
//can associate an action with a specific image
//and then make that do something else

// $('#first').mouseover(function () {
// 	$('#bigimage').attr('src', 'img/1.jpg');
// 	console.log('this is actually doing something')
// })

// $('#second').mouseover(function () {
// 	$('#bigimage').attr('src', 'img/2.jpg');
// })

// $('#third').mouseover(function () {
// 	$('#bigimage').attr('src', 'img/3.jpg');
// })

// $('#fourth').mouseover(function () {
// 	$('#bigimage').attr('src', 'img/4.jpg');
// })

//doing the same thing with "this", which can only
//be used if the selector is an object that can
//be thought of as an antecedent where "this" is
//the pronoun

$('.thumb').mouseover(function () {
	//start defining variables to store the images
	var imgSrc = $(this).attr('src');

	$('#bigimage').attr('src', imgSrc);
})

})