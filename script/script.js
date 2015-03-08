/*
 *	TP 5 : Animations
 *	
*/

// Au chargement de la page :
$(function(){
			
		var $categories = $('article.aCacher');
		$categories.hide();
				
		$('a').click(function()
		{		
			var $idClique = $(this).attr("href");	
		//	$categories.hide();
		//	$($idClique).animate({left: '350px'}); 	
			$($idClique).slideToggle();
		});		
				
				/*
		$('a').click(function()
		{
			var $idClique = $(this).attr("href");
			
			$(".aCacher").each(function(index, value) {
				if($(this).hasClass("active"))
				{
					$(this).hide(750);
					$(this).removeClass("active");
				}
			});
			
			$categories.hide();
			$($idClique).addClass("active");
			$(".active").slideToggle(750);
			
			$('.active').click(function()
			{
				$($idClique).slideToggle(750);			
				$($idClique).removeClass("active");
			});
		});
*/

}); // Fin des instructions envoyées au chargement de la page
	

