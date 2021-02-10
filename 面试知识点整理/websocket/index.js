const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

app.get('/', (req,res)=>{
  res.sendFile(__dirname + '/index.html');
})
io.on('connection', (socket)=>{
  console.log('connect');
  socket.on('chat message', (msg) => {
    console.log('message' + msg);
    // socket.broadcast.emit('msg') // 除了自己
    io.emit('chat message', msg) // 所有人，包括自己
  });
})
// io.on('connection', (socket) => {
//   socket.on('chat message', (msg) => {
//     io.emit('chat message', msg);
//   });
// });

http.listen(3000, ()=>{
  console.log('http://localhost:3000');
})