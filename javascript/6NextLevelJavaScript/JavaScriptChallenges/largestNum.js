function largestNumber(num) {

const placeholder = '9'.repeat(num);
    
// for(let i = 0; i < num; i++) {
//     placeholder = placeholder.concat('9');
// }

return parseInt(placeholder);
}

// arrange
const num = 5;
        
// act
const result = largestNumber(num);

// log
console.log("result: ", result);

/**
* Test Suite 

describe('largestNumber()', () => {
    it('returns largest positive integer possible for digit count', () => {
        // arrange
        const num = 2;
        
        // act
        const result = largestNumber(num);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(99);
    });
});
*/