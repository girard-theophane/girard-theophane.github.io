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

		hideMenu();
	});

	//region Zoom des icones de cotnact au survol
	$('.img-zoom').hover(function() {
		$(this).addClass('transition');

	}, function() {
		$(this).removeClass('transition');
	});
	//endregion

	var menuEstVisible=false;

	function showMenu() {
		$("#menuMobile").animate({left: '0%'});
		menuEstVisible =true;
		$("#container").fadeTo( "slow", 0.33 );
	}

	function hideMenu() {
		$("#menuMobile").animate({left: '-50%'});
		menuEstVisible =false;
		$("#container").fadeTo( "slow", 1 );
	}

	$('#container').swipe({
		tap: function()
		{
			if(menuEstVisible)
			{
				hideMenu();
				//$('#container').swipe({allowPageScroll:"vertical"});
			}
		}/*,
		swipe: function(event, direction, distance, duration, fingerCount)
		{
			if($("#menuPC").css("display") === "none")
			{
				if((!menuEstVisible)&&(direction=="right"))
				{
					//region Affichage menu et desactivation du scroll
					showMenu();
					//$("html").css("overflow","hidden");
					//endregion
				}

				if((menuEstVisible)&&(direction=="left"))
				{
					hideMenu();
					//$("html").css("overflow","unset");
					//$('#container').swipe({allowPageScroll:"vertical"});
				}
			}
		}*/
	});

	$('#showMenuLien').click(showMenu);
});
