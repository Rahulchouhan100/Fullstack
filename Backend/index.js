const express = require('express')
const app = express();

const port = 4000;

const product_routes = require('./controllers/product')


app.use("/api/products",product_routes)

app.get('/', (req, res) => {
  res.send('hello world')
})

app.get('/api/testing', (req, res) => {
  const details = [
    {
      name :"rahul",
      skills :"Javascript"
    },
    {
      name :"Rehan",
      skills :"React"
    },

  ]
    res.json(details)

  })
app.listen(port, () => console.log(`server listing on ${port}`))