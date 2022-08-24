#include<iostream>
using namespace std;

int main() {

    // Create two txt files named "input.txt" and "output.txt" and save them in the same location of cpp file

    #ifndef ONLINE_JUDGE
        freopen("input.txt", "r", stdin);
        freopen("output.txt", "w", stdout);
    #endif

    int a, b;
    cin>>a>>b; // Give this input on "input.txt" file
    cout<<a+b<<"\n"; // The output will be displayed on "output.txt" file

    return 0;
}