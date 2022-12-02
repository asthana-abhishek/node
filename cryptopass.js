const crypto = require('crypto');
const algorithm = "aes256";
const initVector = crypto.randomBytes(16);
const Securitykey = crypto.randomBytes(32);

const encrypt = (secret) => {
    const cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);
    let encryptedSecret = cipher.update(secret, "utf-8", "hex");
    encryptedSecret += cipher.final("hex");
    return encryptedSecret;
};

const decrypt = (encryptedSecret) => {
    const decipher = crypto.createDecipheriv(algorithm, Securitykey, initVector);
    let decryptedSecret = decipher.update(encryptedSecret, "hex", "utf-8");
    decryptedSecret += decipher.final("utf8");
    return decryptedSecret;
};

const encryptedSecret = encrypt('pass');
console.log(encryptedSecret);

const decryptedSecret = decrypt(encryptedSecret);
console.log(decryptedSecret);



 
// // generate 16 bytes of random data


// // protected data
// const message = "pass";

// // secret key generate 32 bytes of random data


// // the cipher function

// // encrypt the message
// // input encoding
// // output encoding
// let encryptedData = 

// encryptedData += cipher.final("hex");
// console.log("Encrypted message: " + encryptedData);

// const decipher = crypto.createDecipheriv(algorithm, Securitykey, initVector);
// encryptedData2 = 'b3dd38f658148ad6e9eec13d625a9d7b';
// let decryptedData = decipher.update(encryptedData2, "hex", "utf-8");
// decryptedData += decipher.final("utf8");

// console.log("Decrypted message: " + decryptedData);