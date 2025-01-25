import { createServer } from 'http';
import dotenv from 'dotenv';
import { naruto } from "./database.js"
dotenv.config();
const kira = process.env.PORT;

const server = createServer((req, res) => {
 if (req.url === '/api/naruto' && req.method === 'GET') {
   res.setHeader('Content-Type', 'application/json');
   res.write(JSON.stringify(naruto));
   res.end();
 } else if (req.url.match(/\/api\/naruto\/([0-9]+)/) && req.method === 'GET') {
  const id = req.url.split('/')[3];
   const itachi = naruto.find((itachi) => itachi.id === parseInt(id));
 res.setHeader('Content-Type', 'application/json');
   if (itachi) {
   res.write(JSON.stringify(itachi));
   } else {
  res.statusCode = 404;
res.write(JSON.stringify({message: 'Name not found'}));
   }
     res.end();
   }

  else {
 res.setHeader('Content-Type', 'application/json');
    res.statusCode = 404;
   res.write(JSON.stringify({message: 'Route not found'}));
   res.end();
}
});
server.listen(kira, () => {
  console.log(`Server running on port ${kira}`);
});
