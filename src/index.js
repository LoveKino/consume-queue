'use strict';

let idgener = require('idgener');

let messageQueue = () => {
    let queue = {};

    return {
        produce: (source) => {
            let id = idgener();

            return {
                data: {
                    id, source,
                    time: new Date().getTime()
                },
                result: new Promise((resolve, reject) => {
                    queue[id] = {
                        resolve,
                        reject
                    };
                })
            };
        },

        // error = {msg, stack}
        consume: ({
            id,
            error,
            data
        }) => {
            let item = queue[id];
            if (error) {
                let err = new Error(error.msg);
                err.stack = error.stack;
                item && item.reject(err);
            } else {
                item && item.resolve(data);
            }
            delete queue[id];
        }
    };
};

module.exports = messageQueue;
