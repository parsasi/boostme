const express = require('express')
const router = express.Router()
const twitterHelpers = require('../helpers/twitterHelpers');
const analyze = require('../helpers/analyze');
module.exports = () => {
    router.get('/getFavorites' ,(req,res) => {
        twitterHelpers.getFavorites()
        .then(tweets => res.json(tweets))
        .catch(e => res.json(e))
    })

    router.post('/tweet' , (req,res) => {
        const text = req.body.text || ''
        twitterHelpers.postTweet(text)
        .then(() => res.json({successfull : 1}))
        .catch(e => res.json(e))
    })
    // search/tweets

    router.get('/hashtag' ,(req,res) => {
        const hashtag = req.query.hashtag || ''
        twitterHelpers.getHashtag(hashtag)
        .then(tweets => res.json(tweets))
        .catch(e => res.json(e))
    })

    router.get('/hashtag/analyze' , (req,res) => {
        const hashtag = req.query.hashtag || ''
        twitterHelpers.getHashtag(hashtag)
        .then(result => {
            res.json(analyze.calculatePosts(result.statuses))
        })
        .catch(e => {
            console.log(e)
            res.json(e)
        })
    })
    return router
};