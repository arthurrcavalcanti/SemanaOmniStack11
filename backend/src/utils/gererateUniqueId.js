const crypto = require('crypto');

module.exports = function GenerateUniqeID() {
        return crypto.randomBytes(4).toString('HEX');
    }
