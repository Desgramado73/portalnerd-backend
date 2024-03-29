const app = require('express')()
const consign = require('consign')

const db = require('./config/db')

app.db = db


consign()
.include('./config/passport.js')
.then('./config/middlewares.js')
.then('./api/validations.js')
.then('./api')
.then('./config/routes.js')
.into(app)

app.listen(process.env.PORT || 3000, () => {
    console.log('Backend executando')
})