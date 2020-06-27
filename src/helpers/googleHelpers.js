const client = require('./google')()
module.exports.analyzeSentiment = (text) => {
    return new Promise((resolve,reject) => {
        const document = {
            content: text,
            type: 'PLAIN_TEXT',
        };
        client.analyzeSentiment({document: document})
        .then(result => {
            const sentiment = result[0].documentSentiment;
            resolve({...sentiment});
        })
        .catch(e => reject(e))
    })
}

module.exports.analyzeEntities = (text) => {
    return new Promise((resolve,reject) => {
        const document = {
            content: text,
            type: 'PLAIN_TEXT',
        };
        client.analyzeEntitySentiment({document: document})
        .then(result => {
            resolve(restructureEntityObjects(result[0].entities));
        })
        .catch(e => reject(e))
    })
}

const restructureEntityObjects = (entities) => {
    const entityNames = []
    entities.map(item => {entityNames.push({name : item.name , type : item.type , salience : item.salience})})
    return entityNames
}