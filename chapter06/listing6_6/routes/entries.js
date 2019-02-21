exports.form = (req, res) => {
    res.render('post', { title: 'Post'})
}

exports.submit = (req, res, next) => {
    const data = req.body.entry
    const user = res.locals.user
    const username = user ? user.name : null
    const entry = new Entry({
        username: username,
        title: data.title,
        body: data.body
    })
    entry.save((err) => {
        if(err) return next(err)
        res.redirect('/')
    })
}