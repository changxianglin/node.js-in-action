module.exports = (req, res, next) => {
    res.message = message(req)
    res.error = (msg) => {
        return res.message(msg, 'error')
    }
    res.locals.messages = req.sesion.messages || []
    res.locals.removeMessages = () => {
        req.sesion.messages = []
    }
    next()
}