Instagram = function( _pics, _el ) {
	self = this;
	this.pics = _pics;
	this.images = [];
	this.new_images = [];

	this.currentNextImage = 0;

	this.photos = _el;
	this.resizing = false;
	this.loaded = 0;
	this.onLoad;

	this.load = function( _onLoad ) {
		self.onLoad = _onLoad;
		var rows = Math.ceil($("#wrapper").width()/200);
		var cols = Math.ceil($(document).height()/200);
		var visible = (rows * cols) + 3;
		
		console.log( rows, cols, visible, self.pics.length );

		var load = self.pics.length;
		if( visible < self.pics.length-1 ) {
			load = visible;
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

		//console.log( "animate", img );

		//console.log(  self.new_images, self.currentNextImage );

		var next = self.new_images[self.currentNextImage].cloneNode(); 
		self.currentNextImage++;
		if( self.currentNextImage >= self.new_images.length ) {
			self.currentNextImage = 0;
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
			setTimeout( function(){ self.animate(); }, getRandomArbitary( 300 ));
		}, 2250);
	}
}