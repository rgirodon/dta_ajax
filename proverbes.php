<?php header('Access-Control-Allow-Origin: *'); ?>
<?php

$proverbes = array("Mieux vaut être seul, que mal accompagné.",
                   "Tel est pris, qui croyait prendre.",
                   "Paris ne s’est pas fait en un jour.",
                   "Il n’est pire aveugle que celui qui ne veut pas voir.",
                   "Tant va la cruche à l’eau, qu’à la fin elle se casse.",
                   "Chassez le naturel, il revient au galop."
                 );

$l = "";

if (isset($_GET["l"])) {
    
    $l=$_GET["l"];
    
    error_log("in get : " .$l);
}
else if (isset($_POST["l"])) {
    
    $l=$_POST["l"];
    
    error_log("in post : " .$l);
}

if (($l != "") && ($l > 0) && ($l <= count($proverbes))) {
    
    echo "Proverbe N° ".$l."<br><br>";
  
    echo $proverbes[$l-1];
}    
else {
  echo "Entrez un nombre compris entre 1 et ".count($proverbes)." !";  
}
    
?>
