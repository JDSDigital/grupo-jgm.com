<!DOCTYPE html>
<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>GRUPO JGM</title>
<link rel="stylesheet" type="text/css" href="./css/styles.css"/>
<link rel="stylesheet" type="text/css" href="./css/bootstrap.min.css">
<link rel="shortcut icon" type="image/png" href="./img/favicon.jpg">
<script src="./js/jquery-2.2.3.min.js"></script>
<script src="./js/bootstrap.min.js"></script>
<script src="./js/script.js"></script>
</head>
<body>
<div class="container-fluid">

	<div class="row">
		<header>
			<img class="img-responsive center-block" src="./img/banner.png" />
		</header>
	</div>

	<div class="row navbar-menu">
			<div class="col-xs-6 col-xs-offset-3 col-centered">
				<nav class="top-menu">
					<ul>
						<li><a href="./index.html">Inicio</a></li>
						<li><a href="./quienes_somos.html">Quiénes Somos</a></li>
						<li><a href="./nuestros_productos.html">Nuestros Productos</a></li>
						<li><a href="./contactanos.html">Contáctanos</a></li>
					</ul>
				</nav>
			</div>
			<div class="col-xs-2">
				<nav class="top-menu-logo">
					<ul>
						<li style="padding:0;"><a href="https://www.facebook.com/people/Distribuidora-Jgm/100008156957083" target="_blank"><img class="socialLogo" src="./img/FB-f-Logo__blue_29.png"></a></li>
						<li style="padding:0;"><a href="https://twitter.com/grupojgm" target="_blank"><img class="socialLogo" src="./img/TwitterLogo.png"></a></li>
					</ul>
				</nav>
			</div>
	</div>

	<main class="center-block">

		<div class="row">
			<div class="col-xs-8 col-xs-offset-2 contact">
			<div class="row">


					<div class="col-xs-7">

					<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script><div class="img-responsive" style="overflow:hidden;height:400px;width:500px;margin-left:50px;"><div class="img-responsive" id="gmap_canvas" style="height:400px;width:500px;"><style>#gmap_canvas img{max-width:none!important;background:none!important}</style><a class="google-map-code" href="http://wordpress-themes.org" id="get-map-data">wordpress-themes.org</a></div></div><script type="text/javascript"> function init_map(){var myOptions = {zoom:16,center:new google.maps.LatLng(10.488567395724235,-66.87122330157467),mapTypeId: google.maps.MapTypeId.ROADMAP};map = new google.maps.Map(document.getElementById("gmap_canvas"), myOptions);marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(10.488567395724235, -66.87122330157467)});infowindow = new google.maps.InfoWindow({content:"<b>Grupo JGM</b><br/>Av. Orinoco, Qta. Lourdes<br/>Bello Monte<br/>Caracas" });google.maps.event.addListener(marker, "click", function(){infowindow.open(map,marker);});infowindow.open(map,marker);}google.maps.event.addDomListener(window, 'load', init_map);</script>

					</div>

					<div class="col-xs-2 col-xs-offset-1 contactData">

						<img class="img-responsive logo" src="./img/logo.gif"/><br />

						<div class="contactDataText">
							<p>Rif: J-00355387-5</p>
							<p class="contactDataTextHover"><b>jgmgrupo@gmail.com</b></p>
							<br/>
							<p><b>Telefonos:</b></p>
							<p class="contactDataTextHover">+58 212 953 81 82</p>
							<p class="contactDataTextHover">+58 212 952 98 59</p>
							<p class="contactDataTextHover">+58 212 951 24 03</p>
							<p class="contactDataTextHover">+58 212 951 25 91</p>
							<p><b>Fax:</b><p>
							<p class="contactDataTextHover">+58 212 953 11 26</p>
						</div>

					</div>


			</div>

			<div class="row">

				<div class="col-xs-6 col-xs-offset-3">



				<form role="form" method="POST" action="enviar.php">

					<div class="form-group">

						<?php
						$nombre = $_POST['nombre'];
						$apellido = $_POST['apellido'];
						$email = $_POST['email'];
						$comentario = $_POST['comentario'];

						# Include the Autoloader (see "Libraries" for install instructions)
						require 'vendor/autoload.php';
						use Mailgun\Mailgun;

						# Instantiate the client.
						$mgClient = new Mailgun('key-bb6be62102fbde6cb67a14a09ef126fe');
						$domain = "mg.grupo-jgm.com";

						# Make the call to the client.
						$result = $mgClient->sendMessage($domain, array(
						    'from'    => 'postmaster@mg.grupo-jgm.com',
						    'to'      => 'jdsosa@gmail.com',
						    'subject' => 'Hello',
						    'text'    => '
										Ha recibido un mensaje desde la página web.

										Nombre: ' .$nombre .'
										Apellido: ' .$apellido .'
										Email: ' .$email .'
										Comentario: ' .$comentario .'
								'
						));

						echo "Mensaje enviado";

						 ?>

					</div>

				</form>

				</div>

			</div>
			</div>
		</div>
	</main>
	<div class="row">
		<footer class="center-block">
			<p>Copyright © 2016 GRUPO JGM. Todos los derechos reservados.</p>
			<p>Creado por <a href="https://github.com/JDSDigital" target="_blank">JDSDigital</a></p>
			<p><a href="https://github.com/JDSDigital" target="_blank"><img src="./img/GitHub-Mark-32px.png" /></a></p>
		</footer>
	</div>
</div>
</body>
</html>
