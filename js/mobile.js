var instagram;
$(document).ready(function() {
	/*
		load from cache
	*/
    instagram = new Instagram( shuffle(pics), $("#photos") );
	instagram.load(function() {});

	$("#nav .gettinghere").click(function(event){
		event.preventDefault();

		$("#content").hide();
		$("#content .close").show();

		$("#registry").hide();
		$("#schedule").hide();

		$("body,html").scrollTop(0);


		$("#content").css({height:"100%"}).show();

		$("#gettinghere").css({height:"100%"}).show();
		
		$("#close").show();
	});

	$("#nav .schedule").click(function(event){
		event.preventDefault();
		
		$("#content").hide();
		$("#content .close").show();

		$("#registry").hide();
		$("#gettinghere").hide();

		$("body,html").scrollTop(0);
		$("#schedule").show();

		$("#content").show();
		$("#close").show();
	});

	$("#nav .registry").click(function(event){
		event.preventDefault();
		
		$("#content").hide();
		$("#content .close").show();


		$("#schedule").hide();
		$("#gettinghere").hide();

		$("body,html").scrollTop(0);
		$("#registry").show();

		$("#content").show();
		$("#close").show();
	});

	$("#close").click(function() {
		$(this).hide();
		$("#content").hide();
	});
});