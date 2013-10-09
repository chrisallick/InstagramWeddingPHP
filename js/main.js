fetchMorePhotos = function() {
	clearTimeout( fetch_timer );
	/*
		make api call to instagram
	*/
	var q = "./instagram.php";
	$.ajax({
	    url: q,
	    type: "GET",
	    dataType: "JSON",
	    success:function(data){
			// console.log( data.length );
			// console.log( data );
			var new_images = new Array()
	    	for( var j = 0, data_len = data.length; j < data_len; j++ ) {
		    	if( pics.indexOf(data[j]) == -1 ) {
		    		new_images.push(data[j]);
		    		console.log("new image");
		    	} else {
		    		console.log("not new");
		    	}
	    	}
	    	if( new_images.length > 0 ) {
	    		instagram.addImages( new_images );
	    	}
	    }
	});

	fetch_timer = setTimeout( fetchMorePhotos, 10000 );
}

runFade = function() {
	faded = true;
	clearTimeout( fade_timer );
	$("#hashtag").fadeOut('slow', function() {
		$("#nav").fadeIn();
	});
}

var instagram, faded = false, fade_timer, fetch_timer;
$(document).ready(function() {
	fetch_timer = setTimeout( fetchMorePhotos, 10000 );
	
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

		console.log("go");

		$("#content").show();
		$("#nav").fadeOut(function(){
			$("#gettinghere").slideDown(function(){
				$(".close").fadeIn();
			}).addClass("open");			
		});

	});

	$("#nav .schedule").click(function(event){
		event.preventDefault();

		$("#content").show();
		$("#nav").fadeOut(function(){
			$("#schedule").slideDown(function(){
				$(".close").fadeIn();
			}).addClass("open");			
		});
	});

	$("#nav .registry").click(function(event){
		event.preventDefault();

		$("#content").show();
		$("#nav").fadeOut(function(){
			$("#registry").slideDown(function(){
				$(".close").fadeIn();
			}).addClass("open");			
		});
	});

	$(".close").click(function() {
		$(this).fadeOut(function(){
			$(".open").slideUp(function(){
				$("#content").hide();
				$("#nav").fadeIn();
			}).removeClass("open");
		});
	});

	/*
		load from cache
	*/
    instagram = new Instagram( shuffle(pics), $("#photos") );
	instagram.load(function() {
		if( !faded ) {
			$("#hashtag").mousemove(function() {
				clearTimeout( fade_timer );
				runFade();
			});
		}
		fade_timer = setTimeout( runFade, 5000 );
	});
});