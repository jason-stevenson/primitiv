



$( document ).ready(function() {

   	var i = -1;
   	var work;
	var menutl = new TimelineLite();

	var projects = ["part", "td", "taste"];


	// Set the intial scale of the menu items
	TweenLite.to($( ".menu-item" ), 0, {scale:0});



	// Nav
 	// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


	// Build on the main nav-staggered
	$( "#header li a" ).each(function( index ) {
	  	var item = $( "#header li a" );
	  	i++;
	  	menutl.from(item[i], 1, {y:-80, ease:Elastic.easeOut} , "-=0.9");
	
	});


	// Expand the main nav on rollover
 	$('#header li').mouseover(function() {
	   TweenMax.to($("#header"), 0.8, {paddingBottom:"9em", ease:Sine.easeInOut});
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


 	// Get the selected content
 	$('.menu-item').click(function() {

 		var index = $( ".menu-item" ).index( this );
 		work = index;

 		hideMenuItems();

	  })


 	// Hide menu after selction is made
 	function hideMenuItems(){
 		var tl = new TimelineLite({onComplete:showWork});
 		var i = $('.menu-item').length;

		$( ".menu-item" ).each(function( index ) {
	 		
			 tl.insert( TweenLite.to(this, 1, {height:0}) );
		
		});
 	}

 	function showWork(){
 		loadWork(projects[work]);
 	}








     function loadProfile(){
             $.get( "profile.html", function( data ) {
              $( "#main" ).html( data );
            });
        }
       
        function loadWork(id){
        	// alert(id)
           

              $.get( "work.html", function( data ) {
              		$( "#main" ).html( data );
              		 $( "#main .largeBanner" ).toggleClass(projects[work])
            	});

             
        }
         function loadContact(){
             $.get( "contact-info.html", function( data ) {
              $( "#main" ).html( data );
            });
        }

        $("#header #profile").click(function(){
            loadProfile();
        });

         $("#header #work").click(function(){
             loadWork(id);
        })
          $("#header #contact").click(function(){
             loadContact();
        })






 	// Footer
 	// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

 	$('#footer').mouseover(function() {
	   TweenMax.to(this, 0.7, {height:270, ease:Quad.easeOut});


	  })

 	$('#footer').mouseleave(function() {
 		TweenMax.to(this, 0.8, {height:80, ease:Bounce.easeOut});
 
	  })






 	function offCanvas(){
 		TweenMax.to($('#page'), 0.3, {transform:"translateX(300px)", ease:Sine.easeInOut});

 	}


 	$('.logo').click(function() {
 		 offCanvas();
	})

	$('#main').mouseover(function() {
 		 TweenMax.to($('#page'), 0.4, {transform:"translateX(0px)", ease:Sine.easeInOut});
	})




   $( window ).resize(function() {
  		
	})

});



