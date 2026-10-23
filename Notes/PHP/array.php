<?php

    //Array
    $foods = ["apple", "banana", "coconut", 5];

    foreach($foods as $index => $food){
        echo $index . " => " . $food . "<br>";
    }

    echo count($foods);

    //Associative Array
    $studentList = 
    [
        "arafat" => 23,
        "rahman" => 55488,
        "samir" => 3
    ];

    foreach($studentList as $key => $value){
        echo $key . " => " . $value . "<br>";
    }


    //Array Functions

    //End of the array
    array_push($foods, "Mango");
    array_pop($foods);

    //Start of the array
    array_unshift($foods, "samir");
    array_shift($foods);
?>