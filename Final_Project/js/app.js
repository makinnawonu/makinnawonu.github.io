//this is where you'll put the ajax call

$(document).ready(function () {

	// $('.adventure-button').click(function () {
	// 	var number = Math.floor(Math.random() * 40);
	// console.log(number)
	// }) RIGHT NOW THAT ISN'T WORKING

	//$('.adventure-button').click(randomNum)

	var num

	function randomNum () {
		return Math.floor(Math.random() * 40)
		console.log(' made a random number')
	}

	$('.adventure-button').click(randomNum)

	var num = randomNum()
	//instead of defining a variable by running a function to get a number, make a function
	//to get the random number, then define the variable as that function

	// var number = Math.floor(Math.random() * 40);
	// console.log(number)

	$('.adventure-button').click(function () {
		makeAjaxCall()
		console.log('I made the ajax call')
	})

	function makeAjaxCall () {
		$.ajax({
			url: 'http://api.nytimes.com/svc/events/v2/listings.json?&filters=category:(-Movies)&limit=50&date_range=2015-01-01:2016-12-31&api-key=700d159ff639b606164f25bf2aec2dd6:15:67386384',
			type: 'GET',
		})
		.done(function (res) {
			console.log('Success!')
			console.log(res)

			writeJSON(res)
			writeCopyright(res)
			//getResults(res)
			getEventName(res)
			writeEventURL(res)
			writeDescription(res)
			writeCity(res)
			writeNeighborhood(res)
			writeTimesPick(res)
			writeCritic(res)
			getVenue(res)
			writeVenueURL(res)
			writeKidFriendly(res)
			writeDateTime(res)
			writeIsFree(res)
			writePrice(res)
			
		})
		.fail(function (xhr) {
			console.log('Error: ', xhr)
		})
	}

	function writeJSON (ajaxRes) {
		$('#raw-json').text(JSON.stringify(ajaxRes))
	}

	function getEventName (ajaxRes) {
		var event_name = ajaxRes.results[num].event_name

		$('.event_name').html(event_name)
		//you need to use this to grab the name of the event
		//you also have to display it so you can grab it in the function with the url
	}

	function writeEventURL (ajaxRes) {
		var event_detail_url = ajaxRes.results[num].event_detail_url
		var event_name = $('.event_name').text()
		$('.event_name').html("")
		//you need to grab the name and store the value because this function
		//can't see inside the one where you pull the name from the JSON

		$('.event_detail_url').html('<a href="' + event_detail_url + '">' + event_name + '</a>')
	}

	function writeDescription (ajaxRes) {
		var web_description = ajaxRes.results[num].web_description

		$('#web_description').html(web_description)
	}

	function writeCity (ajaxRes) {
		var city = ajaxRes.results[num].city

		$('#city').html(city)
	}

	function writeNeighborhood (ajaxRes) {
		var neighborhood = ajaxRes.results[num].neighborhood

		$('#neighborhood').html(neighborhood)
	}

	function writeTimesPick (ajaxRes) {
		var times_pick = ajaxRes.results[num].times_pick
		if (times_pick == true) {
			$('#times_pick').html('Yes')
		} else {
			$('#times_pick').html('No')
		}
	}

	function writeCritic (ajaxRes) {
		var critic_name = ajaxRes.results[num].critic_name

		$('#critic_name').html(critic_name)
	}

	function getVenue (ajaxRes) {
		var venue_name = ajaxRes.results[num].venue_name

		$('#venue_name').html(venue_name)
	}

	function writeVenueURL (ajaxRes) {
		var venue_detail_url = ajaxRes.results[num].venue_detail_url
		var venue_name = $('#venue_name').text()
		$('#venue_name').html("")

		$('#venue_detail_url').html('<a href="' + venue_detail_url + '">' + venue_name + '</a>')
	}

	function writeKidFriendly (ajaxRes) {
		var kid_friendly = ajaxRes.results[num].kid_friendly

		if (kid_friendly == true) {
			$('#kid_friendly').html('Yes')
		} else {
			$('#kid_friendly').html('No')
		}
	}

	function writeDateTime (ajaxRes) {
		var date_time_description = ajaxRes.results[num].date_time_description

		$('#date_time_description').html(date_time_description)

		var printed_date_time_description = $('#date_time_description').text()

		if (printed_date_time_description == "continuing") {
			$('#date_time_description').html("Ongoing Event")
		} else {
			$('#date_time_description').html(date_time_description)
		}
	}

	function writeIsFree (ajaxRes) {
		var free = ajaxRes.results[num].free

		if (free == true) {
			$('#price').html('Free')
		} else {
			$('#price').html('Unclear')
		}
	}

	function writePrice (ajaxRes) {
		var price = ajaxRes.results[num].price

		if (price == "free") {
			$('#price').html('Free')
		} else {
			$('#price').html(price)
		}
	}

	function writeCopyright (ajaxRes) {
		var copyright = ajaxRes.copyright

		$('#footer').html(copyright)
	}

	$('.adventure-button').click(function () {
		$('#before').hide()
	})

	$('.adventure-button').click(function () {
		$('#results_div').show()
	})

})