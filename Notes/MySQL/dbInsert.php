<?php
    require "dbConnect.php";

    $sql = "INSERT INTO MyGuests (firstname, lastname, email)
                                   VALUES (?, ?, ?)";

    $stmt = mysqli_prepare($conn, $sql);
    $firstname = "arafat";
    $lastname = "Samir";
    $email = "rahman@gmail.com";

    mysqli_stmt_bind_param($stmt, 'sss', $firstname, $lastname, $email);

    if(mysqli_stmt_execute($stmt)){
        echo "Data Inserted <br>";
    }
    else{
        echo "Error : " . mysqli_error($conn);
    }
?>