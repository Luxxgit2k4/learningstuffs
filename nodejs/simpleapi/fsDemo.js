import fs from 'fs'
fs.readFile('./kumar.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data)
});

const goth = fs.readFileSync('./kumar.txt', 'utf8');
console.log(goth)

 fs.promises.readFile('./kumar.txt', 'utf8')
.then((data)  => console.log(data))
.catch((err)  => console.log(err));

const read = async () => {
  try {
    const data = await fs.promises.readFile('./kumar.txt', 'utf8');
    console.log(data)
  } catch (error) {
    console.log(error)
  }
};

const write = async () => {
  try {
    await fs.promises.writeFile('./kumar.txt', 'Kumar is also doing well');
    console.log('File had been written')
  } catch (error) {
    console.log(error)
  }
};

const append = async () => {
  try {
    await fs.promises.appendFile('./kumar.txt', 'I am also doing well');
    console.log('Appended successfully')
  } catch (error) {
    console.log(error)
  }
};



read();
write();
append();
