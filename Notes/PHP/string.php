<?php
    $x = 10;
    echo 'Number : $x<br>'; // will not print number
    echo "Number : $x<br>";

    $name = "MD. ARAFAT RAHMAN SAMIR";

    echo strtoupper($name) . "<br>";
    echo strtolower($name) . "<br>";
    echo str_replace("A", "@", $name) . "<br>";
    echo strrev($name) . "<br>";
    
    $arr =  explode(" ", $name);
    print_r($arr);
    echo "<br>";
    
    echo substr($name, 5, 6) . "<br>";

    /*
       If false output will be empty
       If true output will be 1
       If var_dump() used then bool(true)/bool(false)
    */

    echo strlen($name) . "<br>";
    echo str_word_count($name) . "<br>";

    echo str_contains($name, "samir") . "<br>";

    echo  "strpos : ". strpos($name, "RAHMAN") . "<br>"; 

    echo str_starts_with($name, "MD.") . "<br>";
    var_dump(str_ends_with($name, "RAHMAN"));


    echo 10 + "10hgdshjgsdhf778877" . "<br>";

    $var=(int)"10hgdshjgsdhf778877";
    echo $var . "<br>";

    var_dump(is_numeric("10"));
    var_dump(is_numeric("10dkslf"));


    //Type Casting
    $a = (string)true; //For false & null will be empty
    var_dump($a);


    //int & float same
    $b = (int)false; //For true 1 & Null 0
    var_dump($b);
    $c = (float)"25abe"; //If don't start with number then 0
    var_dump($c);


    //If a value is falsy: 0, NULL, false, or empty, (bool) converts it to false, otherwise true.
    $d = (bool)"";
    var_dump($d);
?>