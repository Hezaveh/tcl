#include <iostream>
#include <vector>
#include <string>
#include <cmath>

using namespace std;

class Student {
    public:
        string name;
        string major;
        double gpa;
        Student(string aName, string aMajor, int aGpa){
            name = aName;
            major = aMajor;
            gpa = aGpa;
        }
        bool hasHonors(){
            if(gpa >= 3.5){
                return true;
            }
            return false;
        }
};

int main()
{
    Student student1("Mary", "Math", 3.3);
    Student student2("Minoo", "Art", 3.6);

    cout << student2.hasHonors() << endl;
} 