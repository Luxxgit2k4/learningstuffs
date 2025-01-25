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
 }
});
server.listen(kira, () => {
  console.log(`Server running on port ${kira}`);
});
