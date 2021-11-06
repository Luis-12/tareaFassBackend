// main.js
const fs = require('fs')
const express = require('express')
const serverless = require('serverless-http');
 
const app = express();
const router = express.Router();
app.use(express.json());
app.use(router);
app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);
const port = process.env.PORT || 1338
let pinturas = []

const loadAuthors = () => {
  fs.readFile('./src/pinturas.json', 'utf8', (err, data) => {
    pinturas = JSON.parse(data)
  });
}
loadAuthors()

const saveAuthors = () => {
  let data = JSON.stringify(pinturas,null,2)
  fs.writeFileSync(__dirname + '/' + 'pinturas.json', data)
}

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Content-Type', 'application/json');
  next();
});

router.get('/', (req, res) => {
  res.json(pinturas);
})

router.get('/:id', (req, res) => {
  let pintura = pinturas.find(i => i.id == req.params.id);
  if (pintura == undefined)
    res.status(404).send('Pintura not found');
  else
    res.json(pintura);
})

router.post('/:id', (req, res) => {
  let index = pinturas.findIndex(i => i.id == req.params.id);
  if (index != -1)
    res.status(404).send('Pintura already exits'); 
  else {
    pinturas.push(req.body);
    saveAuthors();
    res.status(200).send('Pintura was added');
  }
})

router.put('/', (req, res) => {
  let pintura= req.body;
  let index = pinturas.findIndex(i => i.id == pintura.id);
  if (index == -1)
    res.status(404).send('Pintura not found');
  else {
    pinturas[index] = pintura;
    saveAuthors();
    res.status(200).send('Pintura was updated');
  }
})

router.delete('/:id', (req, res) => {
  let index = pinturas.findIndex(i => i.id == req.params.id);
  if (index == -1)
    return resolve();
  else {
    pinturas = pinturas.filter(i => i.id != req.params.id);
    saveAuthors();
  }
})

