import express from "express"
import path from "path"
import open from "open" //to open our site in browser
import webpack from 'webpack'
import config from '../webpack.config.dev'

const port = 8888
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

app.listen(port, function(err) {
    if (err) {
        console.log(err)
    } else {
        open('http//localhost:' + port)
    }
})
