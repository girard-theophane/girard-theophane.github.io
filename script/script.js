/*
 *	TP 5 : Animations
 *	
*/

// Au chargement de la page :
$(function(){
			
		function showHide(){
			alert('hihi');
		}	
			
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
				$('#contact a').eq(0).delay(1600).fadeIn();
				$('#contact a').eq(1).delay(2100).fadeIn();
				$('#contact a').eq(2).delay(2600).fadeIn();
			}
			$($idClique).addClass('active');
			$(this).addClass("cliqué");
			showHide();
		});	
/*	$('#contact a').first().delay(1300).show('slow', function showNextOne() {
				$(this).next('#contact a').show('slow', showNextOne);
				});*/
}); // Fin des instructions envoyées au chargement de la page
	

