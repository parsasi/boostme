const client = require('./twitter')()
const analyze = require('./analyze')
 module.exports.getFavorites = () => {
    return new Promise((resolve , reject) => {
        client.get('favorites/list', function(err, tweets, response) {
            if(err){
                reject(err)
            };
            resolve(tweets)
        });
    })
 }

 module.exports.postTweet = (text) => {
    return new Promise((resolve , reject) => {
        client.post('statuses/update' , {status : text} , (err) => {
            if(err){
                reject(err)
            };
            resolve()
        })
    })
 }

 module.exports.getHashtag = (hashtag) => {
    return new Promise((resolve , reject) => {
        client.get('search/tweets' , {q : `#${hashtag}` , count : 100}, function(err, tweets, response) {
            if(err){
                reject(err)
            };
            resolve(tweets);
        });
    })
 }

module.exports.analyzeHashtag = (posts) => {
    return analyze.calculatePosts(posts)
}

