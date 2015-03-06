/*
 *	TP 5 : Animations
 *	
*/

// Au chargement de la page :
$(function(){
		
		
				
		var $fleche = $('li img');
		$fleche.hide();
		$("a").hover(function()
		{
		
			var lienSurvolé = $(this).attr('class');
			var $iNum = parseInt($lienSurvolé);
			alert($lienSurvolé);
			switch ($iNum) 
			{
				case 1: 
					$('li #1').show(); 
				break;
				case 2: 
					$('li #2').show(); 
				break;
				case 3: 
					$('li #3').show(); 
				break;
				case 4: 
					$('li #4').show(); 
				break;
			}
		}, function()
		{
			$fleche.hide();
		});
		
		var $categories = $('article.aCacher');
		$categories.hide();
		
		$('a').click(function()
		{
			var $idClique = $(this).attr("href");
			$categories.hide();
			$($idClique).show("slow");
		});

		
		
		/*
		
		$('a').click(function()
		{
			var $idClique = $(this).attr("href");
			$categories.hide();
			$($idClique).slideToggle('slow');
		});
		
		http://stackoverflow.com/questions/521291/jquery-slide-left-and-show
		$('a').click(function() {
			var $idClique = $(this).attr("href");
			$categories.hide();
		  $($idClique).show('slide', 
		  {
		  	direction: 'right'
		  }, 
		  1000
		  );
		  });

		*/
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
	

