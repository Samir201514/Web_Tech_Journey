<?php
    require "dbConnect.php";

    $sql = "DELETE FROM MyGuests WHERE id=?";

    $stmt = mysqli_prepare($conn, $sql);
    $id=5;

    mysqli_stmt_bind_param($stmt, 'i', $id);

    if (mysqli_stmt_execute($stmt)) {
        echo "Record deleted successfully";
    } 
    else {
        echo "Error deleting record: " . mysqli_error($conn);
    }
?>