const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')

const environmetVariable = require('./config/environment')
const connectDB = require('./database/connection')
const routes = require('./shared/routes/index')

// App
const app = express()

// Configuracion
app.set('port', environmetVariable.PORT || 4100)

// Middlewares
app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
if (environmetVariable.DEVELOPMENT === 'DEVELOPMENT') {
    app.use(morgan('dev'))
}

// Configuracion de rutas
app.use('/api/v1/', routes)



// conexion a la base datos
connectDB()





module.exports = app