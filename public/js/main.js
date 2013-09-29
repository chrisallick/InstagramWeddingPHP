$(window).load(function(){
	instagram.load();
});

var instagram;
$(document).ready(function() {
	instagram = new Instagram( pics, $("#photos") );

	$("#hashtag").css({
		top: $(document).height()/2 - ($("#hashtag").height()+60)/2,
		left: $(document).width()/2 - ($("#hashtag").width()+60)/2
	}).animate({
		opacity: 1
	});

	$(window).resize(function(){
		$("#hashtag").css({
			top: $(document).height()/2 - ($("#hashtag").height()+60)/2,
			left: $(document).width()/2 - ($("#hashtag").width()+60)/2
		});
	});

	$("#nav .gettinghere").click(function(event){
		event.preventDefault();
		if( $("#gettinghere").hasClass("open") ) {
			$("#gettinghere").slideUp().removeClass("open");
		} else {
			$("#gettinghere").slideDown().addClass("open");
		}
	});

	$("#nav .schedule").click(function(event){
		event.preventDefault();
		if( $("#schedule").hasClass("open") ) {
			$("#schedule").slideUp().removeClass("open");
		} else {
			$("#schedule").slideDown().addClass("open");
		}
	});

	$("#nav .registry").click(function(event){
		event.preventDefault();
		if( $("#registry").hasClass("open") ) {
			$("#registry").slideUp().removeClass("open");
		} else {
			$("#registry").slideDown().addClass("open");
		}
	});
});