$(document).ready(function () {


	$('#c-convert-button').click(function () {

		var celcius_pre_conversion = $('#c-input').val()
		
		celcius_pre_conversion = parseFloat(celcius_pre_conversion)

		var fahrenheit = (celcius_pre_conversion * 9/5) + 32

		$('#temperature-output').html(fahrenheit.toFixed(2) + ' &deg;F')

		if (fahrenheit >= 90) {
			$('body').css('background-color', 'red')
		} else if (fahrenheit >= 75) {
			$('body').css('background-color', 'orange')
		} else if (fahrenheit >= 50) {
			$('body').css('background-color', 'green')
		} else if (fahrenheit >= 32) {
			$('body').css('background-color', 'purple')
		} else {
			$('body').css('background-color', 'blue')
		}
	})


	$('#f-convert-button').click(function () {

		var fahrenheit_pre_conversion = $('#f-input').val()
		fahrenheit_pre_conversion = parseFloat (fahrenheit_pre_conversion)

		var celcius = (fahrenheit_pre_conversion - 32) * 5/9

		$('#temperature-output').html(celcius.toFixed(2) + ' &deg;C')

		if (celcius >= 33) {
			$('body').css('background-color', 'red')
		} else if (celcius >= 24) {
			$('body').css('background-color', 'orange')
		} else if (celcius >= 10) {
			$('body').css('background-color', 'green')
		} else if (celcius >= 0) {
			$('body').css('background-color', 'purple')
		} else {
			$('body').css('background-color', 'blue')
		}
	})


})