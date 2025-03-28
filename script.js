const jwt = require('jsonwebtoken');

const SECRET_KEY = 'alok@1047'


const encrypt = (payload) => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: '10hr' });
};


const decrypt = (token) => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (err) {
    return null; 
  }
};


const payload = { userId: '123' };
const token = encrypt(payload);
console.log('Generated Token:', token);

const decoded = decrypt(token);
if (decoded) {
  console.log('Decrypted Payload:', decoded);
  console.log('Success');
} else {
  console.log('Failed to decrypt token');
}

module.exports = {
  encrypt,
  decrypt
};