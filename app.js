const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const blogRoutes = require('./routes/blogRoutes')

const app = express()

const dbURI = 'mongodb+srv://ninja:kippytech7@cluster0.wv2yvw7.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(dbURI)
.then((result) => app.listen(port))
.catch((err) => console.log(err))

const port = 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'))
//app.use('/static', express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.redirect('/blogs')
})

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' })
})

app.use('/blogs', blogRoutes)

app.use((req, res) => {
  res.status(404).render('404', { title: '404' })
})
