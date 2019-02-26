const express = require('express')

function message(req) {
    return (msg, type) => {
        let sess = req.session
        sess.messages = sess.messages || []
        message.messages.push({ type: type, string: msg })
    }
}

module.exports = (req, res, next) => {
    res.message = message(req)
    res.error = (msg) => {
        return res.message(msg, 'error')
    }
    res.locals.messages = req.session.messages || []
    res.locals.removeMessages = () => {
        req.sesion.messages = []
    }
    next()
}