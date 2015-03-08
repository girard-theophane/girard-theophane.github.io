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
			
			//fait disparaitre la categorie actuellement affichée
			$(".active").slideToggle();
			$(".active").removeClass("active");

			//fait apparaitre la categorie souhaitée
			$($idClique).delay(750).slideToggle();
			$($idClique).addClass('active');
		});	

}); // Fin des instructions envoyées au chargement de la page
	

