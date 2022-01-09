const http = require('http');
const assert = require('assert');
const { it } = require('mocha');

describe('Integrations tests', () => {
    it('Integration test with localhost:3000 === Server ON.', (done) => {
        http.request('http://localhost:3000', (res) => {
            const chunks = [];
            res.on('data', (chunk) => chunks.push(chunk));
            res.on('end', () => {
                const body = chunks.join('');
                assert(body === 'Server ON.');
                done();
            });
        }).end();
    });
});

