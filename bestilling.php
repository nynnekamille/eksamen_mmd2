<?php

$from="mailtest@kvindesmed.dk";
$to="theis.hmj@gmail.com";

$name = $_POST ['name'];
$mail = $_POST ['mail'];
$phone = $_POST ['phone'];
$description = $_POST ['description'];
$measurements = $_POST ['measurements'];
$materials = $_POST ['materials'];


$subject="Besked fra" . $navn . ": " .$to;
$message="<h1>" . $emne . " </h1> " . $besked;


mail($to, $mail, $phone, $description, $measurements, $materials);

echo "Tak for din henvendelse, " . $name;
?>
