const { response, request } = require('express')

//Acá en get mandarémos query params, esto me sirve para mi proyecto de garantías
//Express incorpora todas estas funcionalidades
const userGet = (req, res) => {

    //Obtendre la serie que me manda el cliente
    const query = req.query
    //Puedo desestructurar
    const { serie } = req.query
    res.json({
        mensaje: "GET",
        query,
        serie
    })
}
const userPost = (req, res) => {
    //Voy a recibir información que viene de un body atraves del metodo post en el req
    const {nombre, apellido, edad} = req.body
    res.json({
        mensaje: "POST",
        nombre,
        apellido,
        edad
    })
}
const userPut = (req = request, res) => {
    //Acá recibiré información del usuario por ejm su id esto tambien lo cambio en la ruta put
    const { id } = req.params

    res.json({
        mensaje: "PUT",
        id
    })
}
const userDelete = (req, res) => {
    res.json({
        mensaje: "DELETE"
    })
}
const userPatch = (req, res) => {
    res.json({
        mensaje: "PATCH"
    })
}

//Exportar funciones 

module.exports = {
    userGet,
    userPost,
    userPut,
    userDelete,
    userPatch
}