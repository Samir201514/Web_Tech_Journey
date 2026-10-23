<?php
    $serverName = "localhost";
    $userName = "root";
    $password = "";
    $dbName = "exam";

    $conn = mysqli_connect($serverName, $userName, $password, $dbName);

    if(!$conn){
        die("Not Connected" . mysqli_connect_error());
    }
    // echo "Connected";

    // mysqli_close($conn);
?>