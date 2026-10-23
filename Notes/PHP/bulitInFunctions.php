<?php
    //isset() : True if variable declared and not null
    //empty() : True if not declared, false, null, ""

    $x = "Samir";

    if(isset($x)){
        echo "variable is Set <br>";
    }
    else{
        echo "variable is not Set <br>";
    }



    if(empty($x)){
        echo "variable is Empty <br>";
    }
    else{
        echo "variable is not Empty <br>";
    }
?>