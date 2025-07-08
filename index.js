const phoneCodes = require('./phoneCodes');

const getAllPhoneCode = function() {
    return phoneCodes;
}

const findPhoneCodeByCode = function(code) {
    return phoneCodes.find(el => el.id === code);
}

const findPhoneCodeByCountryName = function(name) {
    return phoneCodes.find(el => el.name === name);
}

const findPhoneCodeByCountryCode = function(code) {
    return phoneCodes.find(el => el.code === code);
}

module.exports = {
    getAllPhoneCode,
    findPhoneCodeByCode,
    findPhoneCodeByCountryName,
    findPhoneCodeByCountryCode
}
