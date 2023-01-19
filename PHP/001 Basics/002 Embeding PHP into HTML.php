<!DOCTYPE html>
<html lang="en">
<head>
    <title>Embeding PHP into HTML</title>
</head>
<body>
    <h1>
        <!-- This is how we can write single liner php -->
        <?= "Hello World!"; ?>
    </h1>
    <p>This is my first paragraph</p>
    
    <?php
    
    $firstname = "Tamjid";
    $lastname = "Shahriar";

    echo "<h3>My name is {$lastname} {$firstname}.</h3>";
    // Output: My name is Shahriar Tamjid.

    ?>
</body>
</html>
