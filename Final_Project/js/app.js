//this is where you'll put the ajax call

$(document).ready(function () {


	function randomNum () {
		console.log('I made a random number')
		return Math.floor(Math.random() * 395)
	}

	//instead of defining a variable by running a function to get a number, make a function
	//to get the random number, then define the variable as that function

	$('.adventure-button').click(function () {
		$('#loading').show()

		num = randomNum()



		makeAjaxCall()
		console.log('I made the ajax call')
		
	})

	function makeAjaxCall () {
		$.ajax({
			url: 'http://api.nytimes.com/svc/events/v2/listings.json?&filters=category:(-Movies)&limit=500&date_range=2016-01-01:2016-12-31&api-key=700d159ff639b606164f25bf2aec2dd6:15:67386384',
			type: 'GET',
		})
		.done(function (res) {
			console.log('Success!')
			$('#loading').hide()
			$('#results_div').show()
			console.log(res)
			var num = randomNum()
			console.log(num)
			var evt = res.results[num]
			window.evt = res
			//creating the evt variable allows you to skip writing res.results[num] or some version of that in all of the functions that require digging into a sub object


			//writeJSON(evt)
			writeCopyright(res)
			//leave copyright alone because this is coming from the main object
			//getResults(res)
			getEventName(evt)
			writeEventURL(evt)
			writeDescription(evt)
			writeCity(evt)
			writeNeighborhood(evt)
			writeTimesPick(evt)
			writeCritic(evt)
			getVenue(evt)
			writeVenueURL(evt)
			writeKidFriendly(evt)
			writeDateTime(evt)
			writeIsFree(evt)
			writePrice(evt)
			getCategory(evt)

			
		})
		.fail(function (xhr) {
			console.log('Error: ', xhr)
		})
	}

	// function writeJSON (ajaxRes) {
	// 	$('#raw-json').text(JSON.stringify(ajaxRes))
	// }

	function getCategory (evt, category) {
		var category = evt.category

		if (!category) {
			$('#category-image img').attr('src', 'images/others/ifNoneDefault.png')
		} else {
			$('#category-image img').attr('src', 'images/others/' + category + '.png')
		}
		console.log(category)
	}

	function getEventName (evt) {
		var event_name = evt.event_name

		$('.event_name').html(event_name)
		//you need to use this to grab the name of the event
		//you also have to display it so you can grab it in the function with the url
	}

	function writeEventURL (evt) {
		var event_detail_url = evt.event_detail_url
		var event_name = $('.event_name').text()
		$('.event_name').html("")
		//you need to grab the name and store the value because this function
		//can't see inside the one where you pull the name from the JSON

		$('.event_detail_url').html('<a href="' + event_detail_url + '">' + event_name + '</a>')
	}

	function writeDescription (evt) {
		var web_description = evt.web_description

		$('#web_description').html(web_description)
	}

	function writeCity (evt) {
		var city = evt.city

		if (!city) {
			$('#city').html('New York City')
		} else {
			$('#city').html(city)
		}
	}

	function writeNeighborhood (evt) {
		var neighborhood = evt.neighborhood

		if(!neighborhood) {
			$('#neighborhood').html('Unknown')
		} else {
			$('#neighborhood').html(neighborhood)
		}
	//var neighborhood = ajaxRes.results[num].neighborhood

	}

	function writeTimesPick (evt) {
		var times_pick = evt.times_pick
		if (times_pick == true) {
			$('#times_pick').html('Yes')
		} else {
			$('#times_pick').html('No')
		}
	}

	function writeCritic (evt) {
		var critic_name = evt.critic_name

		if (!critic_name) {
			$('#critic_name').html('Unknown')
		} else {
			$('#critic_name').html(critic_name)
		}
	}

	function getVenue (evt) {
		var venue_name = evt.venue_name

		if(!venue_name) {
			$('#venue_name').html('Various')
		} else {
			$('#venue_name').html(venue_name)
			console.log('i fixed the missing venue problem')
		}
	}

	function writeVenueURL (evt) {
		var venue_detail_url = evt.venue_detail_url
		var venue_name = $('#venue_name').text()
		$('#venue_name').html("")

		$('#venue_detail_url').html('<a href="' + venue_detail_url + '">' + venue_name + '</a>')
	}

	function writeKidFriendly (evt) {
		var kid_friendly = evt.kid_friendly

		if (kid_friendly == true) {
			$('#kid_friendly').html('Yes')
		} else {
			$('#kid_friendly').html('No')
		}
	}

	function writeDateTime (evt) {
		var date_time_description = evt.date_time_description

		$('#date_time_description').html(date_time_description)

		var printed_date_time_description = $('#date_time_description').text()

		if (printed_date_time_description == "continuing") {
			$('#date_time_description').html("Ongoing Event")
		} else {
			$('#date_time_description').html(date_time_description)
		}
	}

	function writeIsFree (evt) {
		var free = evt.free

		if (free == true) {
			$('#price').html('Free')
		} else {
			$('#price').html('Unclear')
		}
	}

	function writePrice (evt) {
		var price = evt.price

		if (price == "free") {
			$('#price').html('Free')
		} else {
			$('#price').html(price)
		}
	}

	function writeCopyright (ajaxRes) {
		var copyright = ajaxRes.copyright

		$('#footer').html("Data " + copyright)
	}

	$('.adventure-button').click(function () {
		$('#before').hide()
	})

	$('#retry-button').click(function () {
		$('#results_div').hide()
	})

	//Array.prototype.forEach.call(evt.results, function(result, index){console.log(index, result.city)});
	//use the thing above in the console to find all of the missing parameters, just replace .city with what you're looking for

})