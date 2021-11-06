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


const port = process.env.PORT || 1339
let museos = []

const loadPublishers = () => {
  fs.readFile('./src/museos.json', 'utf8', (err, data) => {
    museos = JSON.parse(data)
  });
}
loadPublishers()

const savePublishers = () => {
  let data = JSON.stringify(publishers,null,2)
  fs.writeFileSync(__dirname + '/' + 'museos.json', data)
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
  res.json(museos);
})

router.get('/:id', (req, res) => {
  let museo = museos.find(i => i.id == req.params.id);
  if (museo == undefined)
    res.status(404).send('Museo not found');
  else
    res.json(museo);
})

router.post('/:id', (req, res) => {
  let index = museos.findIndex(i => i.id == req.params.id);
  if (index != -1)
    res.status(404).send('Museo already exits');
  else {
    museos.push(req.body);
    savePublishers();
    res.status(200).send('Museo was added');
  }
})

router.put('/', (req, res) => {
  let museo= req.body;
  let index = museos.findIndex(i => i.id == museo.id);
  if (index == -1)
    res.status(404).send('Museo not found');
  else {
    museos[index] = museo;
    savePublishers();
    res.status(200).send('Museo was updated');
  }
})

router.delete('/:id', (req, res) => {
  let index = museos.findIndex(i => i.id == req.params.id);
  if (index == -1)
    return resolve();
  else {
    museos = museos.filter(i => i.id != req.params.id);
    savePublishers();
  }
})

