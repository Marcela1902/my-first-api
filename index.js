const express =require('express')

const fs = require('fs')

const kodemia = JSON.parse(fs.readFileSync('kodemia.json'))
const server = express()
server.use(express.json()) //middleawere

// endpoints: la combinacion de un metodo y una una ruta
// metodo: get,post
// ruta: strings que denoten recursos  

server.get('/', (request,response) => {
    response.json({
        mesagge: 'my first Api is running'
    })
})

server.get('/koders', (request,response)=>{
    response.json({
        message: 'All the koders',
        data: {
            koders: kodemia.koders
        }
    })
}) 

server.post('/koders',(request, response)=>{
    const newKoder ={
        name: request.body.name,
        generation: request.body.generation
    }
    kodemia.koders.push()
})
server.post('/mentors', (request,response) =>{
    response.json({
        message: 'All the mentors',
        data: {
            mentors: kodemia.mentors
        }
    })
})
server.post('/mentors', (request,response) =>{
    const newMentor = {
        name: request.body.name,
        especialidad: request.body.especialidad
    }
    kodemia.mentors.push()
})

server.listen(8082,()=>{
    console.log('server is running ')
})