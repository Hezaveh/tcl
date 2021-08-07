#include <iostream>
#include <vector>
#include <string>
#include <cmath>

using namespace std;

int main()
{
    // calculator 1:05:33
    double num1, num2;
    cout << "Enter first number: ";
    cin >> num1;
    cout << "Enter second number: ";
    cin >> num2;
    cout << num1 + num2  << endl;

    
    //mad libs game 1:09:29
    string color, pluralNoun, celebrity;
    cout << "Enter a color: " << endl;
    getline(cin, color);
    cout << "Enter a noun: " << endl;
    getline(cin, pluralNoun);
    cout << "Enter a name of celebrity: " << endl;
    getline(cin, celebrity);

    cout << "Roses are " << color << endl;
    cout << pluralNoun <<" are blue" << endl;
    cout << " I love " << celebrity << endl;

    //Array 1:14:01
    int luckyNums[] = {4, 6, 15, 67};
    cout << luckyNums[0] << endl;
    luckyNums[0] = 19;
    cout << luckyNums[0] << endl;

    // give an array a size
    int luckynums2[20] = {1, 2, 3, 4};
    luckynums2[10] = 100;
    cout << luckynums2[10];

    // give no info at first
    int luckynums3[20];
    luckynums3[10] = 100;
    cout << luckynums3[10];

    return 0;
}