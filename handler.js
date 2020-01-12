'use strict';
const verifyPasswordLenght = require('./constraints/verifyPasswordLength');
const verifyPasswordLenght2 = require('./constraints/verifyPasswordLength2');

module.exports.password = async event => {
    try {
        const password = event.pathParameters.password;
        console.log(password);
        await verifyPasswordLenght(password);
        const { score } = await verifyPasswordLenght2(password);
        console.log(score);
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: `Password ok: ${score}`
            })
        }
    } catch (error) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                message: `Error: ${error.message} con score: ${error.score}`
            })
        }
    }
};