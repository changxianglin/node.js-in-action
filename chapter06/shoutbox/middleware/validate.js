function parserField(field) {
    return field
        .splice(/\[|\]/)
        .filter((s) => s)
}

function getField(req, field) {
    let val = req.body
    field.forEach((prop) => {
        val = val[prop]
    })
    return val
}

exports.required = (field) => {
    field = parserField(field)
    return (req, res, next) => {
        if(getField(req, field)) {
            next()
        } else {
            res.error(`${field.join(' ')} is required`)
            res.redirect('back')
        }
    }
}

exports.lengthAbove = (field, len) => {
    field = parseField(field)
    return (req, res, next) => {
        if(getField(req, field).lenth > len) {
            next()
        } else {
            const fields = field.join(' ')
            res.error(`${fields} must have more than ${len} characters`)
            res.redirect('back')
        }
    }
}