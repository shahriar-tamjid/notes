#include<iostream>
using namespace std;

int main() {

    // Size of various data types

    int a;
    cout<<"Size of int is: "<<sizeof(a)<<" bytes\n";
    // Size of int is: 4 bytes

    float b;
    cout<<"Size of float is: "<<sizeof(b)<<" bytes\n";
    // Size of float is: 4 bytes

    double c;
    cout<<"Size of double is: "<<sizeof(c)<<" bytes\n";
    // Size of double is: 8 bytes

    char d;
    cout<<"Size of char is: "<<sizeof(d)<<" byte\n";
    // Size of char is: 1 byte

    bool e;
    cout<<"Size of bool is: "<<sizeof(e)<<" byte\n";
    // Size of bool is: 1 byte

    short int f;
    cout<<"Size of short int is: "<<sizeof(f)<<" bytes\n";
    // Size of short int is: 2 bytes

    long int g;
    cout<<"Size of long int is: "<<sizeof(g)<<" bytes\n";
    // Size of long int is: 4 bytes
}