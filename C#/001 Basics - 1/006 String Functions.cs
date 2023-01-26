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
            // string functions

            string randomString = "This is a random string";

            Console.WriteLine($"String Length: {randomString.Length}"); // output: String Length: 23
            Console.WriteLine($"String contains 'is': {randomString.Contains("is")}"); // output: String contains 'is': True
            Console.WriteLine($"Index of 'is': {randomString.IndexOf("is")}"); // output: Index of 'is': 2
            Console.WriteLine($"Removing string portion by index number 10 to 6: {randomString.Remove(10, 6)}"); // output: Removing string portion by index number 10 to 6: This is a  string
            Console.WriteLine($"Adding word at the 10th index of the string: {randomString.Insert(10, "short ")}"); // output: Adding word at the 10th index of the string: This is a short random string
            Console.WriteLine($"Replacing 'string' with 'sentence': {randomString.Replace("string", "sentence")}"); // output: Replacing 'string' with 'sentence': This is a random sentence
            Console.WriteLine("Compare A to B: {0}", String.Compare("A", "B", StringComparison.OrdinalIgnoreCase)); // output: Compare A to B: -1
            /*
             meaning of return values:
                * < 0 : str1 preceeds str2
                * 0 : str1 = str2
                * > 0 : str2 preceeds str1
            */
            Console.WriteLine($"A = a : {String.Equals("A", "a", StringComparison.OrdinalIgnoreCase)}"); // output: A = a : True
            Console.WriteLine($"Trim spaces: {randomString.Trim()}"); // output: Trim spaces: This is a random string
            Console.WriteLine($"Uppercase: {randomString.ToUpper()}"); // output: Uppercase: THIS IS A RANDOM STRING
            Console.WriteLine($"Lowercase: {randomString.ToLower()}"); // output: Lowercase: this is a random string

            string newString = String.Format("{0} saw a {1} {2} in the {3}", "Paul", "rabbit", "eating", "field");
            Console.Write(newString + "\n"); // output: Paul saw a rabbit eating in the field

            // escape characters: \' \" \\ \t \a

            // if we want to print the exact text
            Console.WriteLine(@"Exactly what I typed \n"); // output: Exactly what I typed \n
        }
    }

}
