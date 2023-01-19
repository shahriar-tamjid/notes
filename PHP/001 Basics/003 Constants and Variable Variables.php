<?php

// To specify constants we need to write: define("NAME_OF_CONSTANT", "value")
define("STATUS_PAID", "paid");

echo STATUS_PAID; // Output: paid

// Another way to define constants
const ACTIVE_STATUS = "inactive";

echo ACTIVE_STATUS;

// We cannot define constants with "const" inside of our control flow like if-else and loops

// Check PHP version
echo PHP_VERSION; // Output: 8.0.10

// Check the line no. in the code
echo __LINE__;

// Check the file path
echo __FILE__;

// Variable variables
// Variable variable means creating a variable in the name of the value of another variable
$foo = "bar";
$$foo = "baz";

echo $foo;
echo $bar;
// Output: barbaz

echo "{$foo}, {$bar}"; // Output: bar, baz
