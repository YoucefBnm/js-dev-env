import express from "express"
import path from "path"
// import open from "open" //to open our site in browser
import webpack from 'webpack'
import config from '../webpack.config.dev'
// "start:dev": "webpack-dev-server --mode development --open",

/* eslint-disable no-console */
const port = 8080
const app = express()
const compiler = webpack(config)

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}))
// tell express which route to handle
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html')) // "__dirname" give us the directory we running in
})

app.get('/users', function(req,res) {
    res.json([
        {"id":1,"firstName":"Josef","lastName":"Bnm","email":"ssefbnm@gmail.com"},
        {"id":2,"firstName":"Mohamed","lastName":"Didi","email":"mohamin@hotmail.fr"},
        {"id":3,"firstName":"Fatima-Zahra","lastName":"Bnm","email":"fatbnm@gmail.com"}
    ])
})

app.listen(port, function(err) {
    if (err) {
        console.log(err)
    } else {
        open('http//localhost:' + port)
    }
})
