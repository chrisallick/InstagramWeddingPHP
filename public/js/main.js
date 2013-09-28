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
});