function arrayReplace(array, elemToReplace, substitutionElem) {
    for (let i = 0; i < array.length; i++) {
        if(array[i] === elemToReplace) {
            array[i] = substitutionElem;
        }
    }
    
    return array
}

const array = [1, 2, 1];
const elemToReplace = 1;
const substitutionElem = 3;

// act
const result = arrayReplace(array, elemToReplace, substitutionElem);

// log
console.log("result: ", result);

/**
* Test Suite 

describe('arrayReplace()', () => {
    it('adds a border around entire application', () => {
        // arrange
        const array = [1, 2, 1];
        const elemToReplace = 1;
        const substitutionElem = 3;
        
        // act
        const result = arrayReplace(array, elemToReplace, substitutionElem);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toEqual([3, 2, 3]);
    });
});
*/