$(document).ready(function () {

	var myMap;

	function initMap() {
		myMap = new google.maps.Map(document.getElementById('map'), {
			center: {lat: 40.7127, lng: -74.0059},
			zoom: 8
		});
	}

	initMap()

	// that function was being called in the script at the end of the page - you got rid of it and added that function here

	var marker = new google.maps.Marker({
		position: {lat: 40.7127, lng: -74.0059},
		map: myMap,
		title: 'New York City'
	})

	//the function above adds a marker at that specific latitude and longitude

})

