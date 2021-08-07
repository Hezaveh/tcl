#include <iostream>
#include <vector>
#include <string>
#include <cmath>

using namespace std;

class Book {
    public:
        string title;
        string author;
        int pages;
        Book(string name){
            cout << name << endl;
            cout << "Object created!" << endl;
        }
};

class ABook {
    public:
        string title;
        string author;
        int pages;
        ABook(){
            title = "No title";
            author = "No author";
            pages = 0;
        }
        ABook(string aTitle, string aAuthor, int aPages){
            title = aTitle;
            author = aAuthor;
            pages = aPages;
        }
};

int main()
{ 
    Book book1("Harry Potter");
    book1.title = "Harry Potter";
    book1.author = "JK Rowling";
    book1.pages = 500;

    Book book2("Lord of the rings");
    book2.title = "Lord of the rings";
    book2.author = "Tolkein";
    book2.pages = 700;

    cout << book1.title << endl;

    ABook aBook1("A", "B", 760);
    ABook aBook3;
    cout << aBook1.title << endl;
    cout << aBook3.title << endl;


    return 0;
}
