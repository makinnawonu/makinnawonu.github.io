$(document).ready(function () {

	//In this application, the value of the 
	//box in the middle is the one that is
	//changing


	//you need to listen for a click event
	//and respond by adding to substracting
	//from that middle variable

	//make a variable that represents
	//the value in the out box

	var total = 0;

	//add 10 event

	$('#a10').click(addTen);
	function addTen () {
		total = total + 10;
		//need to pull what is is currently
		//after whatever you've done to it
		//and add 10 to it
		//it's the = sign that changes the value
		//of total
		//you can also write it as total += 10

		$('#out').text(total); //you should use val for inputs, not for this
	}

	//add 20 event

	//$('a20').click(addTwenty);
	
	$('#a20').click(addTwenty);
	function addTwenty () {
		total += 20;
		$('#out').text(total);
	}

	//add 30 event
	$('#a30').click(addThirty);
	function addThirty () {
		total += 30;
		$('#out').text(total);
	}

	//subtract 10
	$('#n10').click(subTen);
	function subTen () {
		total -= 10;
		$('#out').text(total);
	}

	//subtract 20
	$('#n20').click(subTwenty);
	function subTwenty () {
		total -= 20;
		$('#out').text(total);
	}

	//subtract 30
	$('#n30').click(subThirty);
	function subThirty () {
		total -= 30;
		$('#out').text(total);
	}

	//turn it red
	//you need to call a jQuery function that will affect
	//the css and change the background color
	$('#red').click(red);
	function red () {
		$('#out').css('background-color', 'red');
	}

	//turn it blue
	$('#blue').click(blue);
	function blue () {
		$('#out').css('background-color', 'blue');
	}

	//turn it white again
	$('#out').click(white);
	function white () {
		$('#out').css('background-color', 'white');
	}


})