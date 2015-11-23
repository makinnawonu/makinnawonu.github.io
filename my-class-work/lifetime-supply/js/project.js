//first you should do an onclick event for the Calculate
//button on the page

document.getElementById('click-me').onclick = calculateNumDrinks;

function calculateNumDrinks () {
	//1. Store your current age into a variable
	var age = document.getElementById('age').value;

	//2. Store a maximum age into a variable
	var maxage = document.getElementById('max-age').value;

	//3. Store a favorite drink (from a drop-down) into a variable
	var favDrink = document.getElementById('item').value;

	//4. Store an amount per day into a variable
	var numPerDay = document.getElementById('num-per-day').value;

	//5. Calculate how many you would eat total for the rest of your life
	var lifetimeDrinks = (maxage - age) * 365 * numPerDay;

	//6. Output your results to the user
	document.getElementById('solution').innerHTML = lifetimeDrinks;
	document.getElementById('drink').innerHTML = favDrink;

	// console.log(age, maxage,favDrink,numPerDay);
}


//3. Store a favorite drink (from a drop-down) into a variable

//4. Store an amount per day into a variable

//5. Calculate how many you would eat total for the rest of your life

//6. Output your results to the user