let express = require('express')
let app = express()
let port = 3000

app.listen(port, ()=> {
    console.log(`Le serveur est en route`)
    console.log(`Server listening at http://localhost:${port}`)
})

app.get('/', (req, res, next) =>{
    res.send('Bonjour !')
})