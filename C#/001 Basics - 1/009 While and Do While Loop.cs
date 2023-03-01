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
            // while loop

            // print odd numbers from 1 to 11
            Console.Write("Odd Numbers: ");
            int i = 0;
            while (i < 12) { 
                if (i % 2 != 0)
                {
                    Console.Write($"{i} ");
                }
                i++;
            }
            // output: Odd Numbers: 1 3 5 7 9 11

            Console.WriteLine();

            // do while loop
            // random numbers
            Random rnd = new Random();
            int secretNum = rnd.Next(1, 11);
            int guessedNum = 0;

            do
            {
                Console.Write("Enter a number between 1 to 10: ");
                guessedNum = Convert.ToInt32(Console.ReadLine());
            } while (guessedNum != secretNum);

            Console.WriteLine("You guessed it! The number was {0}", secretNum);

            /*
             output:
                Enter a number between 1 to 10: 3
                Enter a number between 1 to 10: 5
                You guessed it! The number was 5
            */

        }
    }

}
