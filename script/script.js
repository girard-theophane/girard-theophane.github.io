$(function(){


		$(".cachee").hide();

		$('.scrollTo').click( function() {
			var pageAChercher = $(this).attr('href');
			var pageActive = $(".active");

			pageActive.fadeOut(500);
			pageActive.addClass("cachee");
			pageActive.removeClass("active");

			$(pageAChercher).delay(500).fadeIn();
			$(pageAChercher).addClass("active");
			$(pageAChercher).removeClass("cachee");
		});
		$('.img-zoom').hover(function() {
	          $(this).addClass('transition');

	      }, function() {
	          $(this).removeClass('transition');
	      });

		var menuEstVisible=false;

		$('#container').swipe({
			tap: function()
	            {
				if(menuEstVisible)
      			{
      				$("#menuMobile").animate({left: '-50%'});
      				menuEstVisible =false;
      				$("#container").fadeTo( "slow", 1 );
      				$("html").css("overflow","unset");
					$('#container').swipe({allowPageScroll:"vertical"});
      			}
	            },
	            swipe: function(event, direction, distance, duration, fingerCount)
	            {
				if($("#menuPC").css("display") === "none")
				{
					if((!menuEstVisible)&&(direction=="right"))
					 {
						 $("#menuMobile").animate({left: '0%'});
						 menuEstVisible =true;
						 $("#container").fadeTo( "slow", 0.33 );
						 $("html").css("overflow","hidden");
					 }

					 if((menuEstVisible)&&(direction=="left"))
					{
						$("#menuMobile").animate({left: '-50%'});
						menuEstVisible =false;
						$("#container").fadeTo( "slow", 1 );
						$("html").css("overflow","unset");
						$('#container').swipe({allowPageScroll:"vertical"});
					}
				}									
	            }
	      });
});
