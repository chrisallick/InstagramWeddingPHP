Instagram = function( _pics, _el, _mobile ) {
	self = this;
	this.pics = _pics;
	this.images = [];
	this.new_images = [];

	this.photos = _el;
	this.mobile = _mobile;
	this.resizing = false;
	this.loaded = 0;
	this.lastAnimated = 0;
	this.rows = 0;
	this.cols = 0;
	this.visible = 0; 
	this.onLoad;

	this.load = function( _onLoad ) {
		self.onLoad = _onLoad;
		self.rows = Math.ceil($("#wrapper").width()/200);
		self.cols = Math.ceil($(window).height()/200);
		self.visible = (self.rows * self.cols) + 3;
		
		console.log( self.rows, self.cols, self.visible, self.pics.length );

		var load = self.pics.length;
		if( self.visible < self.pics.length-1 ) {
			load = self.visible;
		}

		for( var i = 0, len = load-1; i < len; i++ ) {
			var img = new Image();
			img.onload = function() {
				this.className = "photo";
				self.images.push(this);
				var photo = document.createElement("div");
				photo.className = "photo-wrapper";
				photo.appendChild(this.cloneNode());
				$(_el).append(photo);
				self.loaded++;
				if( self.loaded == load-1 ) {
					$(self.photos).addClass("on");
					self.onLoad();		
				}
			}
			img.onerror = function() {
				self.loaded++;
				console.log( "error" );
				if( self.loaded == load-1 ) {

					$(self.photos).addClass("on");	
				}
			}
			img.src = self.pics[i];
		}
		
		setTimeout( function(){ self.animate(); }, 1000);

		for( var j = i, len = self.pics.length-1; j < len; j++ ) {
			var img = new Image();
			img.onload = function() {
				this.className = "photo";
				self.new_images.push(this);
			}
			img.onerror = function() {
				console.log( "error" );
 				self.new_images.splice(index, 1);
			}
			img.src = self.pics[j];
		}
	}

	this.addImages = function( _new_images ) {
		for( var i = 0, len = _new_images.length; i < len; i++ ) {
			var img = new Image();
			img.onload = function() {
				this.className = "photo";
				self.new_images.push(this);
			}
			img.onerror = function() {
				console.log( "error" );
 				self.new_images.splice(index, 1);
			}
			img.src = self.pics[i];
		}
	}

	this.animate = function() {
		// pick one
		var img = getRandomInt( 0, self.images.length-1 );
		if( img == self.lastAnimated ) {
			console.log("repeat");
			self.animate();
			return false;
		}
		var el = $(".photo:eq("+img+")");
		self.lastAnimated = img;

		// are there unused images?
		var next;
		if( self.new_images.length > 0 ) {
			//console.log("still unused images", self.new_images.length);

			// pick one
			img = getRandomInt( 0, self.new_images.length-1 );
			next = self.new_images[img].cloneNode(); 
			var new_image = self.new_images.splice(img, 1)[0];
			self.images.push(new_image);
		} else {
			console.log("out of new images");
			img = getRandomInt( 0, self.images.length-1 );
			next = self.images[img].cloneNode();
		}

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
			//setTimeout( function(){ self.animate(); }, getRandomArbitary( 500, 2000 ));
			setTimeout( function(){ self.animate(); }, getRandomArbitary( 500 ));
		}, 2250);
	}
}