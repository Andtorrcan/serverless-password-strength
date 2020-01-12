const zxcvbn = require('zxcvbn');

module.exports = password => {
    const score = zxcvbn(password).score;
    console.log(score);
    if (score < 2) {
        return Promise.reject({
            message: 'Password no valid',
            score
        });
    }
    return Promise.resolve({
        message: 'Todo bennn',
        score
    });
}