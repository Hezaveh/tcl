
#include <iostream>

using namespace std;

int main()
{   //pointer: 2:59:11
    int age = 19;
    int *pAge = &age;

    cout << age << endl; //19
    cout << pAge << endl; //0x7ffc162fe87c
    cout << &age << endl; //0x7ffc162fe87c
    cout << *pAge << endl; //19
    cout << *&age << endl; //19
}