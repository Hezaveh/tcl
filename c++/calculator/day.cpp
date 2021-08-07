#include <iostream>
#include <vector>
#include <string>
#include <cmath>

using namespace std;

//switch
string getDayofWeek(int dayNum){
    string dayName;
    switch(dayNum){
    case 0:
        dayName = "Sunday";
        break;
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    default:
        dayName = "Invalid day number!";
        break;
    }

    return dayName;
}

int power(int baseNum, int powNum){
    int result = 1;
    for (int i=0; i < powNum; i++){
        result = baseNum * result;
    }
    return result;
}



int main()
{
    //while loops 2:10:48
    int index = 1;
    while (index <= 5) {
        cout << index << endl;
        index++;
    }
    
    cout << getDayofWeek(0) << endl;

    //guessing game
    int secretNum = 7;
    int guess;
    int guessCount = 0;
    int guessLimit = 3;
    bool outOfGuess = false;

    while(secretNum != guess && !outOfGuess){
        if (guessCount < guessLimit){
            cout << "Enter guess: ";
            cin >> guess;
            guessCount++;
        } else {
            outOfGuess = true;
        }
    }
    if (outOfGuess){
        cout << "You lost!" << endl;
    } else {
    cout << "You won!" << endl;
    }

    //for loop 2:29:19
    for(int i = 1; i <=5; i++){
        cout << i << endl;
    } 

    //for loop + array
    int nums[] = {1, 2, 5, 6, 3};
    
    for(int i = 0; i <=5; i++){
        cout << nums[i] << endl;
    } 

    //power
    cout << power(2,5) << endl;

    //2nd array & nested loops
    int  numberGride[3][2] = {
                                {1, 2},
                                {3, 4},
                                {5, 6}
                            };

    cout << numberGride[0][0] << endl;

    for(int i =0; i <3; i++){
        for(int j=0; j<2; j++){
            cout << numberGride[i][j] << " ";
        }
        cout << endl;
    }


    return 0;
}