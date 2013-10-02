runFade = function() {
	faded = true;
	clearTimeout( ft );
	$("#hashtag").fadeOut('slow', function() {
		$("#nav").animate({
			opacity: 1
		});
	});

}
$(window).load(function(){
	instagram.load(function() {
		if( !faded ) {
			$("#hashtag").mousemove(function() {
				clearTimeout( ft );
				runFade();
			});
		}

		ft = setTimeout( runFade, 5000 );
	});
});

var instagram, faded = false, ft;
$(document).ready(function() {
	instagram = new Instagram( pics, $("#photos") );

	$("#hashtag img").css({
		top: $(document).height()/2 - ($("#hashtag img").height())/2,
		left: $(document).width()/2 - ($("#hashtag img").width())/2
	}).animate({
		opacity: 1
	});

	$(window).resize(function(){
		$("#hashtag img").css({
			top: $(document).height()/2 - ($("#hashtag img").height()+60)/2,
			left: $(document).width()/2 - ($("#hashtag img").width()+60)/2
		});
	});

	$("#nav .gettinghere").click(function(event){
		event.preventDefault();
		$("#registry").hide();
		$("#schedule").hide();
		if( $("#gettinghere").hasClass("open") ) {
			$("#gettinghere").slideUp().removeClass("open");
		} else {
			$("#gettinghere").slideDown().addClass("open");
		}
	});

	$("#nav .schedule").click(function(event){
		event.preventDefault();
		$("#registry").hide();
		$("#gettinghere").hide();
		if( $("#schedule").hasClass("open") ) {
			$("#schedule").slideUp().removeClass("open");
		} else {
			$("#schedule").slideDown().addClass("open");
		}
	});

	$("#nav .registry").click(function(event){
		event.preventDefault();
		$("#gettinghere").hide();
		$("#schedule").hide();
		if( $("#registry").hasClass("open") ) {
			$("#registry").slideUp().removeClass("open");
		} else {
			$("#registry").slideDown().addClass("open");
		}
	});
});