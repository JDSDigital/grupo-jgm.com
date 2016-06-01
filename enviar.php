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

	<div class="row">
		<nav id="top-menu">
			<ul>
				<li><a href="./index.html">Inicio</a></li>
				<li><a href="./quienes_somos.html">Quiénes Somos</a></li>
				<li><a href="./nuestros_productos.html">Nuestros Productos</a></li>
				<li><a href="./contactanos.html">Contáctanos</a></li>
			</ul>
		</nav>
	</div>

	<main class="center-block">
		<div class="row">
			<div class="col-xs-6 col-xs-offset-2 col-centered">
				<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script><div style="overflow:hidden;height:500px;width:600px;"><div id="gmap_canvas" style="height:500px;width:600px;"><style>#gmap_canvas img{max-width:none!important;background:none!important}</style><a class="google-map-code" href="http://wordpress-themes.org" id="get-map-data">wordpress-themes.org</a></div></div><script type="text/javascript"> function init_map(){var myOptions = {zoom:16,center:new google.maps.LatLng(10.488567395724235,-66.87122330157467),mapTypeId: google.maps.MapTypeId.ROADMAP};map = new google.maps.Map(document.getElementById("gmap_canvas"), myOptions);marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(10.488567395724235, -66.87122330157467)});infowindow = new google.maps.InfoWindow({content:"<b>Grupo JGM</b><br/>Av. Orinoco<br/> Caracas" });google.maps.event.addListener(marker, "click", function(){infowindow.open(map,marker);});infowindow.open(map,marker);}google.maps.event.addDomListener(window, 'load', init_map);</script>
			</div>
			<div class="col-xs-2">

				<?php
				$nombre = $_POST['nombre'];
				$apellido= $_POST['apellido'];
				$mail = $_POST['email'];

				$header = 'From: ' . $mail . " \r\n";
				$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
				$header .= "Mime-Version: 1.0 \r\n";
				$header .= "Content-Type: text/plain";

				$mensaje = "Este mensaje fue enviado por " . $nombre ." ". $apellido.  " \r\n";
				$mensaje .= "Su e-mail es: " . $mail . " \r\n";
				$mensaje .= "Mensaje: " . $_POST['comentario'] . " \r\n";
				$mensaje .= "Enviado el " . date('d/m/Y', time());

				$para = 'jdsosa@gmail.com'; // aqui se cambia el correo para que el cliente reciba el correo
				$asunto = 'Asunto del mail recibido';

				mail($para, $asunto, utf8_decode($mensaje), $header);

				echo 'Mensaje enviado correctamente';
				?>

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
