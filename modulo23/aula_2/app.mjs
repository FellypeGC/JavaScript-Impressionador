import http from 'node:http';

const server = http.createServer();

server.on('request', (request, response) => {
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.write('Resposta do servidor');
  response.end();
});

server.listen(8000);