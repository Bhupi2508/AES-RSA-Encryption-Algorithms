/******************************************************************************
@Execution : node : nodemon symmetric.js
@description : AES Algorithm for Symmetric Encryption
@overview : Encryption involves converting plain text into a secret form, while decryption is the process of reverting encrypted data back to its original form
@author : Bhupendra Singh
@since : 26-july-2023
******************************************************************************/

const crypto = require('crypto');

// Function to encrypt plain text using a secret key
function symmetricEncrypt(plainText, secretKey) {
    // Create a cipher using the AES-256-CBC algorithm and the secret key
    const cipher = crypto.createCipher('aes-256-cbc', secretKey);

    // Update the cipher with the plain text, encoding it in UTF-8 and converting the result to hexadecimal
    let encrypted = cipher.update(plainText, 'utf8', 'hex');

    // Finalize the encryption process and append the final cipher output, also in hexadecimal
    encrypted += cipher.final('hex');

    // Return the encrypted text
    return encrypted;
}

// Function to decrypt encrypted text using a secret key
function symmetricDecrypt(encryptedText, secretKey) {
    // Create a decipher using the AES-256-CBC algorithm and the secret key
    const decipher = crypto.createDecipher('aes-256-cbc', secretKey);

    // Update the decipher with the encrypted text in hexadecimal, converting it back to UTF-8
    let decrypted = decipher.update(encryptedText, 'hex', 'utf8');

    // Finalize the decryption process and append the final decipher output in UTF-8
    decrypted += decipher.final('utf8');

    // Return the decrypted text
    return decrypted;
}


module.exports = {
    symmetricEncrypt, symmetricDecrypt
}
