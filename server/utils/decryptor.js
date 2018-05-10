/**
 * Module to decrypt data
 * @module utils/decryptor
 */
const crypto = require('crypto-js');
const constants = require('./constants');

/**
 * Decrypt an encrypted data
 *
 * @param {string} encryptedData - Data to be decrypted
 * @param {string} key - Key to decrypt the data
 * @return {object} - Returns all the data inside the encrypted data
 * @throws {object} - Returns -1 that indicates a fail
 * 
*/
module.exports = (encryptedData, key) => {
  if (!encryptedData || !key) return false;
  let decryptedDataInBytes = crypto.AES.decrypt(encryptedData, key);
  let decryptedData = decryptedDataInBytes.toString(crypto.enc.Utf8);
  try {
    //  Check if it is a JSON
    decryptedData = JSON.parse(decryptedData);
  } catch (err){
    //  Check if err is because decryptedData is not a json, if it is ignore
  } finally {
    return decryptedData;
  }
};