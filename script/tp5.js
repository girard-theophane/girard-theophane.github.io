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
			$categories.hide();
			$($idClique).show("slow");
		});
		/*
			EXERCICE 1 :
			Masquer les items du menu déroulant.
			Quand on clique sur le lien qui a la classe «menu-tete». Le menu se déplie vers le bas.
		*/
		/*
		$( ".menu-deroulant li" ).hide();
		$(".menu-tete").click(function(){
			$( ".menu-deroulant li" ).slideToggle('slow');
			
				
		});
		*/
		/*
		$(".menu-tete").click(function(){
			$( ".menu-deroulant ul" ).hide('slow');
			
				
		});*/
		/*
			EXERCICE 2 :
			Cacher les tableaux.
			Quand on clique sur un lien du menu déroulant, le tableau lié apparaît avec un effet de votre choix.
			Le cas échéant, les autres tableaux disparaissent.
		*/
		
		/*
		var $tab= $('table');
		$tab.hide();
		$( ".menu-deroulant a" ).click(function(){
		var $idClique = $(this).attr("href");
		//alert($idClique);
		$tab.hide();
		$($idClique).show("slow");
		}
		);
	*/
		/*
			EXERCICE 3 :
			Créer un effet quand on survole les items du menu déroulant 
			(par exemple, modifier la propriété padding-left du style des liens).
		*/
		/*
		$(".menu-deroulant a").hover(
		function(){
			$(this).css("padding-left","30px");
		},
		function(){
			$(this).css("padding-left","10px");
		}
		)
*/
			
		/*
			EXERCICE 4 :
			Désactiver les animations
			Déclencher l'évènement click sur le premier item
			Réactiver les animations			
		*/
		
				/*
		$.fx.off = true;
		
		$(".menu-deroulant ul").find("a").eq(0).click() ;
		
		$.fx.off = false;*/
}); // Fin des instructions envoyées au chargement de la page
	

