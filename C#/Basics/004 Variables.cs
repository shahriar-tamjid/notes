// importing System library
using System;

// defining a namespace which is basically a container for classes
namespace PracticeApp
{
    // creating a class
    public class Program
    {
        // creating the main function
        static void Main(String[] args)
        {

            // biggest and smallest int
            Console.WriteLine("Biggest integer: {0}", int.MaxValue); // output: Biggest integer: 2147483647
            Console.WriteLine("Smallest integer: {0}", int.MinValue); // output: Smallest integer: -2147483648

            // biggest and smallest long
            Console.WriteLine("Biggest long: {0}", long.MaxValue); // Biggest long: 9223372036854775807
            Console.WriteLine("Smallest Long: {0}", long.MinValue); // Smallest Long: -9223372036854775808

            // decimals
            decimal Pi = 3.1415923535M;
            decimal e = 2.7182818284M;
            Console.WriteLine($"Pi + e = {Pi + e}"); // output: Pi + e = 5.8598741819
            // biggest decimal
            Console.WriteLine("Biggest decimal: {0}", decimal.MaxValue); // output: Biggest decimal: 79228162514264337593543950335

            // doubles
            double doublePi = 3.141592653589793238;
            double doubleE = 2.718281828459045;
            Console.WriteLine($"doublePi + doubleE = {doublePi + doubleE}"); // output: doublePi + doubleE = 5.859874482048838
            // biggest double
            Console.WriteLine($"Biggest double: {double.MaxValue}"); // output: Biggest double: 1.7976931348623157E+308

            // floats
            float floatPi = 3.1416F;
            float floatE = 2.7183F;
            Console.WriteLine($"floatPi + floatE = {floatPi + floatE}"); // output: floatPi + floatE = 5.8599
            // biggest float
            Console.WriteLine($"Biggest float: {float.MaxValue}"); // output: Biggest float: 3.4028235E+38

            // using the variable
            bool canIVote = true;

            if (canIVote)
            {
                Console.WriteLine("I can vote :)");
            } else
            {
                Console.WriteLine("I cannot vote :(");
            }
            // output: I can vote :)
        }
    }
}
