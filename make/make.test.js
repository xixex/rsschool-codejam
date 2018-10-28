const assert = require('assert');
const make = require('./make');

describe('Make', () => {
    function sum(a, b) {
        return a + b
    }

    function mul(a, b) {
        return a * b
    }

    it('sum', () => {
        assert.equal(make(15)(34, 21, 666)(41)(sum), 777)
    });

    it('sum and multiply', () => {
        assert.equal(make(15)(34, 21, 666)(41)(sum)(1, 3)(mul), 2331);
    })
});