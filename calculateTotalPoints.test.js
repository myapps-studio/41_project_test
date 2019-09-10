
const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

describe('calculateTotalPoints', () => {
    describe('windFactor & gateFactor', () => {
        it('diff wind and gate factor', () => {
            const actual = calculateTotalPoints(124, 1, 98, 10, 10, 10, 10, 10, -10, -10);
    
            const expected = 122;
    
            assert.equal(actual, expected);
        });

        it('diff wind and gate factor', () => {
            const actual = calculateTotalPoints(124, 1, 98, 10, 10, 10, 10, 10, 10, 10);
    
            const expected = 162;
    
            assert.equal(actual, expected);
        });
    });
});