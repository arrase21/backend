const express = require('express')
const conectarDB = require('../config/db')
const cors = require('cors')
const app = express()
const port = 3005

// Enlazar la conexion en la base de datos

conectarDB()

var corsOptions = {
  origin: 'https://macro.onrender.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.get('/products/:id', cors(corsOptions), function (req, res) {
  res.json({msg: 'This is CORS-enabled for only example.com.'})
})

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
});

app.use(express.json())
app.use('/api/clientes', require('../routes/cliente'))
app.use('/api/alimentos', require('../routes/alimento'))

app.use('/api/auth', require('../routes/auth'))

app.use('/api/usuarios', require('../routes/usuarios'))

app.get('/', (req, res) => {
	res.send('Bienvenidos, servidor configurado')
})

app.listen(port, () => console.log('esta conectado', port))
