//this is where you'll put the ajax call

$(document).ready(function () {

	$('.adventure-button').click(function () {
		makeAjaxCall()
	})

	function makeAjaxCall () {
		$.ajax({
			url: 'http://api.nytimes.com/svc/events/v2/listings.json?&filters=category:(-Movies)&limit=500&date_range=2015-01-01:2016-12-31&api-key=700d159ff639b606164f25bf2aec2dd6:15:67386384',
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
		var event_name = ajaxRes.results[0].event_name

		$('.event_name').html(event_name)
		//you need to use this to grab the name of the event
		//you also have to display it so you can grab it in the function with the url
	}

	function writeEventURL (ajaxRes) {
		var event_detail_url = ajaxRes.results[0].event_detail_url
		var event_name = $('.event_name').text()
		$('.event_name').html("")
		//you need to grab the name and store the value because this function
		//can't see inside the one where you pull the name from the JSON

		$('.event_detail_url').html('<a href="' + event_detail_url + '">' + event_name + '</a>')
		console.log('I did this')
	}

	function writeDescription (ajaxRes) {
		var web_description = ajaxRes.results[0].web_description

		$('#web_description').html(web_description)
	}

	function writeCity (ajaxRes) {
		var city = ajaxRes.results[0].city

		$('#city').html(city)
	}

	function writeNeighborhood (ajaxRes) {
		var neighborhood = ajaxRes.results[0].neighborhood

		$('#neighborhood').html(neighborhood)
	}

	function writeTimesPick (ajaxRes) {
		var times_pick = ajaxRes.results[0].times_pick
		if (times_pick == true) {
			$('#times_pick').html('Yes')
		} else {
			$('#times_pick').html('No')
		}

		console.log('this is working')
	}

	function writeCritic (ajaxRes) {
		var critic_name = ajaxRes.results[0].critic_name

		$('#critic_name').html(critic_name)
	}

	function getVenue (ajaxRes) {
		var venue_name = ajaxRes.results[0].venue_name

		$('#venue_name').html(venue_name)
	}

	function writeVenueURL (ajaxRes) {
		var venue_detail_url = ajaxRes.results[0].venue_detail_url
		var venue_name = $('#venue_name').text()
		$('#venue_name').html("")

		$('#venue_detail_url').html('<a href="' + venue_detail_url + '">' + venue_name + '</a>')
		console.log('I did too this')
	}

	function writeKidFriendly (ajaxRes) {
		var kid_friendly = ajaxRes.results[0].kid_friendly

		if (kid_friendly == true) {
			$('#kid_friendly').html('Yes')
		} else {
			$('#kid_friendly').html('No')
		}
		console.log('kid friendly')
	}

	function writeDateTime (ajaxRes) {
		var date_time_description = ajaxRes.results[0].date_time_description

		$('#date_time_description').html(date_time_description)

		var printed_date_time_description = $('#date_time_description').text()

		if (printed_date_time_description = "continuing") {
			$('#date_time_description').html("Ongoing Event")
		} else {
			$('#date_time_description').html(date_time_description)
		}

		console.log('date $ time')
	}

	function writeIsFree (ajaxRes) {
		var free = ajaxRes.results[1].free

		if (free == true) {
			$('#price').html('Free')
		} else {
			$('#price').html('Unclear')
		}
		console.log('this thing is free')
	}

	function writePrice (ajaxRes) {
		var price = ajaxRes.results[0].price

		$('#price').html(price)
		console.log ('i got the price')
	}


	function writeCopyright (ajaxRes) {
		var copyright = ajaxRes.copyright

		$('#footer').html(copyright)
	}

	

	

	// function writeEventName (ajaxRes) {
	// 	var event_name = ajaxRes.event_name

	// 	$('#test-title-test-title').html(event_name)
	// }



})