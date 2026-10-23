<?php
    require "dbConnect.php";

    $dbName = "exam";
    $sql = "CREATE DATABASE IF NOT EXISTS $dbName";

    if(mysqli_query($conn, $sql)){
        echo "Database Created <br>";
    }
    else{
        echo "Error : " . mysqli_error($conn);
    }

    // mysqli_close($conn);
?>