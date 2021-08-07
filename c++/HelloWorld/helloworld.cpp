#include <iostream>
#include <vector>
#include <string>
#include <cmath>
#define _GLIBCXX_USE_CXX11_ABI 0;

using namespace std;

int main()
{
   vector<string> msg {"Hello", "C++", "World", "from", "VS Code", "and the C++ extension!"};

   for (const string& word : msg)
   {
      cout << word << " ";
   }
   cout << endl;


   cout << "   /|" << endl;
   cout << "  / |" << endl;
   cout << " /  |" << endl;
   cout << "/___|" << endl;

   string characterName = "John";
   int characterAge = 35;


   cout << "There once was a man named " << characterName << endl;
   cout << "He was " << characterAge << " years old" << endl;


   characterName = "Mike";
   characterAge = 60;


   cout << "He liked the name " << characterName << endl;
   cout << "But he did not like being " << characterAge << endl;


    char grade = 'A';
    string phrase = "Maryam Hezaveh";
    int age = 50;
    //float 
    double gpa = 2.5;
    bool isMale = false;

    // working with string
    cout << phrase.length() << endl; 
    cout << phrase[0] << endl;
    phrase[0] = 'N';
    cout << phrase << endl;
    cout << phrase.find("am", 0)  << endl;
    string phrasesub = phrase.substr(3, 3);
    cout << phrasesub << endl;

    //working with numbers
    cout << 5 % 7  << endl;
    cout << (5 + 4) * 7  << endl;

    int wnum = 5;
    double dnum = 5.5;
    wnum++;
    wnum += 80;
    
    cout << wnum  << endl;
    cout << pow (2, 5) << endl;
    cout << sqrt (36) << endl;
    cout << round(4.3) << endl;
    cout << ceil(5.4) << endl;
    cout << floor(6.4) << endl;
    cout << fmax(3, 5) << endl;
    cout << fmin(3, 5) << endl;

    // getting user input 59:41
    /*int age2;
    cout << "Enter your age: " << endl;
    cin >> age2;

    cout << "You are " << age2 << " years old" << endl; */


    string name;
    cout << "Enter your name: " << endl;
    getline(cin, name);

    cout << "Hello " << name << endl;


    return 0;
}