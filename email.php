<?php

# Include the Autoloader (see "Libraries" for install instructions)
require 'vendor/autoload.php';
use Mailgun\Mailgun;
    
$data = json_decode(stripslashes($_POST['data']));

$nombre = $data[0];
$apellido = $data[1];
$email = $data[2];
$comentario = $data[3];

# Instantiate the client.
$mgClient = new Mailgun('key-bb6be62102fbde6cb67a14a09ef126fe');
$domain = "mg.grupo-jgm.com";

# Make the call to the client.
$result = $mgClient->sendMessage($domain, array(
    'from'    => 'Grupo JGM Web <postmaster@mg.grupo-jgm.com>',
    'to'      => 'Grupo JGM <jdsosa@gmail.com>',
    'subject' => 'Nuevo mensaje desde la página web',
    'text'    => '
Ha recibido un nuevo mensaje desde la página web.

Nombre: ' .$nombre .'
Apellido: ' .$apellido .'
Email: ' .$email .'
Comentario: ' .$comentario .'
'));

?>