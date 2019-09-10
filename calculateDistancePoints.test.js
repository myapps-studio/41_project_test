// różne wielkości skoczni, różne punkty "K" oraz to, 
// czy zawodnik przekroczył punkt "K", czy nie.


const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
    describe('hillSize', () => {
        it('hillSize = normal', () => {
            const actual = calculateDistancePoints(124, 1, 98);
    
            const expected = 112;
    
            assert.equal(actual, expected);
        });

        it('hillSize = big', () => {
            const actual = calculateDistancePoints(90, 2, 120);
    
            const expected = 6;
    
            assert.equal(actual, expected);
        });

        it('hillSize = superBig', () => {
            const actual = calculateDistancePoints(202, 3, 200);
    
            const expected = 122.4;
    
            assert.equal(actual, expected);
        });
    });

    describe('distance', () => {
        it('distance > kPoint', () => {
            const actual = calculateDistancePoints(122, 1, 98);
    
            const expected = 108;
    
            assert.equal(actual, expected);
        });

        it('distance < kPoint', () => {
            const actual = calculateDistancePoints(75, 1, 98);
    
            const expected = 14;
    
            assert.equal(actual, expected);
        });
    });
});
