Instagram = function( _pics, _el ) {
	self = this;
	this.pics = _pics;
	this.images = [];
	this.photos = _el;
	this.t;
	this.resizing = false;
	this.loaded = 0;

	$(window).resize(function() {
		// clearTimeout( self.t );
		// self.t = setTimeout( self.animate, getRandomInt( 2000, 5000 ) );
	});

	this.load = function() {
		for( var i = 0, len = self.pics.length; i < len; i++ ) {
			var img = new Image();
			img.onload = function() {
				self.images.push(this);
				this.className = "photo";
				var photo = document.createElement("div");
				photo.className = "photo-wrapper";
				photo.appendChild(this.cloneNode());
				$(_el).append(photo);
				self.loaded++;
				if( self.loaded = self.pics.length ) {
					$(self.photos).addClass("on");			
				}
			}
			img.onerror = function() {
				//console.log("error");
				self.loaded++;
			}
			img.src = self.pics[i];
		}
		
		self.t = setTimeout( self.animate, 1000 );
	}

	this.animate = function() {
		clearTimeout( self.t );
		var img = getRandomInt( 0, self.images.length-1 );
		var el = $(".photo:eq(0)");


		img = getRandomInt( 0, self.images.length-1 );
		var next = self.images[img].cloneNode();
		$(next).css({
			left: -200
		});

		$(el).after(next);

		$(el).addClass("slideOut").css({
			left: $(el).width()+2
		});
		
		$(next).animate({
			left: -1
		}, 600 )

		// $(nextEl).css("opacity","0");

		// if( imgIndex == replaceIndex ) {
		// 	self.animate();
		// } else {
		// 	$(el).addClass("slideOut").css({
		// 		left: $(el).width()+10
		// 	}).bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
		// 		$(el).after(nextEl);
		// 		$(el).remove();
		// 		$(nextEl).animate({
		// 			opacity: 1
		// 		}, function() {
		// 			self.t = setTimeout( self.animate, 2000 );
		// 		}).removeClass("slideOut");
		// 	});
		// }
	}
}