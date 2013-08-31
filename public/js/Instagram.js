Instagram = function( _el ) {
	self = this;
	this.images = [];
	this.photos = _el;
	this.t;
	this.resizing = false;

	$(window).resize(function() {
		clearTimeout( self.t );
		self.t = setTimeout( self.animate, getRandomInt( 2000, 5000 ) );
	});

	this.load = function() {
		$(self.photos).addClass("on");

		$(".photo", self.photos).each(function(index,value) {
			var obj = {};
			obj["index"] = index;
			obj["image"] = $(this);
			self.images.push( obj );
		});

		self.t = setTimeout( self.animate, 1000 );
	}

	this.animate = function() {
		clearTimeout( self.t );
		var imgIndex = getRandomInt( 0, self.images.length-1 );
		var replaceIndex = getRandomInt( 0, self.images.length-1 );
		var el = self.images[imgIndex]["image"];
		var nextEl = $(self.images[replaceIndex]["image"]).clone();
		$(nextEl).css("opacity","0");

		//$(el).after($(nextEl));

		$(el).addClass("slideOut").css({
			left: $(el).width()+10
		}).bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
			$(el).after(nextEl);
			$(el).remove();
			$(nextEl).animate({
				opacity: 1
			})
		});

		//$(el).delay(1000).remove();
		// $(nextEl).animate({
		// 	opacity: 1
		// })
		self.t = setTimeout( self.animate, 1000 );
	}

	// this.animate = function( index ) {
	// 	// $(".photo").each(function(index,value) {
	// 	// 	$(this).addClass("slideOut");
	// 	// 	$(this).css({
	// 	// 		left: $(this).width()+10
	// 	// 	});
	// 	// });
	// 	console.log( index );
	// 	console.log( self.images[index] );
	// 	console.log( self.images[index]["image"] );
	// 	var image = self.images[index]["image"];
	// 	console.log( $(image).css("left") );
	// }

	// this.setAnimations = function() {
	// 	for( var i = 0, len = self.images.length; i < len; i++ ) {
	// 		var fadeAt = getRandomInt( 5000, 10000 );
	// 		setTimeout( function() {
	// 			self.animate( i );
	// 		}, fadeAt );
	// 	}
	// }
}