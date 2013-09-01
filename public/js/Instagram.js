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
				if( self.loaded == self.pics.length-1 ) {
					$(self.photos).addClass("on");			
				}
			}
			img.onerror = function() {
				self.loaded++;
			}
			img.src = self.pics[i];
		}
		
		self.t = setTimeout( self.animate, 1000 );
	}

	this.animate = function() {
		//clearTimeout( self.t );
		// pick one
		var img = getRandomInt( 0, self.images.length-1 );
		var el = $(".photo:eq("+img+")");
		// pick next one
		img = getRandomInt( 0, self.images.length-1 );
		var next = self.images[img].cloneNode();

		var direction = getRandomInt(0, 3);
		switch(direction) {
		case 0:
			$(next).css({
				top: -200
			});

			$(el).after(next);

			$(el).addClass("slideOut").css({
				top: $(el).height()+2
			});

			$(next).css({
				top: -1
			});
			// , 600, 'linear', function() {
			// 	$(el).remove();
			// 	self.t = setTimeout( self.animate, 1000 );
			// });
			break;
		case 1:
			$(next).css({
				left: -200
			});

			$(el).after(next);

			$(el).addClass("slideOut").css({
				left: $(el).width()+2
			});

			$(next).css({
				left: -1
			});
			// , 600, 'linear', function() {
			// 	$(el).remove();
			// 	self.t = setTimeout( self.animate, 1000 );
			// });
		 	break;
		case 2:
			$(next).css({
				top: 200
			});

			$(el).after(next);

			$(el).addClass("slideOut").css({
				top: -$(el).height()+2
			});

			$(next).css({
				top: -1
			});
			//, 600, 'linear', function() {
			// 	$(el).remove();
			// 	self.t = setTimeout( self.animate, 1000 );
			// });
		 	break;
		 case 3:
			$(next).css({
				left: 200
			});

			$(el).after(next);

			$(el).addClass("slideOut").css({
				left: -$(el).width()+2
			});

			$(next).css({
				left: -1
			});
			// , 600, 'linear', function() {
			// 	$(el).remove();
			// 	self.t = setTimeout( self.animate, 1000 );
			// });
		 	break;
		}

		setTimeout(function(){
			$(el).remove();
			self.animate();
		}, 1000)
	}
}