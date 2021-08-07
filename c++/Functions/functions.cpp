#include <iostream>
#include <vector>
#include <string>
#include <cmath>

using namespace std;

void sayAge(string name, int age);

//Functions 1:20:04
//sayHi user
void sayHi(){
    cout << "Hello user" << endl;
}

// say hi someody
void sayHello(string name){
    cout << "Hello " << name << endl;
}

// return statement 1:29:46
double cube (double num){
    /*double result = num * num * num;
    return result; */
    return num * num * num;
}

// comparison
int getMax(int num1, int num2){
    int result;

    if(num1 > num2){
        result = num1;

    } else {
        result = num2;
    }
    return result;
}

// comparison 3 num
int getMax3(int num1, int num2, int num3){
    int result;

    if(num1 >= num2 && num1 >= num3){
        result = num1;
    } else if(num2 >= num1 && num2 >= num3){
        result = num2;
    } else {
        result = num3;
    }
    return result;
}


int main()
{
    cout << "Top" << endl;
    sayHi();
    sayHello("Mary");
    sayAge("Mary", 33);
    sayAge("Nic", 29);
    sayAge("Minoo", 27);

    double answer = cube (4.0);
    cout << answer << endl;

    cout << cube (4.0) << endl;


    // if statement
    bool isMale = false;
    bool isTall = true;
    if(isMale && isTall){
        cout << "You are a tall man" << endl;
    } else if(isMale && !isTall){
        cout << "You are a short man" << endl;
    } else if(!isMale && isTall){
        cout << "You are tall but not man" << endl;
    } else {
        cout << "You are not a tall man" << endl;
    }

    // comparison
    cout << getMax(5, 5) << endl;
    cout << getMax3(3, 5, 8) << endl;

    return 0;
}

// multiple parameters
void sayAge(string name, int age){
    cout << "Hello " << name << ". You are " << age << " years old" << endl;
}





