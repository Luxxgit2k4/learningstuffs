 import { createServer } from 'http';
import dotenv from 'dotenv';
import { naruto } from "./database.js"
import { logger } from "./logger.js" // middleware function for logging
import { yametekudasai } from './logger.js'; //middleware function for setting headers
dotenv.config();
const kira = process.env.PORT;

//handlers for accesing the database
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

const addname = (req, res) => {
  let body = '';
  req.on('data', (chunk) => {
    body += chunk.toString();
});
  req.on('end', () => {
    const newname = JSON.parse(body);
    naruto.push(newname);
    res.statusCode = 201;
    res.write(JSON.stringify(newname));
  })
}

// server response from handlers
const server = createServer((req, res) => {
  logger(req, res, () => {
    yametekudasai(req, res, () => {
 if (req.url === '/api/naruto' && req.method === 'GET') {
   databasenames(req, res);
 }
      else if (req.url.match(/\/api\/naruto\/([0-9]+)/) && req.method === 'GET') {
namesbyid(req, res);
      } else if (req.url === '/api/naruto' && req.method === 'POST') {
        addname(req, res);
      }
      else {
        notfound(req, res);
      }
    })
  })
});

server.listen(kira, () => {
  console.log(`Server running on port ${kira}`);
});

