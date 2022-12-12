const express = require('express')
const conectarDB = require('../config/db')
const app = express()
const port = 3005
const cors = require('cors')

// Enlazar la conexion en la base de datos

conectarDB()

app.use(
	cors({
    origin: ( URL = 'https://macro.onrender.com' )
	})
);

app.use(express.json())
app.use(URL = '/api/clientes', require('../routes/cliente'))
app.use(URL = '/alimentos', require('../routes/alimento'))


app.use(URL = '/api/auth', require('../routes/auth'))

app.use(URL = '/api/usuarios', require('../routes/usuarios'))

app.get('/', (req, res) => {
	res.send('Bienvenidos, servidor configurado')
})

app.listen(port, () => console.log('esta conectado', port))
