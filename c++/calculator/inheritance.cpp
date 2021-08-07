#include <iostream>
#include <vector>
#include <string>
#include <cmath>

using namespace std;

//super class
class Chef {
    public: 
        void makeChicken(){
            cout << "The chef makes chicken" << endl;
        }
        void makeSalad(){
            cout << "The chef makes salad" << endl;
        }
        void makeSpecialDish(){
            cout << "The chef makes bbq ribs" << endl;
        }
};
//sub class
class ItalianChef: public Chef {
    public:
        void makePasta(){
            cout << "The chef makes Pasta" << endl;
        }
        //overwrite specialDish
        void makeSpecialDish(){
            cout << "The chef makes chicken Parm" << endl;
        }
};

int main()
{
    Chef chef;
    chef.makeChicken();

    ItalianChef italianChef;
    italianChef.makeChicken();
    italianChef.makePasta();
    italianChef.makeSpecialDish();

    return 0;
}