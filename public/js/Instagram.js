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
		$(".photo", self.photos).each(function(index,value) {
			var obj = {};
			obj["index"] = index;
			obj["image"] = $(this);
			self.images.push( obj );
		});

		$(self.photos).addClass("on");
		//self.t = setTimeout( self.animate, 1000 );
	}

	this.animate = function() {
		clearTimeout( self.t );
		var imgIndex = getRandomInt( 0, self.images.length-1 );
		var replaceIndex = getRandomInt( 0, self.images.length-1 );
		var el = self.images[imgIndex]["image"];
		var nextEl = $(self.images[replaceIndex]["image"]).clone();
		$(nextEl).removeClass("slideOut").css("opacity","0");

		if( imgIndex == replaceIndex ) {
			self.animate();
		} else {
			$(el).addClass("slideOut").css({
				left: $(el).width()+10
			}).bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
				$(el).after(nextEl);
				$(el).remove();
				$(nextEl).animate({
					opacity: 1
				}, function() {
					self.t = setTimeout( self.animate, 2000 );
				});
			});
		}
	}
}