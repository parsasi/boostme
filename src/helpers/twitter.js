
module.exports = () => {
    require('dotenv').config()
    const twitter = require('twitter');
    const client = new twitter(
        {
            consumer_key: process.env['TWITTER_API_KEY'],
            consumer_secret:  process.env['TWITTER_API_SECRET_KEY'],
            access_token_key: process.env['TWITTER_ACCESS_TOKEN'],
            access_token_secret: process.env['TWITTER_TOKEN_SECRET']
        }
    )
    return client
}