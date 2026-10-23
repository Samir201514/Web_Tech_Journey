<?php

    //Super Global Variable(SGV): bulit in associative array can be access in any scope/block

    $x = 10;

    function show(){
        global $x;
        echo $x . "<br>";
        echo $GLOBALS["x"] . "<br>";
    }

    show();
?>