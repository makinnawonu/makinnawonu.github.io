$('.black').click(changeColor);

function changeColor () {
	$('.box').css('background-color', 'blue');
	$('.box').html('Now I&apos;m blue');
	$('.box').addClass('blue');
	$('.box').removeClass('black');
}

$('.blue').click(changeColorBack);


$('.box').click(function(){

	console.log('u are cool');

})

function changeColorBack () {
	console.log('changeColorBack is being triggered');
	$('.blue').css('background-color', 'black');
	$('.blue').html('Back to Black');
	$('.blue').removeClass('blue');
}

// $('#box-one').click(increaseBoxOne);
// 	function increaseBoxOne () {
// 		$('#box-one').css({'height': '500px', 'width': '500px'});
// 	}
// $('#box-two').click(increaseBoxTwo);
// 	function increaseBoxTwo () {
// 		$('#box-two').css({'height': '500px', 'width': '500px'});
// 	}
