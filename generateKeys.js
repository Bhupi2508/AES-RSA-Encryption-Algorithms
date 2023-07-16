/******************************************************************************
@Execution : node : nodemon generateKeys.js
@description : Generate public and private keys for AES Algos
@overview : AES Algorithms
@version : 1.0
@since : 16-July-2023
******************************************************************************/

const crypto = require('crypto');

// Generate new key pair
const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: {
        type: 'pkcs1',
        format: 'pem',
    },
    privateKeyEncoding: {
        type: 'pkcs1',
        format: 'pem',
    },
});

// // Print the generated keys
// console.log('Public Key:\n', publicKey);
// console.log('Private Key:\n', privateKey);

module.exports = {
    publicKey, privateKey
}
