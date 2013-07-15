$(function() {

	var items = $('.slideRight, .slideLeft');
	var content = $('.content');
	var navitems = $('.navitems');
	
	var open = function() {
							$(items).removeClass('close').addClass('open');
						}
	var close = function() { 
							$(items).removeClass('open').addClass('close');
						}

	$('#navToggle').click(function(){
		if (content.hasClass('open')) {$(close)}
		else {$(open)}
	});
	content.click(function(){
		if (content.hasClass('open')) {$(close)}
	});
	navitems.click(function(){
		if (content.hasClass('open')) {$(close)}
	});

});