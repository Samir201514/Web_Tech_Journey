<?php
    // This is a single-line comment
    # This is also a single-line comment

    /* 
    PHP is a server-side scripting language(runs till error)
    used to build dynamic web pages.
    executed on the server; not user web browser
    PHP code is executed on the server, and the result is returned to the browser as HTML


    before PHP = Personal Home Page
    Now PHP = PHP Hypertext Preprocessor


    PHP keywords (e.g. if, else, echo, etc.), classes, functions, and user-defined functions are not case-sensitive. 
    Ex. ECHO is the same as echo.

    However; all variable names are case-sensitive!
    $color and $COLOR are treated as two different variables


    PHP is a Loosely Typed Language
    In the example above, notice that we did not have to tell PHP which data type the variable is.
    */

    echo phpversion();
    echo "<br>";


    //Variables & Data Types:


    // string
    $name = "Arafat";
    echo "Hello $name<br>";
    echo is_string($name) . "<br>";
    echo gettype($name) . "<br>";
    var_dump($name);
    echo "<br> <br>";


    // int
    $num = 55488;
    echo is_int($num) . "<br>";
    echo gettype($num) . "<br>";
    var_dump($num);
    echo "<br> <br>";


    // float
    $cg = 3.62;
    echo is_double($cg) . "<br>";
    echo gettype($cg) . "<br>";
    var_dump($cg);
    echo "<br> <br>";


    // bool
    $isStudent = true;
    $isIntern = false;
    // For true: 1, false: empty
    echo is_bool($isIntern) . "<br>";
    echo gettype($isStudent) . "<br>";
    echo "Student: $isStudent | Intern: $isIntern <br>";
    var_dump($isStudent); echo " | "; var_dump($isIntern); echo "<br>";
    echo "<br> <br>";


    // null
    $x = null;
    echo is_null($x) . "<br>";
    echo gettype($x) . "<br>";
    var_dump($x);
    echo "<br> <br>";


    // array (multiple values)
    $array = [1, 2.5, "Samir"];
    echo is_array($array) . "<br>";
    echo gettype($array) . "<br>";
    var_dump($array);
    echo "<br>";
    print_r($array);
    echo "<br> <br>";
?>