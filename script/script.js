$(function(){



		$('.scrollTo').click( function() { // Au clic sur un élément
			var page = $(this).attr('href'); // Page cible
			var speed = 750; // Durée de l'animation (en ms)
			$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
			return false;
		});

		$('.img-zoom').hover(function() {
	          $(this).addClass('transition');

	      }, function() {
	          $(this).removeClass('transition');
	      });

		var menuEstVisible=false;
		$("#menuMobile").css("height",$( window ).height());
		
		$( document ).on( "swiperight", ".container", function( e ) {
			 if(!menuEstVisible)
			 {
				 $("#menuMobile").animate({left: '0px'});
				 menuEstVisible =true;
				 $(".container").fadeTo( "slow", 0.33 );
				 $("html").css("overflow","hidden");
			 }
		});

		$( document ).on( "swipeleft", ".container", function( e ) {
			if(menuEstVisible)
			{
				$("#menuMobile").animate({left: '-215px'});
				menuEstVisible =false;
				$(".container").fadeTo( "slow", 1 );
				$("html").css("overflow","unset");
			}
	     });


});
