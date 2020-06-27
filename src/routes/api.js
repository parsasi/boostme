const express = require('express')
const router = express.Router()
const twitterHelpers = require('../helpers/twitterHelpers');
const analyze = require('../helpers/analyze');
const googleHelpers = require('../helpers/googleHelpers');
const google = require('../helpers/google');
module.exports = () => {
    router.get('/favorites' ,(req,res) => {
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

    router.get('/text/sentiment' , (req,res) => {
        const text = decodeURI(req.query.text)
        googleHelpers.analyzeSentiment(text)
        .then(result => res.json(result))
        .catch(e => {
            console.log(e)
            res.json(e)
        })    
    })

    router.get('/text/entities' , (req,res) => {
        const text = decodeURI(req.query.text)
        googleHelpers.analyzeEntities(text)
        .then(result => res.json(result))
        .catch(e => {
            console.log(e)
            res.json(e)
        })    
    })
    return router
};