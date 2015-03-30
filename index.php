<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Théophane GIRARD CV</title>
		<script type="text/javascript" src="script/jquery-latest.js"></script>
		<link rel="stylesheet" href="bootstrap.css" />
		<link rel="stylesheet" href="style.css" />

		<script type="text/javascript" src="script/script.js"></script>
    </head>

	
	<?php
	// Sous WAMP (Windows)
	$bdd = new PDO('mysql:host=localhost;dbname=formulaire;charset=utf8', 'root', '');
	$reponse = $bdd->query('SELECT * FROM FORMULAIRE');
	$donnees = $reponse->fetch();	
	?>
    <body>
	<div class="container">
		<div class="row">
			<div class="col-lg-4 col-xs-12 col-sm-12">
			
				<div class="menu">
					<header>
						
						<img src="photoProfil.jpg" alt="photo de Théophane GIRARD" class="photoProfil"/>
						
					</header>
					
					<p> 
						 <br>
						<h3>Catégories</h3>
						<ul>
							<li><a href="#formation">Ma Formation</a></li>
							<li><a href="#expPro">Mes Experiences Professionnelles</a></li>
							<li><a href="#skill">Mes Compétences</a></li>
							<li><a href="#centreInteret">Mes Centres d'Interets</a></li>
							<li><a href="#contact">Me Contacter</a></li>
						</ul>	

		
					</p>
				</div>
			</div>

			<section class="col-lg-8 col-xs-12 col-sm-12">
			<div class="categories">
				<article>
				<h3>Théophane GIRARD</h3>
				
				<p>
				
				<?php
				echo $donnees['NOM'];
				?>
				Actuellement en cours d'études d'Informatique à l'IUT de Blagnac j'apprécie énormément le Développement Web et le Web Design. Mes études et mes formations m'ont permis de développer ma capacité à travailler en équipe, à
				travailler de façon rigoureuse et à utiliser ma créativité à bon escient. 
				</p>	
				<p>
					J'adore les nouvelles technologies, le cinéma et la musique.
				</p>
				
				</article>
				
				<br>
				
				<article class ="aCacher"  id="formation">
				
						<h3>Formation</h3>
					
				<ul>
					<li>
					<div class="sujet">2013-2015 (en cours) IUT Informatique</div> <div class="ville">Blagnac </div> <div class="lieu">Université Jean Jaurès (anciennement Mirail)</div>
					</li>
					<li>
					<div class="sujet">2012-2013 Année préparatoire</div> <div class="ville">EISTI - École Internationale des Sciences et du
				Traitement de l’Information</div>  <div class="lieu">Académie de Bordeaux</div>
					</li>
					<li>
					<div class="sujet">2012 BAC S </div><div class="lieu">Lycée Clémence-Royer de Fonsorbes</div>

					</li>
					<li>
					<div class="sujet">2009 et 2011 Stage linguistique </div><div class="lieu">Liverpool - Londres</div>
					</li>
					<li>
					<div class="sujet">Actuellement</div> <div class="ville"> en formation BAFA</div>
					</li>
					<li>
					<div class="sujet">Anglais  </div><div class="lieu">niveau C1</div>
					</li>
					<li>
					<div class="sujet">Espagnol </div><div class="lieu">niveau B2</div>
					</li>
				</ul>
				</article>										
				<article class ="aCacher"  id="expPro">	
			

							<h3>Experience Professionnelles</h3>	
							
				<ul>
					<li>
					<div class="sujet">	2014-2015 (en cours)</div> <div class="ville"> animateur Chef Scout </div> <div class="lieu">Scout et Guide de France</div>
					</li>
					<li>
					<div class="sujet">2013-2014</div> <div class="ville">Collectes alimentaires pour une organisation caritative</div>
					</li>
					<li>
					<div class="sujet">2012</div><div class="ville"> Travaux personnels Encadrés </div><div class="lieu">EISTI</div>

					</li>
					<li>
					<div class="sujet">2011</div><div class="ville">Travaux personnel Encadrés </div><div class="lieu">    Lycée Clémence-Royer</div>
					</li>
					<li>
					<div class="sujet">2011 </div><div class="ville">Projet informatique: Création d’un bureau informatique «nomade» à partir d’une clé USB bootable. Prix de la meilleure innovation technique par
«Scola Ingeniosa »</div> <div class="lieu">Lycée Clémence Royer </div>
					</li>
					<li>
					<div class="sujet">2009</div><div class="ville"> Stage 3ème dans une PME de fabrication de meubles sur machines à bois
programmées informatiquement<div class="lieu">Fonsorbes (31)</div>
					</li>
				</ul>

				</article>												
				<article class ="aCacher active"  id="skill">

							<h3>Compétences</h3>					
															
				<ul>
					<li>
					<div class="sujet">	Bureautique</div> <div class="ville">  Word, Excel et Power Point</div>
					</li>
					<li>
					<div class="sujet">Programmation </div> <div class="ville">Java, C, Python, MySQL, HTML 5, PHP, JQuery, Cobol</div>
					</li>
				</ul>

				</article>						
				<article class ="aCacher"  id="centreInteret">

							<h3>Centres d'Interets</h3>
										
											
				<ul>
					<li>
					<div class="sujet">	Sport</div> 
						<ul>
							<li>badminton (4 ans)</li>
							<li>tir a l'arc (3 ans)</li>
							<li>judo (5 ans)</li>
						</ul>	
					</li>
					<li>
					<div class="sujet">Artistique</div> <div class="ville">montage vidéo, dessin</div>
					</li>
					<li>
					<div class="sujet">Voyages</div><div class="ville"> Angleterre, Irlande, Espagne, Hollande, Belgique</div>

				</article>
				
				<article class ="aCacher"  id="contact">

							<h3>Contact</h3>	
							<div class="iconeContact">
							<a href=""><img src="img/gmail.png"></a>
							</div>
							<div class="iconeContact">
							<a href="http://www.facebook.com"><img src="img/fb.png"></a>
							</div>
							<div class="iconeContact">
							<a href="#skill"><img src="img/twitter.png"></a>
							</div>
				</article>
			</section>
			</div>
		</div>
    </div>
	<nav>
	
	
	</nav>
    </body>
</html>
