function encloseInBrackets(str) {
    return (`(${str})`)
}

// arrange
const str = "Maryam";

// act
const result = encloseInBrackets(str);

// log
console.log("result: ", result);

/**
* Test Suite 

describe('encloseInBrackets()', () => {
    it('adds () around a string', () => {
        // arrange
        const str = "Yo";
        
        // act
        const result = encloseInBrackets(str);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe('(Yo)');
    });
});
*/