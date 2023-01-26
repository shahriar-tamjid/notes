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
            // type casting

            bool boolFromStr = bool.Parse("false");
            int intFromStr = int.Parse("100");
            double doubleFromStr = double.Parse("1.2345");

            // to get the data type
            string strVal = doubleFromStr.ToString();
            Console.WriteLine($"Data type of strVal: {strVal.GetType()}"); // output: Data type of strVal: System.String
            double doubleNum = 12.345;
            Console.WriteLine($"Integer value of doubleNum: {(int) doubleNum}"); // output: Integer value of doubleNum: 12

            // formatting output
            Console.WriteLine("Currency: {0:c}", 23.45); // output: Currency: $23.45
            Console.WriteLine("Pad with 0s: {0:d4}", 23); // output: Pad with 0s: 0023
            Console.WriteLine("3 decimals: {0:f3}", 23.4555566); // output: 3 decimals: 23.456
            Console.WriteLine("Commas: {0:n4}", 2300); // output: Commas: 2,300.0000
        }
    }
}
