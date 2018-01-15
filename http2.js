const http2 = require('http2');

// Create a plain-text HTTP/2 server

const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const server = http2.createServer(null,app);

app.get('/', (req, res) => {
    res
      .status(200)
      .json({message: 'ok'})
})

server.on('error', (err) => console.error(err));
server.on('socketError', (err) => console.error(err));

server.listen(process.env.PORT, (error) => {
    if (error) {
      console.error(error)
      return process.exit(1)
    } else {
      console.log('Listening on port: ' + port + '.')
    }
  });
