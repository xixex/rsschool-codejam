const assert = require('assert');
const sumOfOthers = require('./sumOfOthers');

describe('sumOfOthers', () => {

    it('should pass', () => {
        assert.deepEqual(sumOfOthers([2, 3, 4, 1]), [8, 7, 6, 9]);
        assert.deepEqual(sumOfOthers([1]), [1])
    });
    it('should pass', () => {
        assert.deepEqual(sumOfOthers([1]), [1])
    });
    it('should pass', () => {
        assert.deepEqual(sumOfOthers([]), [])
    });
    it('should pass', () => {
        assert.deepEqual(sumOfOthers([-500, 0, -20]), [-20, -520, -500])
    });
    
});