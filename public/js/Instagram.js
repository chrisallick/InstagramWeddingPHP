Instagram = function( _pics, _el ) {
	self = this;
	this.pics = _pics;
	this.images = [];
	this.photos = _el;
	this.t;
	this.resizing = false;
	this.loaded = 0;
	this.lastAnimated = 0;

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
		
		setTimeout( function(){ self.animate(); }, 1000);
	}

	this.animate = function() {
		//clearTimeout( self.t );

		// pick one
		var img = getRandomInt( 0, self.images.length-1 );
		if( img == self.lastAnimated ) {
			console.log("repeat");
			self.animate();
			return false;
		}
		var el = $(".photo:eq("+img+")");
		self.lastAnimated = img;

		// pick next one
		img = getRandomInt( 0, self.images.length-1 );
		var next = self.images[img].cloneNode();

		$(el).after(next);

		var direction = getRandomInt(0, 3);
		switch(direction) {
		case 0:
			$(next).css("left", "-200px");
			$(el).animate({ left: '200px' }, 2000, 'easeInOutBack');
			$(next).animate({ left: '0px' }, 2000, 'easeInOutBack');
			break;
		case 1:
			$(next).css("top", "200px");
			$(el).animate({ top: '-200px' }, 2000, 'easeInOutBack');
			$(next).animate({ top: '0px' }, 2000, 'easeInOutBack');
		 	break;
		case 2:
			$(next).css("left", "200px");
			$(el).animate({ left: '-200px' }, 2000, 'easeInOutBack');
			$(next).animate({ left: '0px' }, 2000, 'easeInOutBack');
		 	break;
		 case 3:
			$(next).css("top", "-200px");
			$(el).animate({ top: '200px' }, 2000, 'easeInOutBack');
			$(next).animate({ top: '0px' }, 2000, 'easeInOutBack');
		 	break;
		}

		setTimeout(function(){
			$(el).remove();
			setTimeout( function(){ self.animate(); }, getRandomInt( 1000, 4000 ));
		}, 2250);
	}
}