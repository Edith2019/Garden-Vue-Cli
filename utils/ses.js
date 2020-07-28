const aws = require("aws-sdk");
const configLib = require("../config");
let config = configLib[process.env.NODE_ENV || "production"];

const ses = new aws.SES({
    accessKeyId: config.AWS_KEY,
    secretAccessKey: config.AWS_SECRET,
    region: "eu-west-1"
});

const createEmail = (to, subject, message) => ({
    Source: "Edith <edith.chevallier3000@gmail.com>",
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
});

exports.sendEmail = function (to, subject, message) {
    return ses
        .sendEmail(createEmail(to, subject, message))
        .promise()
        .catch(
            err => console.error(err)
        );
};