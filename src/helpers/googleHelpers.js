const client = require('./google')()
module.exports.analyze = (text) => {
    return new Promise((resolve,reject) => {
        const document = {
            content: text,
            type: 'PLAIN_TEXT',
        };
        client.analyzeSentiment({document: document})
        .then(result => {
            const sentiment = result.documentSentiment;
            resolve({sentiment : sentiment });
        })
        .catch(e => reject(e))
    })
}