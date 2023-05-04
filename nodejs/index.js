const express = require('express')
const app = express()
const port = 3000

const config_connect = {
    host : 'db_node',
    user: 'root',
    password: 'root',
    database: 'db_node'
}

app.listen(port, ()=>{
    console.log('Rodando na porta ' + port)
})

const mysql = require('mysql')
const util = require('util')

app.get('/',(req,res) => {

    const top = '<h1>FullCycle!!</h1>'
    
    const connection = mysql.createConnection(config_connect)
    const query = util.promisify(connection.query).bind(connection)
    query('INSERT INTO people(name_people) values ("Cleiton Franca Desafio FullCycle!!")')
     
    query('SELECT * FROM people')
     .then(result => {
         
         let html = result.map(item => {
            return `<li>${item.name_people}</li>`
         }).join('')

         html = `<ul>${html}</ul>`         

         res.send(top+html)})
    
     .catch(err => {
        res.send(top+`<h2>Erro ao buscar dados</h2> ${err.message}`)
     })

     connection.end()

    })










