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
            // change the text color
            Console.ForegroundColor= ConsoleColor.Black;
            // change background color
            Console.BackgroundColor= ConsoleColor.White;
            // also change the color of console broders
            Console.Clear();
            // printing a line
            Console.WriteLine("Hello World!");
        }
    }
}
