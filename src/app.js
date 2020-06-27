module.exports = () => {
    const express = require('express')
    const app = express()
    const apiRouter = require('./routes/api')()
    const bodyParser = require('body-parser')
    const path = require('path')
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(express.static('public/build'))
    app.use(bodyParser())

    app.use('/api' , apiRouter)
    
    app.get("*", (req, res) => {
      res.sendFile(path.resolve("./public/build", "index.html"));
    });

    return app
} 