$(window).load(function(){
	instagram.load(function(){
		$("#hashtag").mousemove(function(){
			$(this).delay(500).fadeOut('slow');
			$("#nav").animate({
				opacity: 1
			})
		});
	});
});

var instagram, faded = false;
$(document).ready(function() {
	instagram = new Instagram( pics, $("#photos") );

	$("#hashtag p").css({
		top: $(document).height()/2 - ($("#hashtag p").height())/2,
		//left: $(document).width()/2 - ($("#hashtag p").width())/2
	}).animate({
		opacity: 1
	});

	$(window).resize(function(){
		$("#hashtag p").css({
			top: $(document).height()/2 - ($("#hashtag p").height()+60)/2
			//left: $(document).width()/2 - ($("#hashtag").width()+60)/2
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