const express = require('express')//aca importo express
const path = require('path')//esto es para leer nuestras carpetas

const startServer = (options) => {  
    const { port, public_path = 'public'} = options
    
    const app = express()

    //para poder usar middlewares se usa la palablra use (express)
    app.use(express.static(public_path)) // contenido estatico disponible

    app.get('*', (req, res) => {
        const indexPath = path.join(__dirname + `../../../${public_path}/index.html`)
        res.sendFile(indexPath)
    }) //req es request es peticion y res es respuesta

    app.listen(port, () => {
        console.log(`escuchando en el puerto ${port}`)
    }) //es para que cuando llama a traves de una url o un navegador nosotros podamos devilverle la pagina

}

module.exports = {
    startServer
}