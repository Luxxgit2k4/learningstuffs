import http from 'http';
import dotenv from 'dotenv';
import { error } from 'console';
dotenv.config();
const port = process.env.PORT;
const server = http.createServer((req, res) => {
  console.log('Request URL:', req.url);
 console.log('Request Method:', req.method);
 try {
   if (req.method === 'GET') {
 if (req.url === '/') {

   res.writeHead(200, { 'Content-Type': 'text/HTML'})
res.end( '<h1>Hello Kumar</h1>')
} else if (req.url === '/about') {
 res.writeHead(200, { 'Content-Type': 'text/HTML'})
res.end( '<h1>About Kumar</h1>')
} else {
 res.writeHead(404, { 'Content-Type': 'text/HTML'})
res.end( '<h1>Error da</h1>')
}
}
  else {
    throw new Error('Only GET method is allowed')
     }

 } catch (error) {
 res.writeHead(500, { 'Content-Type': 'text/plain'})
res.end('Server Error')
 }
  });

server.listen(port, () => {
console.log(`Server running on ${port}`)
})
