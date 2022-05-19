// Usando objeto express
const express = require('express')
// App de Express
const app = express()
app.use(express.json()) // Indicamos que usaremos JSON
// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000
//HTTP Metodos 
app.get('/v1/explorers', (req, res) =>{
    console.log(`Api explorers GET All requests ${new Date()}`);
    const explorer1 = {id: 1, Name: "Hugo"}
    const explorer2 = {id: 2, Name: "Rosa"}
    const explorer3 = {id: 3, Name: "Jose"}
    const explorer4 = {id: 4, Name: "Janet"}
    const explorer5 = {id: 5, Name: "Pepe"}
    const explorers = [explorer1, explorer2, explorer3, explorer4, explorer5]
    res.status(200).json(explorers)
})

app.get('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers Get request ${new Date()}`);
    console.log(`Getting  explorer with id ${req.params.id}`);
    const explorer = {id: 1, name: "Hugo"}
    res.status(200).json(explorer)
})
// app.get('/v1/explorers/:id', (req, res) => {
//     console.log(`Api Explorers Get request ${new Date()}`);
//     const explorer = {id:1, name: "Hugo"}
//     res.status(200).json(explorer)
// })

// Con esto inicializamos esta app
app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})