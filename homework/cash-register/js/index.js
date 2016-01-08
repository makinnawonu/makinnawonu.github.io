// Great job.  See my answer to your question at bottom of file.

// User flow:
// 1: user enters numerical value into #newEntry
// 2: user pushes enter key (submits the form), the new line is appended to the <tbody id="entries">
// 3: #total is updated to reflect the sum of all the #entries
//
// Instructions:
// 1: Add a .submit event to the form; use an anonymous function to handle the sumbit
// 2: Remeber to prevent the default action on the form!
// 3: Create a variable to store the user input from #newEntry
// 4: Remember to call parseFloat() on this variable! It needs to be a number.
// 5: Append a new <tr></tr> to the <tbody id="entries"> containing two <td>'s, one of which contains the new variable: <tr><td></td><td>NEW VALUE</td></tr>
// 6: Figure out a way to update the number in #total (Hint: look back at the calculator box example)
// 7: Empty the input in #newEntry (clear it out)

$(document).ready(function () {

	var total = 0 //this MUST be defined outside of teh function otherwise the total will be reset to zero EVERY TIME THE FUNCTION RUNS

// formatting: this function should be indented since inside document ready
$('#entry').submit(function (event) {
	//need to use the id of the actual form or form selector
	//note the id of the input field
	event.preventDefault();

	var newThing = $('#newEntry').val();
	newThing = parseFloat(newThing);

	$('#entries').append('<tr><td></td><td class="money">' + '$' + newThing.toFixed(2) + '</td></tr>');
	//use append here because you don't want to delete the values that are already there

	$('#entry #newEntry').val("") //this will clear the entry box on submit

	total = total + newThing

	$('#total').html('$' + total.toFixed(2))


})
})




//You still need to figure out a way to prevent this from breaking if you put something that is not a number in the field

// You can check "typeof" for newthing and if it's not a number "return" to stop the rest of the submit function from happening 


