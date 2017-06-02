'use strict';

let messageQueue = require('..');
let assert = require('assert');

describe('index', () => {
    it('base', () => {
        let {
            produce, consume
        } = messageQueue();

        let {
            message, receipt
        } = produce({
            a: 1
        });

        consume({
            id: message.id,
            data: {
                b: 2
            }
        });

        return receipt.then((ret) => {
            assert.deepEqual(ret, {
                b: 2
            });
        });
    });

    it('error', (done) => {
        let {
            produce, consume
        } = messageQueue();

        let {
            message, receipt
        } = produce({
            a: 1
        });

        consume({
            id: message.id,
            error: new Error('s error')
        });

        receipt.catch((err) => {
            assert.equal(err.toString(), 'Error: s error');
            done();
        });
    });
});
