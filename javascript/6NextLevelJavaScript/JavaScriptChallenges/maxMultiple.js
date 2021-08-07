function maxMultiple(divisor, bound) {
    return ((Math.floor(bound/divisor))*divisor)
}


// arrange
const divisor = 6;
const bound = 37;

// act
const result = maxMultiple(divisor, bound);

// log
console.log("result: ", result);

/*function maxMultiple(divisor, bound) {
    const remainder = bound % divisor;
    
    return bound - remainder;
}
*/

/**
* Test Suite 
describe('maxMultiple()', () => {
    it('returns largest integer up to boundary', () => {
        // arrange
        const divisor = 3;
        const bound = 10;
        
        // act
        const result = maxMultiple(divisor, bound);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(9);
    });
});
*/