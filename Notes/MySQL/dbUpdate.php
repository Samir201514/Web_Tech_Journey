<?php
    require "dbConnect.php";

    $sql = "UPDATE MyGuests SET firstname=? WHERE id=?";
    $stmt = mysqli_prepare($conn, $sql);
    $id = 2;
    $firstname="ARAFAT";

    mysqli_stmt_bind_param($stmt,'si', $firstname, $id);

    if (mysqli_stmt_execute($stmt)) {
    echo "Record updated successfully";
    } 
    else {
    echo "Error updating record: " . mysqli_error($conn);
    }

    // mysqli_close($conn);
?>