#include <iostream>
#include <vector>
#include <string>
#include <cmath>
#include <algorithm>
#include <math.h> 

using namespace std;

int sum (int a, int b){
    return a+b;
}

int max (int x, int y, int z){
    if (x > y && x > z){
        return x;
    } else if (y > x && y > z){
        return y;
    } else{
        return z;
    }
}

bool prime(int p){
    for (int i = 2; i < p; i++){
       if (p%i == 0){
            return false;
        } else {
            return true;
        }
    }
}

int evenOdd (int r){
    if (r%2 == 0){
        cout << "The number is even" << endl;
    } else {
        cout << "The number is odd" << endl;
    }
}

string gradeConvertor(int grade){
    string gradeName;
    switch(grade){
    case 91:
        gradeName = "AA";
        break;
    case 81:
        gradeName = "AB";
        break;
    case 71:
        gradeName = "BB";
        break;
    case 61:
        gradeName = "BC";
        break;
    case 51:
        gradeName = "CD";
        break;
    case 41:
        gradeName = "DD";
        break;
    case 31:
        gradeName = "Fail";
        break;
    default:
        gradeName = "Invalid grade!";
        break;
    }

    return gradeName;
}

int factorial(int b){
    int fac =1;
    if (b == 0 ||b == 1)
        return fac;
    for (int i=1; i<=b; i++)
        fac = fac*i;
    return fac;
}

int f(int n){
   /* This is called the base condition, it is
    * very important to specify the base condition
    * in recursion, otherwise your program will throw
    * stack overflow error.
    */
   if (n <= 1)
        return 1;
   else 
       return n*f(n-1);
}

int fibonacci(int j){
    if (j == 0){
        return 0;
    }else if (j == 1){
        return 1;
    }else{ 
       return fibonacci(j-1)+fibonacci(j-2);
    }
}

int showPrimes(){
    for(int i=2; i < 100; i++){
        for(int j=2; j*j<=i; j++){
            if(i%j == 0)
                break;
            else if(j+1 > sqrt(i)){
                cout << i << " " << endl;
            }
        }
    }
}

int perfectNumber(){
    for(int i=2; i < 100; i++){
        for(int j=2; j*j<=i; j++){
            if(i%j == 0)
                break;
            else if(j+1 > sqrt(i)){
                int pn = pow(2,(i-1))*(pow(2, i)-1);
                cout << pn << " " << endl;

            }
        }
    }
}



int multiplication(int m, int t){
    /*int s;
    for(int i = 1; i <= 10; i++){
        s = m*i;
        cout << s << endl;
    }*/
    if (t != 1){
        multiplication(m, t-1);
    }

    cout << m*t << endl;
}

int primeFactors(int n)
{
    // Print the number of 2s that divide n
    while (n % 2 == 0)
    {
        cout << 2 << " ";
        n = n/2;
    }
 
    // n must be odd at this point. So we can skip
    // one element (Note i = i +2)
    for (int i = 3; i <= sqrt(n); i = i + 2)
    {
        // While i divides n, print i and divide n
        while (n % i == 0)
        {
            cout << i << " ";
            n = n/i;
        }
    }
 
    // This condition is to handle the case when n
    // is a prime number greater than 2
    if (n > 2)
        cout << n << " ";
        cout << sqrt(n) << " ";

}

int main(){
    int num1, num2, num3;
    cout << "Enter first number" << endl;
    cin >> num1;

    cout << "Enter second number" << endl;
    cin >> num2;

    cout << "Enter third number" << endl;
    cin >> num3;

    cout << "sum = " << sum(num1, num2) << endl;
    cout << "Max = " << max(num1, num2, num3) << endl;
    cout << "Min = " << min(num1, num2) << endl;
    cout << evenOdd(num1) << endl;
    cout << "The number is " << prime(num1) << endl;
    cout << "You got " << gradeConvertor(31) << endl;
    cout << "Factorization: " << factorial(num1) << endl;
    cout << "Factorization: " << f(num1) << endl;
    cout << "multification: " << multiplication(num1, num2) << endl;
    cout << "Prime factors: " << primeFactors(num1) << endl;
    cout << "Fibonacci: " << fibonacci(num1) << endl;
    cout << "Primes: " << showPrimes() << endl;
    cout << "Perfect Number: " << perfectNumber() << endl;
    cout << pow (2, 2) << endl;
    
}