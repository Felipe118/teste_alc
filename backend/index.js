const express = require("express")
const cors = require("cors")

const app = express()

//conexao
const conn = require('./db/Conn')

//models
const calculo = require("./Model/Calculo")

//cors 
app.use(cors({credentials:true,origin:'http://localhost:3000' }))

app.use(
    express.urlencoded({
        extended:true,
    })
)

app.use(express.json());

app.use(express.static('assets'))

//routes
const calcRoute = require("./Route/calculoRoutes")

app.use('/imc', calcRoute)

//app.listen(5000)
conn
  .sync()
  .then(() => {
    app.listen(5000);
  })