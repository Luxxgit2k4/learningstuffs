 import { createServer } from 'http';
import dotenv from 'dotenv';
import { naruto } from "./database.js"
import { logger } from "./logger.js"
import { yametekudasai } from './logger.js';
dotenv.config();
const kira = process.env.PORT;

const databasenames = (req, res) => {
  res.write(JSON.stringify(naruto));
   res.end();
}

const namesbyid = (req, res) => {
  const id = req.url.split('/')[3];
   const itachi = naruto.find((itachi) => itachi.id === parseInt(id));
   if (itachi) {
   res.write(JSON.stringify(itachi));
}
else {
  res.statusCode = 404;
  res.write(JSON.stringify({message: 'Name not found'}))
}
res.end();
}

const notfound = (req, res) => {
   res.statusCode = 404;
res.write(JSON.stringify({message: 'Route not found'}));
  res.end();
}

const server = createServer((req, res) => {
  logger(req, res, () => {
    yametekudasai(req, res, () => {
 if (req.url === '/api/naruto' && req.method === 'GET') {
   databasenames(req, res);
 }
      else if (req.url.match(/\/api\/naruto\/([0-9]+)/) && req.method === 'GET') {
namesbyid(req, res);
      } else {
        notfound(req, res);
      }
    })
  })
});

server.listen(kira, () => {
  console.log(`Server running on port ${kira}`);
});

