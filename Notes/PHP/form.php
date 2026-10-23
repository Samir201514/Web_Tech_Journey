<!DOCTYPE html>
<html>
<head>
    <title> Form </title>
</head>
<body>
    <form action="form.php" method="POST">
        <fieldset>
            <legend> User Account </legend>

            <label for="username"> Username : </label>
            <input type="text" name="username" id="username">
            <br><br>

            <label for="password"> Password : </label>
            <input type="password" name="password" id="password">
            <br><br>

            <input type="submit" name="login" value="Login">
            <br><br>
        </fieldset>
    </form>    
</body>
</html>

<?php 
    if(isset($_POST["login"])){
        echo filter_input(INPUT_POST, "username", FILTER_SANITIZE_SPECIAL_CHARS) . "<br>";
    
        $password = filter_input(INPUT_POST, "password", FILTER_SANITIZE_SPECIAL_CHARS);
        echo $password;

        // FILTER_SANITIZE_*
        // FILTER_VALIDATE_*
    }
?>