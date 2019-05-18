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

	var data = window.location.href;

	var url = data.split('&');

	body.addClass(decodeURIComponent(url[6]));
	headline.html(decodeURIComponent(url[1]));
	overlay.html(decodeURIComponent(url[2]));
	epicname.html(decodeURIComponent(url[3]));
	button.html(decodeURIComponent(url[4]));

	setTimeout(function(){
		location.reload();
	}, decodeURIComponent(url[5]));





});