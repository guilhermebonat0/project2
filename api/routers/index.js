const express = require('express')
const logins = require('./loginRoute')

module.exports = app => {
    app.use(express.urlencoded({ extended: true }))
    app.use(logins)

}