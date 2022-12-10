const express = require('express')
const conectarDB = require('../config/db')
const cors = require('cors')
const app = express()
const port = 3005

// Enlazar la conexion en la base de datos

conectarDB()
app.use(
	cors({
    origin: ['http://localhost:3005','https://macro.onrender.com'],
	})
);

app.use(express.json())
app.use('/api/clientes', require('../routes/cliente'))
app.use('/api/alimentos', require('../routes/alimento'))

app.use('/api/auth', require('../routes/auth'))

app.use('/api/usuarios', require('../routes/usuarios'))

app.get('/', (req, res) => {
	res.send('Bienvenidos, servidor configurado')
})

app.listen(port, () => console.log('esta conectado', port))
