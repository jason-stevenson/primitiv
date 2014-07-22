



$( document ).ready(function() {
   

	TweenLite.to($( ".menu-item" ), 0, {scale:0});




	$( ".menu-item" ).each(function( index ) {
	  TweenLite.to($( ".menu-item" ), 1, {scale:1.2, delay:1});
	});



 	$('.menu-item .banner img').mouseover(function() {

 		var t = $('.content');

	   TweenLite.to(this, 1, {scale:1.2});

	  })

 	$('.menu-item').mouseleave(function() {

 		var t = $('.menu-item .banner img');

		TweenLite.to(t, 1, {scale:1});

	  })





   $( window ).resize(function() {
  		 // $( "#footer" ).width();
  		 // TweenLite.to('#footer', 1, {height:h/2});
	})

});



