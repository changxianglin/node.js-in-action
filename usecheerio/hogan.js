const hogan = require('hogan.js')
const templateSoure = '{{message}}'
const context = { message: 'Hello template!'}
const template = hogan.compile(templateSoure)
console.log(template.render(context))