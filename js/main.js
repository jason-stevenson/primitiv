



$( document ).ready(function() {

   	var i = -1;
	var menutl = new TimelineLite();


	// Set the intial scale of the menu items
	TweenLite.to($( ".menu-item" ), 0, {scale:0});



	// NAv
 	// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


	// Build on the main nav-staggered
	$( "#header li a" ).each(function( index ) {
	  	var item = $( "#header li a" );
	  	i++;
	  	menutl.from(item[i], 1, {y:-80, ease:Elastic.easeOut} , "-=0.9");
	
	});


	// Expand the main nav on rollover
 	$('#header li').mouseover(function() {
	   TweenMax.to($("#header"), 0.8, {paddingBottom:"8em", ease:Sine.easeInOut});
	  })

 	$('#header').mouseleave(function() {
 		TweenMax.to($("#header"), 1.5,  { paddingBottom:"0em", ease:Bounce.easeOut});
	  })




 	// Main
 	// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

	// Build on the menu items
	$( ".menu-item" ).each(function( index ) {
	  TweenLite.to(this, 1, {scale:1, delay:(i++/4)});
	});



	// Menu item rollover
 	$('.menu-item .banner img').mouseover(function() {
 	   var info = $(this).next();
	   TweenLite.to(this, 0.8, {scale:1.2, opacity:0.15, ease:Sine.easeInOut});
	   TweenLite.to(info, 0.8, {x:50, ease:Sine.easeInOut});

	  })

 	$('.menu-item').mouseleave(function() {

 		var t = $('.menu-item .banner img');
		TweenLite.to(t, 0.8, {scale:1, opacity:1, ease:Sine.easeInOut});

		var info = $(this).find('.info');
		TweenLite.to(info, 0.8, {x:0, ease:Sine.easeInOut});

		
	  })





 	// Footer
 	// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

 	$('#footer').mouseover(function() {
	   TweenMax.to(this, 1, {height:450, ease:Quad.easeOut});


	  })

 	$('#footer').mouseleave(function() {
 		TweenMax.to(this, 0.8, {height:80, ease:Bounce.easeOut});
 
	  })







   $( window ).resize(function() {
  		 // $( "#footer" ).width();
  		 // TweenLite.to('#footer', 1, {height:h/2});
	})

});



