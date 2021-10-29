const express = require('express')
const login = require('./loginRoute')

module.exports = app => {
    app.use(express.json())
    app.use(login)

}