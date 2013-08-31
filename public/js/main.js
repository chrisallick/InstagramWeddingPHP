$(window).load(function(){
	instagram.load();
});

var instagram;
$(document).ready(function() {
	instagram = new Instagram( $("#photos") );
});