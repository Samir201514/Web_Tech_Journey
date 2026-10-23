<?php

    $a[] = "Arafat";
    $a[] = "Rahman";
    $a[] = "Samir";
    $a[] = "Anna";
    $a[] = "Brittany";
    $a[] = "Cinderella";
    $a[] = "Diana";
    $a[] = "Eva";
    $a[] = "Fiona";
    $a[] = "Gunda";
    $a[] = "Hege";
    $a[] = "Inga";
    $a[] = "Johanna";
    $a[] = "Kitty";
    $a[] = "Linda";
    $a[] = "Nina";
    $a[] = "Ophelia";
    $a[] = "Petunia";
    $a[] = "Amanda";
    $a[] = "Raquel";
    $a[] = "Cindy";
    $a[] = "Doris";
    $a[] = "Eve";
    $a[] = "Evita";
    $a[] = "Sunniva";
    $a[] = "Tove";
    $a[] = "Unni";
    $a[] = "Violet";
    $a[] = "Liza";
    $a[] = "Elizabeth";
    $a[] = "Ellen";
    $a[] = "Wenche";
    $a[] = "Vicky";

    $s = $_REQUEST["s"];
    $sugg = "";


    // lookup all hints from array if $s is different from ""
    if($s !== ""){
        $s = strtolower($s);
        $len = strlen($s);
        
        foreach($a as $name){
            if(stristr($s, substr($name, 0, $len))){
                if($sugg === ""){
                    $sugg = $name;
                }
                else{
                    $sugg .= ", $name";
                }
            }
        }
    }

    // Output "no suggestion" if no sugg was found or output correct values
    echo $sugg === "" ? "no suggestion" : $sugg;
?>