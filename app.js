import express from 'express'
import connectDB from './config/db.connection.js'
import Toy from './models/Toy.model.js'

//Define a porta na qual a API/Server escutará
const PORT = 3001

//Conecta-se ao banco de dados
connectDB()

//Cria a instância do express
const app = express()

//Habilita o middleware que nos permite trabalhar com requests JSON
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Welcome to the Toy Tracker API!')
})

app.post('/toys', async (req, res) => {
    try {
        const newToy = await Toy.create(req.body)
        return res.status(201).json(newToy)
    } catch (error) {
        console.log('Erro ao criar toy ', error)
        return res.status(500).json({message: 'Internal Server Error'})
    }
})

app.get('/toys', async (req, res) => {
    try {
        const toys = await Toy.find({})
        return res.status(200).json(toys)
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: 'Internal Server Error'})
    }
})

app.get('/toys/:id', async (req, res) => {
    try {
        const { id } = req.params
        const toy = await Toy.findById(id)

        if(!toy) {
            return res.status(404).json({message: 'Toy not found'})
        }

        return res.status(200).json(toy)
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: 'Internal Server Error'})
    }
})

//Inicializa o meu servidor/api
app.listen(PORT, () => console.log('Server listening on port ', PORT))