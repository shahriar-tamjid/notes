#include<iostream>
using namespace std;

int main() {

    // Find the sum of N numbers
    
    int n, sum = 0;
    cout<<"Enter any number: ";
    cin>>n;

    for (int i = 1; i <= n; i++) {
        sum += i;
    }

    cout<<"Sum: "<<sum<<endl;

    /*
    Output:

    Enter any number: 7
    Sum: 28
    */

   // Keep taking inputs until user enters a negative number

   int x;
   cout<<"Enter any number: ";
   cin>>x;

   while (x >= 0)
   {
    cout<<"Enter another number: ";
    cin>>x;

    if (x < 0)
    {
        cout<<"You entered negative number."<<endl;
        cout<<"Exiting the loop..."<<endl;
    }
    
   }

   /*
   Output:

    Enter any number: 11
    Enter another number: 22
    Enter another number: 33
    Enter another number: 90
    Enter another number: 0
    Enter another number: -3
    You entered negative number.
    Exiting the loop...
   */

  // Exit if user enters 100
  // Do while loop runs at least once.
  // Even if the condition is flase if will initially run once.

  int a;
  cout<<"Enter anything but 100: ";
  cin>>a;

  do {
    cout<<"It's not 100";
  } while (a != 100);
  
  /*
  Output:

  Enter anything but 100: 100
  It's not 100
  */
  
}