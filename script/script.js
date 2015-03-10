/*
 *	TP 5 : Animations
 *	
*/

// Au chargement de la page :
$(function(){
			
		var $categories = $('article.aCacher');
		$categories.hide();
		$(".active").show();
				
		$('a').click(function()
		{		
			var $idClique = $(this).attr("href");
			
			//fait disparaitre la categorie actuellement affichée
			$(".active").slideToggle();
			$(".active").removeClass("active");
			$(".cliqué").removeClass("cliqué");

			//fait apparaitre la categorie souhaitée
			$($idClique).delay(750).slideToggle();
			
			if($idClique == "#contact")
			{
				$('#contact a').hide();
				$('#contact a').first().delay(1300).show('slow');
				$('#contact a').eq(1).delay(750).show('slow');
				$('#contact a').eq(2).delay(750).show('slow');
			}
			$($idClique).addClass('active');
			$(this).addClass("cliqué");
		});	
/*	$('#contact a').first().delay(1300).show('slow', function showNextOne() {
				$(this).next('#contact a').show('slow', showNextOne);
				});*/
}); // Fin des instructions envoyées au chargement de la page
	

