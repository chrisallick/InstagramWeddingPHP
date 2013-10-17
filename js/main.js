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

	fetch_timer = setTimeout( fetchMorePhotos, 30000 );
}

runFade = function() {
	faded = true;
	clearTimeout( fade_timer );
	$("#hashtag, #overlay").fadeOut('slow', function() {
		$("#nav").fadeIn();
	});
}

var instagram, faded = false, fade_timer, fetch_timer;
$(document).ready(function() {
	fetch_timer = setTimeout( fetchMorePhotos, 30000 );
	
	$("#hashtag").css({
		top: $(document).height()/2 - $("#hashtag").height()/2,
		left: $(document).width()/2 - $("#hashtag").width()/2
	}).fadeIn();

	$(window).resize(function(){
		$("#hashtag").css({
			top: $(document).height()/2 - ($("#hashtag").height()+60)/2,
			left: $(document).width()/2 - ($("#hashtag").width()+60)/2
		});
	});

	$("#nav .gettinghere").click(function(event){
		event.preventDefault();

		console.log("go");

		$("#content").show();
		$("#nav").fadeOut(function(){
			$("#gettinghere").slideDown(function(){
				$(".close-arrow").fadeIn();
				$(".close-x", this).fadeIn();
			}).addClass("open");			
		});

	});

	$("#nav .schedule").click(function(event){
		event.preventDefault();

		$("#content").show();
		$("#nav").fadeOut(function(){
			$("#schedule").slideDown(function(){
				$(".close-arrow").fadeIn();
				$(".close-x", this).fadeIn();
			}).addClass("open");			
		});
	});

	$("#nav .registry").click(function(event){
		event.preventDefault();

		$("#content").show();
		$("#nav").fadeOut(function(){
			$("#registry").slideDown(function(){
				$(".close-arrow", this).fadeIn();
				$(".close-x", this).fadeIn();
			}).addClass("open");		
		});
	});

	$(".close-arrow").click(function() {
		$(".close-x").fadeOut();
		$(this).fadeOut(function(){
			$(".open").slideUp(function(){
				$("#content").hide();
				$("#nav").fadeIn();
			}).removeClass("open");
		});
	});

	$(".close-x").click(function() {
		$(".close-arrow").fadeOut();
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
		$(document).mousemove(function() {
			if( !faded ) {
				clearTimeout( fade_timer );
				runFade();
			}
		});
		fade_timer = setTimeout( runFade, 5000 );
	});
});