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
