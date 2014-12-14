var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.use(express.static(__dirname + '/static'));

io.on('connection', function(socket) {
  console.log('new user');
  socket.on('setup', function(data) {
    io.emit('setup', data);
    console.log(data);
  });
  socket.on('setup complete', function(data) {
    io.emit('setup complete', data);
    console.log(data);
  });
  socket.on('game', function(data) {
    io.emit('game', data);
    console.log(data);
  });
});

http.listen(3000,function() {
  console.log('listening on port 3000');
});
