#include<iostream>
using namespace std;

int main() {

    // Find the maximum number between 3 numbers

    cout<<"Enter 3 numbers: ";
    int a,b,c;
    cin>>a>>b>>c;

    if (a > b) {
        if (a > c) {
            cout<<"Maximum number is: "<<a<<endl;
        } else {
            cout<<"Maximum number is: "<<c<<endl;
        }
    } else {
        if (b > c) {
            cout<<"Maximum number is: "<<b<<endl;
        } else {
            cout<<"Maximum number is: "<<c<<endl;
        }
    }

    /*
    Output:

    Enter 3 numbers: 11 56 23
    Maximum number is: 56
    */


   // Find a if a number is even or odd

   int n;
   cout<<"Enter any number: ";
   cin>>n;

   if (n % 2 == 0) {
    cout<<n<<" is even"<<endl;
   } else {
    cout<<n<<" is odd"<<endl;
   }

   /*
   Output:

    Enter any number: 92
    92 is even
   */
}