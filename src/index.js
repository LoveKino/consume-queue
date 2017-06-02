'use strict';

let uuidV4 = require('uuid/v4');

/**
 * a simple message queue
 */

let messageQueue = () => {
    let queue = {};

    return {
        produce: (source) => {
            let id = uuidV4();

            return {
                message: {
                    id, source,
                    time: new Date().getTime()
                },

                // when message was consumed, will resolve
                receipt: new Promise((resolve, reject) => {
                    queue[id] = {
                        resolve,
                        reject
                    };
                })
            };
        },

        consume: ({
            id,
            error,
            data
        }) => {
            let item = queue[id];
            if (error) {
                item && item.reject(error);
            } else {
                item && item.resolve(data);
            }
            delete queue[id];
        }
    };
};

module.exports = messageQueue;
