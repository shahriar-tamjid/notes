<?php

echo "Hello World!"; // Output: Hello World!

// Variables
$name = "Shahriar";
echo $name; // Output: Shahriar

// By default variables are assigned by value
// To assign any variable by reference we need to put "&" before the variable name
$x = 1;
$y = $x;

$x = 3;
echo $y; // Output: 1

$a = 1;
$b = &$a;

$a = 3;
echo $b; // Output: 3

// Concatenating variables in print statement
$firstname = "Tamjid";
echo "Hello, {$firstname}!"; // Output: Hello, Tamjid!

?>
