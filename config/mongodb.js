 const mongoose = require('mongoose')
 mongoose.connect('mongodb://127.0.0.1:27017/portalnerd')
    .catch(e => {
         const msg = "Não foi possivel conectar com o mongoDB"
        console.log('\x1b[41m%s\x1b[37m', e, '\x1b[0m')
   })
    