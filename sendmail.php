<?php>

$to="Kvindesmedjen@gmail.dk";

$navn="";
$emne="";
$besked="";


$subject="Besked fra" . $navn . ": " .$to;
$message="<h1 style='color:blue'>" . $emne . " </h1> " . $besked;


$header= "Content-type: text/html; charset=utf-8" . "\r\n";
$header.= "from:testmail@juby.dk";

mail($to, $subject, $message, $header);

?>
