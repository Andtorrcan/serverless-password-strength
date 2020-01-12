module.exports = password => {
    if (password.length < 2) {
        return Promise.reject({
            message: 'Password length no valid'
        });
    }
    return Promise.resolve({
        message: 'Todo bennn'
    });
}