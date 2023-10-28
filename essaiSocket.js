const express = require('express');
const bodyParser = require('body-parser');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const app = express() ;
// ajout de socket.ioconst 
server = require('http').Server(app)
const io = require('socket.io')(server)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'))
app.get('/', function (req, res) {
     res.sendFile('index.html', { root: __dirname })})
app.get('/json', function (req, res) {   
      res.status(200).json({"message":"ok"})})
  // établissement de la connexion
io.on('connection', (socket) =>{
       console.log(`Connecté au client ${socket.id}`)
       io.emit('news','Voici un nouvel élément envoyé par le serveur')
        socket.on('disconnect', function(){
            console.log('user disconnected')});     
        socket.on("lettre", function(contenu){
          console.log(contenu);
          socket.emit("news",`vous avez tapé ${contenu}`)

        })
      })
      
  // on change app par server
server.listen(3000, function () { 
console.log('Votre app est disponible sur localhost:3000 !')});
  
io.on('lettre',(socket)=>{
  console.log('recu')});

rl.on('line',function (line){
      // Each line in input.txt will be successively available here as `line`.
      console.log(`Line from file: ${line}`);
      io.emit('news', line)
  })
    