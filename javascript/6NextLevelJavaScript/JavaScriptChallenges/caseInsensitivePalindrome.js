function caseInsensitivePalindrome(str) {
    console.log(str.length)
    const half = str.length/2
    let lowerCaseStr = str.toLowerCase()
    let splitString = lowerCaseStr.split()
    let reverseArray = splitString.reverse()
    let joinArray = reverseArray.join("")

    let fisrtHalf = lowerCaseStr.split("", half)
    let secondHalf = joinArray.split("", half)


    if(str.length%2 != 0 && fisrtHalf.toString() === secondHalf.toString()){
        console.log(`${str} is Case Insensitive Palindrome`)
        return true
    } else {
        console.log(`${str} is not Case Insensitive Palindrome`)
        return false       
    }
}

// arrange
const str = 'AacBcaa';
        
// act
const result = caseInsensitivePalindrome(str);

// log
console.log("result 1: ", result);


/*function caseInsensitivePalindrome(str) {
    const caselessStr = str.toLowerCase();
    const reversedCaselessStr = caselessStr.split('').reverse().join(''); 
    
    return caselessStr === reversedCaselessStr;
}

function caseInsensitivePalindrome(str) {
    const caselessStr = str.toLowerCase();
    // const reversedCaselessStr = caselessStr.split('').reverse().join(''); 
    let reversedCaselessStr = '';
    
    for(let i = caselessStr.length - 1; i >= 0; i--) {
        reversedCaselessStr += caselessStr[i];
    }
    
    return caselessStr === reversedCaselessStr;
}

*/

/**
* Test Suite 

describe('caseInsensitivePalindrome()', () => {
    it('returns true for a case insensitive palindrome', () => {
        // arrange
        const str = 'AaBaa';
        
        // act
        const result = caseInsensitivePalindrome(str);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(true);
    });
    
    it('returns false when not a case insensitive palindrome', () => {
        // arrange
        const str = 'abac';
        
        // act
        const result = caseInsensitivePalindrome(str);

        // log
        console.log("result 2: ", result);
        
        // assert
        expect(result).toBe(false);
    });    
});
*/