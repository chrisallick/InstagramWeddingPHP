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
	}).animate('slow',{
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
		$("#registry").hide().removeClass("open");
		$("#schedule").hide().removeClass("open");
		if( $("#gettinghere").hasClass("open") ) {
			$("#gettinghere").slideUp(function(){
				$("#content").hide();
			}).removeClass("open");
		} else {
			$("#content").show();
			$("#gettinghere").slideDown().addClass("open");
		}
	});

	$("#nav .schedule").click(function(event){
		event.preventDefault();
		$("#registry").hide().removeClass("open");
		$("#gettinghere").hide().removeClass("open");
		if( $("#schedule").hasClass("open") ) {
			$("#schedule").slideUp(function(){
				$("#content").hide();
			}).removeClass("open");
		} else {
			$("#content").show();
			$("#schedule").slideDown().addClass("open");
		}
	});

	$("#nav .registry").click(function(event){
		event.preventDefault();
		$("#gettinghere").hide().removeClass("open");
		$("#schedule").hide().removeClass("open");
		if( $("#registry").hasClass("open") ) {
			$("#registry").slideUp(function(){
				$("#content").hide();
			}).removeClass("open");
		} else {
			$("#content").show();
			$("#registry").slideDown().addClass("open");
		}
	});

	$(".close").click(function(){
		$("#gettinghere").hide().removeClass("open");
		$("#schedule").hide().removeClass("open");
		$("#registry").hide().removeClass("open");
		$("#content").hide();
	});
});