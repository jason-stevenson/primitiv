



$( document ).ready(function() {

   	var i = -1;
	var menutl = new TimelineLite();



	TweenLite.to($( ".menu-item" ), 0, {scale:0});


	$( "#header li a" ).each(function( index ) {
	  
	  	var item = $( "#header li a" );
	  	i++;
	  	menutl.to(item[i], 1, {y:30, ease:Elastic.easeOut} , "-=0.9");
	  	console.log(item)
	});




	$( ".menu-item" ).each(function( index ) {
	  TweenLite.to($( ".menu-item" ), 1, {scale:1.2, delay:1});
	});





 	$('.menu-item .banner img').mouseover(function() {

 		var t = $('.content');

	   TweenLite.to(this, 1, {scale:1.2, ease:Elastic.easeOut});

	  })

 	$('.menu-item').mouseleave(function() {

 		var t = $('.menu-item .banner img');

		TweenLite.to(t, 1, {scale:1, ease:Elastic.easeOut});

	  })






 	$('#header li').mouseover(function() {
	   TweenMax.to($("#header"), 0.8, {paddingBottom:"8em"});
	  })

 	$('#header li').mouseleave(function() {
 		TweenMax.to($("#header"), 1.5,  { paddingBottom:"0em", ease:Bounce.easeOut, delay:1});
	  })



   $( window ).resize(function() {
  		 // $( "#footer" ).width();
  		 // TweenLite.to('#footer', 1, {height:h/2});
	})

});



