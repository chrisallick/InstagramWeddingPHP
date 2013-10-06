runFade = function() {
	faded = true;
	clearTimeout( ft );
	$("#hashtag").fadeOut('slow', function() {
		$("#nav").animate({
			opacity: 1
		});
	});
}

var instagram, faded = false, ft;
var pics_cache = JSON.parse('["http:\/\/distilleryimage0.s3.amazonaws.com\/1940f1f02e4211e3a4fb22000a1f97ec_6.jpg","http:\/\/distilleryimage7.s3.amazonaws.com\/f48e10822ad011e3967b22000aa80146_6.jpg","http:\/\/distilleryimage6.s3.amazonaws.com\/8209bb562ac611e3920622000ae9085f_6.jpg","http:\/\/distilleryimage0.s3.amazonaws.com\/1e9b12962ac011e3821b22000aeb0baa_6.jpg","http:\/\/distilleryimage9.s3.amazonaws.com\/c2dd3c6a29e111e3ac5222000a1f8ea3_6.jpg","http:\/\/distilleryimage0.s3.amazonaws.com\/007bc95e1cec11e39dc322000a1f9c8f_6.jpg","http:\/\/distilleryimage8.s3.amazonaws.com\/1f832b3a1aa811e3aa5e22000aa80116_6.jpg","http:\/\/distilleryimage5.s3.amazonaws.com\/45bcb6a0075b11e3b78322000a1fac13_6.jpg","http:\/\/distilleryimage11.s3.amazonaws.com\/b0f2095206c511e3b59022000aa80136_6.jpg","http:\/\/distilleryimage5.s3.amazonaws.com\/05eb59c4012911e3a77f22000a9e29a0_6.jpg","http:\/\/distilleryimage4.s3.amazonaws.com\/e31114c2ffeb11e29d7122000a1f97c6_6.jpg","http:\/\/distilleryimage4.s3.amazonaws.com\/a3808abaddc511e286e122000a9e080f_6.jpg","http:\/\/distilleryimage7.s3.amazonaws.com\/4559d28e886611e2b55e22000a9f09fb_6.jpg","http:\/\/distilleryimage4.s3.amazonaws.com\/bcbeaf86881411e2a0d522000a1f970a_6.jpg","http:\/\/distilleryimage6.s3.amazonaws.com\/268cf350881511e2904b22000a1f8c1d_6.jpg","http:\/\/distilleryimage6.s3.amazonaws.com\/ee0c6d587aea11e2a23c22000a1f9d66_6.jpg","http:\/\/distilleryimage2.s3.amazonaws.com\/638e48e8793411e2b7ea22000a1f9366_6.jpg","http:\/\/distilleryimage10.s3.amazonaws.com\/9a328f4e764611e2a73722000a1f9317_6.jpg","http:\/\/distilleryimage10.s3.amazonaws.com\/94c3f19476df11e2b44322000a1f92df_6.jpg","http:\/\/distilleryimage6.s3.amazonaws.com\/f207ff8c6da511e2a61722000a1f9d6d_6.jpg","http:\/\/distilleryimage6.s3.amazonaws.com\/6bf7ed6c68b911e28b3722000a1f99d9_6.jpg","http:\/\/distilleryimage5.s3.amazonaws.com\/17dc6b3268b311e2939b22000a1f9251_6.jpg","http:\/\/distilleryimage9.s3.amazonaws.com\/6752c25868b111e297b922000a1fa527_6.jpg","http:\/\/distilleryimage1.s3.amazonaws.com\/019a6886680111e2a50222000a1fb870_6.jpg","http:\/\/distilleryimage4.s3.amazonaws.com\/ba0d7a9a5cd311e2a52022000a1f9e5e_6.jpg","http:\/\/distilleryimage2.s3.amazonaws.com\/a2d0181e5da111e2bcaf22000a1fbcb3_6.jpg","http:\/\/distilleryimage6.s3.amazonaws.com\/7d47e44e5c8111e2969522000a9f14e8_6.jpg","http:\/\/distilleryimage7.s3.amazonaws.com\/dbc5dc2056f411e2902222000a1fa52b_6.jpg","http:\/\/distilleryimage0.s3.amazonaws.com\/0f950df653cf11e2a7ed22000a1f8f24_6.jpg","http:\/\/distilleryimage10.s3.amazonaws.com\/136696b63c0a11e2a1bd22000a9f1361_6.jpg","http:\/\/distilleryimage7.s3.amazonaws.com\/89e6eb123b6d11e29d0322000a1f97e3_6.jpg","http:\/\/distilleryimage10.s3.amazonaws.com\/6f7620a2365b11e2a9d522000a1fb17d_6.jpg","http:\/\/distilleryimage11.s3.amazonaws.com\/ce5cdfbc34d911e2802422000a9e0927_6.jpg","http:\/\/distilleryimage8.s3.amazonaws.com\/1014dd1831e911e283fd12313817a15a_6.jpg","http:\/\/distilleryimage9.s3.amazonaws.com\/4872fdfa2b7e11e2abce22000a1f96d4_6.jpg","http:\/\/distilleryimage6.s3.amazonaws.com\/8e89d6b6208311e2aaa222000a1fb843_6.jpg","http:\/\/distilleryimage8.s3.amazonaws.com\/5d6ab0221bca11e2984822000a1f9707_6.jpg","http:\/\/distilleryimage8.s3.amazonaws.com\/92e4332e1cc611e3b74e22000a9e07d7_6.jpg","http:\/\/distilleryimage7.s3.amazonaws.com\/be632ae0287f11e393e422000aaa09ed_6.jpg","http:\/\/distilleryimage3.s3.amazonaws.com\/16182c621e3611e3902022000a1ddbd3_6.jpg","http:\/\/distilleryimage2.s3.amazonaws.com\/6a959092fcba11e2aa8c22000a1fc809_6.jpg","http:\/\/distilleryimage1.s3.amazonaws.com\/7865b2a6e76611e2882622000a1f985d_6.jpg","http:\/\/distilleryimage10.s3.amazonaws.com\/c530555ce14211e2ae1422000ae912a5_6.jpg","http:\/\/distilleryimage11.s3.amazonaws.com\/c675d51495ce11e28dc022000a1f8c21_6.jpg","http:\/\/distilleryimage9.s3.amazonaws.com\/ebbf90c8847411e299e022000a1fb043_6.jpg","http:\/\/distilleryimage2.s3.amazonaws.com\/9b4b5dba5c7f11e2a0d822000a1f9a12_6.jpg","http:\/\/distilleryimage11.s3.amazonaws.com\/3ca31c36917c11e180c9123138016265_6.jpg","http:\/\/distilleryimage9.s3.amazonaws.com\/65ff3dc2969311e29ade22000a1f9bd0_6.jpg","http:\/\/distilleryimage9.s3.amazonaws.com\/b137550634e411e2b28822000a9f1468_6.jpg","http:\/\/distilleryimage8.s3.amazonaws.com\/540ac56adcfc11e197621231381b4865_6.jpg","http:\/\/distilleryimage11.s3.amazonaws.com\/2c0ab2c2d34811e195e3123138048d2c_6.jpg","http:\/\/distilleryimage8.s3.amazonaws.com\/e0ec209cced711e1b62322000a1e8a75_6.jpg","http:\/\/distilleryimage4.s3.amazonaws.com\/c4157ae406c711e3983422000ae80f97_6.jpg","http:\/\/distilleryimage11.s3.amazonaws.com\/4ad84caefd5011e2ad6922000a1fa410_6.jpg","http:\/\/distilleryimage5.s3.amazonaws.com\/016e223cfc8311e2bb1e22000a1fc4f4_6.jpg","http:\/\/distilleryimage2.s3.amazonaws.com\/4ede18d8c0fb11e2a52422000aaa0a0f_6.jpg","http:\/\/distilleryimage10.s3.amazonaws.com\/c563164ab85711e2b36e22000a1fa437_6.jpg","http:\/\/distilleryimage3.s3.amazonaws.com\/fe0309e6629011e28a7322000a1fa414_6.jpg"]');
$(document).ready(function() {

	// /*
	// 	make api call to instagram
	// */
	// var q = "./instagram.php";
	// $.ajax({
	//     url: q,
	//     type: "GET",
	//     dataType: "JSON",
	//     success:function(data){
	//         instagram = new Instagram( data, $("#photos") );
	// 		instagram.load(function() {
	// 			if( !faded ) {
	// 				$("#hashtag").mousemove(function() {
	// 					clearTimeout( ft );
	// 					runFade();
	// 				});
	// 			}
	// 			ft = setTimeout( runFade, 5000 );
	// 		});
	//     }
	// });

	/*
		load from cache
	*/
    instagram = new Instagram( pics_cache, $("#photos") );
	instagram.load(function() {
		if( !faded ) {
			$("#hashtag").mousemove(function() {
				clearTimeout( ft );
				runFade();
			});
		}
		ft = setTimeout( runFade, 5000 );
	});
	
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
		$("#registry").hide().removeClass("open");
		$("#schedule").hide().removeClass("open");
		if( $("#gettinghere").hasClass("open") ) {
			$("#gettinghere").slideUp(function(){
				$("#content").hide();
			}).removeClass("open");
		} else {
			$("#content").show();
			$("#gettinghere").slideDown().addClass("open");
		}
	});

	$("#nav .schedule").click(function(event){
		event.preventDefault();
		$("#registry").hide().removeClass("open");
		$("#gettinghere").hide().removeClass("open");
		if( $("#schedule").hasClass("open") ) {
			$("#schedule").slideUp(function(){
				$("#content").hide();
			}).removeClass("open");
		} else {
			$("#content").show();
			$("#schedule").slideDown().addClass("open");
		}
	});

	$("#nav .registry").click(function(event){
		event.preventDefault();
		$("#gettinghere").hide().removeClass("open");
		$("#schedule").hide().removeClass("open");
		if( $("#registry").hasClass("open") ) {
			$("#registry").slideUp(function(){
				$("#content").hide();
			}).removeClass("open");
		} else {
			$("#content").show();
			$("#registry").slideDown().addClass("open");
		}
	});

	$(".close").click(function(){
		$("#gettinghere").hide().removeClass("open");
		$("#schedule").hide().removeClass("open");
		$("#registry").hide().removeClass("open");
		$("#content").hide();
	});
});