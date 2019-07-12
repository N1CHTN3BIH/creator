'use strict';

$(document).ready(function(){
	var createUrl = function(){

		//DEMO page github
		var headlineCustom = $('input.headlineCustom').val();
		var overlayCustom = $('input.overlayCustom').val();
		var epicname = $('input.epicnameCustom').val();
		var buttonCustom = $('input.buttonCustom').val();
		var alertValue = $('input.value').val() * 60000;
		var direction = $( ".direction option:selected" ).text();

		var url = 'file:///D:/CodeRepository/private/creator/alertbox.html?' + '&' + headlineCustom + '&' + overlayCustom + '&' + epicname + '&' + buttonCustom + '&' + alertValue + '&' + direction;

		window.location.href = url;

	}

	$('.createAlert').click(function(){
		createUrl();
	});

});