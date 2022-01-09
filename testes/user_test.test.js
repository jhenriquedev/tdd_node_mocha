const User = require('../src/core/user/user.js');
const assert = require('assert'); //assert do node
const { it } = require('mocha');

var admin = new User;

admin.setPassword('123456');
admin.setName('admin');

console.log(admin);

describe('User tests', () => {
    it('Auth test true', () => {
        assert(admin.auth('admin', '123456'));
    });

    it('Auth test false', () => {
        assert(!admin.auth('admin', '123459'));
    });
});
