module.exports = require('./src');

/**
 * @readme-quick-run
 *
 * ## test tar=js r_c=messageQueue
 * let {produce, consume} = messageQueue();
 *
 * let {receipt, message} = produce({a: 1});
 *
 * console.log(message);
 *
 * consume({id: message.id, data: 'ok!'});
 *
 * receipt.then((ret) => {
 *   console.log(ret);
 * });
 */
