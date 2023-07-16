/******************************************************************************
@Execution : node : nodemon asymmetric.js
@description : AES Algorithm for Asymmetric Encryption
@overview : Encryption involves converting plain text into a secret form, while decryption is the process of reverting encrypted data back to its original form
@author : Bhupendra Singh
@since : 26-july-2023
******************************************************************************/

const crypto = require('crypto');

// Function to encrypt plain text using a public key
function asymmetricEncrypt(plainText, publicKey) {
    // Encrypt the plain text using the public key
    const encryptedBuffer = crypto.publicEncrypt(publicKey, Buffer.from(plainText));

    // Convert the encrypted buffer to base64 string
    return encryptedBuffer.toString('base64');
}

// Function to decrypt encrypted text using a private key
function asymmetricDecrypt(encryptedText, privateKey) {
    // Convert the encrypted text from base64 string to buffer
    const encryptedBuffer = Buffer.from(encryptedText, 'base64');

    // Decrypt the encrypted buffer using the private key
    const decryptedBuffer = crypto.privateDecrypt(privateKey, encryptedBuffer);

    // Convert the decrypted buffer to UTF-8 string
    return decryptedBuffer.toString('utf8');
}

module.exports = {
    asymmetricEncrypt, asymmetricDecrypt
}
