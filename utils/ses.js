const aws = require('aws-sdk');
const configLib = require('../config')
let config = configLib[process.env.NODE_ENV || 'production'];

const ses = new aws.SES({
    accessKeyId: config.AWS_KEY,
    secretAccessKey: config.AWS_SECRET,
    region: 'eu-west-1'
});

exports.sendEmail = function (to, subject, message) {
    return ses.sendEmail({
        //checkout if content type can be changed
        Source: 'Edith <edith.chevallier3000@gmail.com>',
        Destination: {
            ToAddresses: [to]
        },
        Message: {
            Body: {
                Text: {
                    Data: message
                }
            },
            Subject: {
                Data: subject
            }
        }
    }).promise().then(
        () => console.log('it worked!')
    ).catch(
        err => console.log(err)
    );
};