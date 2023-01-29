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
            // relational operators: > < >= <= == !=
            // conditional operators: && || !
            int age = 17;

            // check if go to school/college/university
            if(age >= 5 && age <= 15) {
                Console.WriteLine("Go to school");
            } else if(age >= 16 && age <= 18) {
                Console.WriteLine("Go to college");
            } else { Console.WriteLine("Go to university"); }

            // check if one can work or not
            if(age < 15 || age > 65) {
                Console.WriteLine("You shouldn't work");
            } else {
                Console.WriteLine("You should work");
            }

            // check if one can drive
            bool canDrive = age >= 16 ? true : false;

            switch(age)
            {
                case 1:
                case 2:
                    Console.WriteLine("Go to daycare");
                    break;
                case 3:
                case 4:
                    Console.WriteLine("Go to preschool");
                    break;
                case 5:
                case 6:
                    Console.WriteLine("Go to kindergarden");
                    break;
                default:
                    Console.WriteLine("Go to another school");
                    goto otherSchool;
            }

        otherSchool:
            Console.WriteLine("Elementary, Middle, High School");

            string name1 = "Shahriar";
            string name2 = "Shahriar";

            if (name1.Equals(name2, StringComparison.Ordinal))
            {
                Console.WriteLine("Names are same");
            }

            /*
            Output:

            Go to college
            You should work
            Go to another school
            Elementary, Middle, High School
            Names are same
            */

        }
    }

}
