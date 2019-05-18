'use strict';

$(document).ready(function(){


	var headline = $('.support h1');
	var overlay = $('.overlay');
	var epicname = $('.typewriter h1');
	var button = $('.button button');
	var body = $('body');

	fitty('.support h1', {
	  maxSize: 40
	});
	fitty('.typewriter h1', {
	  maxSize: 40
	});
	fitty('.overlay');

	body.addClass(window.alertPosition);
	headline.html(window.headline);
	overlay.html(window.thankYou);
	epicname.html(window.epicName);
	button.html(window.button);

	setTimeout(function(){
		location.reload();
	}, window.timeValue)
});