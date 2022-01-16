const express = require("express");
require('dotenv')
const cors = require('cors');
const { userGet, userPost, userPatch, userDelete, userPut } = require('../controller/users');
const { json } = require("express/lib/response");

class Server {
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        //Middlewars
        this.middlewars()
        //Rutas 
        this.routes()
        //Rutas de usuarios
        /* this.userPatch = '/api/usuarios' */

    }
    //Middlewars
    middlewars (){
        this.app.use(cors())
        this.app.use(express.static('public'))
        //El siguiente middlewars me permita obtener los datos del body que vienen en el post
        this.app.use(express.json())
    }

    //Rutas #endpoints
    routes(){
        this.app.get('/api/usuarios', userGet)
        this.app.post('/api/usuarios', userPost)
        this.app.put('/api/usuarios/:id', userPut)
        this.app.delete('/api/usuarios', userDelete)
        this.app.patch('/api/usuarios', userPatch)
    }
    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Servidor corriendo en el puerto ${this.port}`)
        })
    }
}

module.exports = Server