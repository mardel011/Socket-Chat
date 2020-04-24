/*var app = require('http').createServer()
var io = module.exports.io = require('socket.io')(app)

const PORT = process.env.PORT || 3231

const SocketManager = require('./SocketManager')

io.on('connection', SocketManager)

app.listen(PORT, ()=>{
	console.log("Connected to port:" + PORT);
})*/

var app = require('http').createServer()
var io = module.exports.io = require('socket.io')(app)
var mongoose = require('mongoose');

const PORT = process.env.PORT || 3231

const connectionString = 'mongodb+srv://mardel011:Heyhey000@cluster0-yuz7l.mongodb.net/test?retryWrites=true&w=majority';

mongoose
  .connect(connectionString, { useNewUrlParser: true } )
  .then( () => {console.log("Mongoose connected Successfully");},
  error => {console.log("Mongoose could not be connected to database: " + error);}
  );
const SocketManager = require('./SocketManager')


io.on('connection', SocketManager)

app.listen(PORT, ()=>{
	console.log("Connected to port:" + PORT);
})