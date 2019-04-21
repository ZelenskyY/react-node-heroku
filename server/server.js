import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'

const app = express();
const port = process.env.PORT || 5000
const env = process.env.NODE_ENV || 'development'

console.log(env)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/test', (req, res) => {
  return res.send({ msg: 'hello there' })
})

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

app.listen(port, () => console.log(`Server running on port ${port}`));