'use strict';

let messageQueue = require('..');
let assert = require('assert');

describe('index', () => {
    it('base', () => {
        let {
            produce, consume
        } = messageQueue();

        let {
            result, data
        } = produce({
            a: 1
        });

        consume({
            id: data.id,
            data: {
                b: 2
            }
        });

        return result.then((ret) => {
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
            result, data
        } = produce({
            a: 1
        });

        consume({
            id: data.id,
            error: new Error('s error')
        });

        result.catch((err) => {
            assert.equal(err.toString(), 'Error: s error');
            done();
        });
    });
});
