<?php
    $student = array("Name" => "Samir", "Id" => "23-55488-3", "Cgpa" => 3.60);

    //PHP to JSON
    $JSON = json_encode($student);
    echo "JSON : ". $JSON ."<br>";

    //JSON to PHP
    echo "PHP Array : ";
    print_r(json_decode($JSON));
?>