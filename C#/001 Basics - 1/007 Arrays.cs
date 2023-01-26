// importing System library
using System;

// defining a namespace which is basically a container for classes
namespace PracticeApp
{
    // creating a class
    public class Program
    {
        // creating a function to print array
        static void PrintArray(int[] intArray, string mess)
        {
            foreach(int i in intArray)
            {
                Console.WriteLine($"{mess} ... {i}");
            }
        }
        // creating the main function
        static void Main(String[] args)
        {
            // arrays
            int[] favNums = new int[3]; // initializing array
            favNums[0] = 23; // updating array values
            // printing array
            Console.WriteLine($"favNums value at 0 index: {favNums[0]}"); // output: favNums value at 0 index: 23
            string[] customers = { "Bob", "Sam", "Max" };
            var employees = new[] { "Mike", "Sasha", "Lacy" };

            // storing various data into single array
            object[] arrayRandom = { "Jack", 45, 1.234 };

            // getting data type of array and array item
            Console.WriteLine("Type of arrayRandom: {0}", arrayRandom.GetType()); // output: Type of arrayRandom: System.Object[]
            Console.WriteLine($"Type of customers[1] item: {customers[1].GetType()}"); // output: Type of customers[1] item: System.String

            // getting array length
            Console.WriteLine($"Array length is: {arrayRandom.Length}"); // output: Array length is: 3

            // using for loop to cycle through an array
            for (int i = 0; i < customers.Length; i++)
            {
                Console.WriteLine("Array Index: {0} --- Array Item: {1}", i, customers[i]);
                /*
                output:
                Array Index: 0 --- Array Item: Bob
                Array Index: 1 --- Array Item: Sam
                Array Index: 2 --- Array Item: Max
                */
            }

            // multi dimensional array or matrix
            string[,] custNames = new string[2, 2] { { "Kevin", "Tom"}, { "Rahim", "Philips"} };
            // printing single values
            Console.WriteLine($"Value at 2nd row, 1st column: {custNames.GetValue(1, 0)}"); // output: Value at 2nd row, 1st column: Rahim

            // using for loop to get values
            for (int i = 0; i < custNames.GetLength(0); i++)
            {
                for(int j = 0; j < custNames.GetLength(0); j++)
                {
                    Console.WriteLine("{0} ", custNames[i, j]);
                }
                Console.WriteLine();
            }
            /*
            output:
            Kevin
            Tom
            Rahim
            Philips
            */

            // passing values to PrintArray
            int[] randomNumbers = { 1, 4, 9, 2, 3 };
            PrintArray(randomNumbers, "ForEach");

            /*
            output:
            ForEach ... 1
            ForEach ... 4
            ForEach ... 9
            ForEach ... 2
            ForEach ... 3
            */

            // array functions
            Array.Sort(randomNumbers);
            Array.Reverse(randomNumbers);
            Console.WriteLine($"1 at index : {Array.IndexOf(randomNumbers, 4)}");
            randomNumbers.SetValue(0, 17);

            // copying array
            int[] srcArray = { 1, 2, 3 };
            int[] destinationArray = new int[2];
            int startIndex = 0;
            int length = 2;
            Array.Copy(srcArray, startIndex, destinationArray, 0, length);
            PrintArray(destinationArray, "Copy");
            Array anotherArray = Array.CreateInstance(typeof(int), 10);
            srcArray.CopyTo(anotherArray, 5);
            foreach(int i in randomNumbers) 
            {
                Console.WriteLine($"Copy To: {i}");
            }
        }
    }

}
