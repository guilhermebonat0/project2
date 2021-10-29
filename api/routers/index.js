const express = require('express')
const logins = require('./loginRoute')

module.exports = app => {
    app.use(express.json())
    app.use(logins)

}