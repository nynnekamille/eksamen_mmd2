<link rel="stylesheet" href="style.css">

<?php

$from="";
$to="theis.hmj@gmail.com";
$name = $_REQUEST ['name'];
$mail = $_REQUEST ['email'];
$phone = $_POST ['phone'];
$description = $_POST ['description'];
$measurements = $_POST ['measurements'];
$materials = $_POST ['materials'];


$subject="Besked fra" . $navn . ": " .$to;


mail($to, $mail, $phone, $description, $measurements, $materials);

echo "Tak for din henvendelse, " . $name;

?>

    <h1><a href="bestil.html">Gå tilbage til hjemmesiden</a></h1>
