#include<iostream>
using namespace std;

int main() {

    // Break and Continue are used to control the flow of the loops meeting some specified conditions

    // Continue is used to skip to the next iteration
    // Example: You can only go out on odd days

    // Break is used to terminate the loop
    // Example: You have pocket money of 3000 and each time you go out you spend 300 but if your money becomes 0 you cannot go out

    int pocketMoney = 3000;

    for (int i = 0; i < 30; i++)
    {
        if (i % 2 == 0)
        {
            continue;
        }

        if (pocketMoney == 0)
        {
            break;
        }
        

        cout<<"You can go out today. Day: "<<i<<endl;
        pocketMoney -= 300;
        
    }
    
    /*
    Output:

    You can go out today. Day: 1
    You can go out today. Day: 3
    You can go out today. Day: 5
    You can go out today. Day: 7
    You can go out today. Day: 9
    You can go out today. Day: 11
    You can go out today. Day: 13
    You can go out today. Day: 15
    You can go out today. Day: 17
    You can go out today. Day: 19
    */

    // Example: From 1 - 100 skip all the numbers that are divisible by 3

    for (int i = 1; i <= 100; i++)
    {
        if (i % 3 == 0)
        {
            continue;
        }

        cout<<" "<<i<<" ";
        
    }

    /*
    Output:
    1  2  4  5  7  8  10  11  13  14  16  17  19  20  22  23  25  26  28  29  31  32  34  35  37  38  40  41  43  44  46  47  49  50  52  53  55  56  58  59 61  62  64  65  67  68  70  71  73  74  76  77  79  80  82  83  85  86  88  89  91  92  94  95  97  98  100
    */

    // Example: Check if a number is prime or not

    int n;
    cout<<"\nEnter any number: ";
    cin>>n;

    int i;
    for(i = 2; i < n; i++){

        if (n % i == 0)
        {
            cout<<n<<" is Non Prime"<<endl;
            break;
        }   
    }
    if (i == n)
    {
        cout<<n<<" is Prime"<<endl;
    }

    /*
    Output:
    Enter any number: 19
    19 is Prime
    */

    // Print all prime numbers between a and b

    cout<<"Enter two numbers: "<<endl;
    int a,b;
    cin>>a>>b;

    cout<<"Prime numbers between "<<a<<" and "<<b<<" are:"<<endl;
    for (int i = a; i <= b; i++)
    {
        int j;
        for (j = 2; j < i; j++)
        {
            if (i % j == 0)
            {
                break;
            }
            
        }
        if (i == j)
        {
            cout<<i<<" ";
        }
        
    }

    /*
    Output:
    Enter two numbers:
    10 20
    Prime numbers between 10 and 20 are:
    11 13 17 19
    */

}