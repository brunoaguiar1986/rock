//Configurar nosso Back End
const express = require('express')

//Instancia
const app = express()

//Rota para FRONT END
app.use(express.static('public'))

//Iniciar com localhost:3000
app.listen(3000, () => {
    console.log(`Servidor rodando, acesse link http://localhost:3000`)
})
