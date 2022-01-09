const sqr = require('../src/core/sqr/sqr.js');
const assert = require('assert'); //assert do node
const { it } = require('mocha');

//console.log('Testing 1 === 1');
//assert(1 === 1);
//assert(1 === 91);

describe('Unit tests', ()=> {
    it('Testing 1 === 1', ()=> {
        assert(1 === 1);
    });

    it('Testing true === true', ()=> {
        assert(true);
    });

    it('Testing sqr of 4', () => {
        assert(sqr(4) === 16);
    });

});