<?php

    if($_SERVER["REQUEST_METHOD"] == "POST"){
        $text = $_POST["text"];

        $userInfo = [
            "name" => "Samir",
            "age" => "23"
        ];

        $jsonObj = json_encode($userInfo);

        header('Content-Type: application/json');

        echo $jsonObj;
    }
?>