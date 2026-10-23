<?php

    //Select is Query; return Table
    //Create, Delete, Insert is Non-Query; return True/False

    require "dbConnect.php";

    $sql = "SELECT id, firstname, lastname, email FROM MyGuests";

    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        while($row = mysqli_fetch_assoc($result)) {
            echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]." email: " .$row['email']."<br>";
        }
    } 
    else {
        echo "0 results";
    }
?>