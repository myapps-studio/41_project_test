const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('calculateStylePoints', () => {
    describe('styleNotes', () => {
        it('should return sum of 3 notes v1', () => {
            const actual = calculateStylePoints(10, 10, 10, 10, 10);
    
            const expected = 30;
    
            assert.equal(actual, expected);
        });

        it('should return sum of 3 notes v2', () => {
            const actual = calculateStylePoints(15, 18, 16.5, 17, 19);
    
            const expected = 48.5;
    
            assert.equal(actual, expected);
        });
    });
});
