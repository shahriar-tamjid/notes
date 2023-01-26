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
            // taking user input
            Console.Write("What is your name? "); // will not leave a line break
            // scaning user input and storing it into a variable
            string name = Console.ReadLine();
            // showing output using the template string
            Console.WriteLine($"Hello, {name}! Nice to meet you!");

            /*
            Output:
            
            What is your name? Shahriar
            Hello, Shahriar! Nice to meet you!
            */

        }
    }
}
