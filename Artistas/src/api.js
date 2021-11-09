
const fs = require('fs')
const express = require('express')
const serverless = require('serverless-http');

 
const app = express();
const router = express.Router();
app.use(express.json());
app.use(router);
app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);


let artistas = []

const loadArtistas = () => {
  fs.readFile('./src/artistas.json', 'utf8', (err, data) => {
    if (err) throw err;
    artistas = JSON.parse(data)
  });
}
//loadArtistas()

const saveArtistas = () => {
  let data = JSON.stringify(artistas,null,2)
  fs.writeFileSync(__dirname + '/' + 'artistas.json', data)
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
   fs.readFile('./src/artistas.json', 'utf8', (err, data) => {
    if (err){ res.status(502).send(err)};
    res.status(404).send('Artista not found');
    artistas = JSON.parse(data)
  });
})

router.get('/:id', (req, res) => {
  let artista = artistas.find(i => i.id == req.params.id);
  console.log(req.params.id);
  if (artista == undefined)
    res.status(404).send('Artista not found');
  else
    res.json(artista);
})

router.post('/:id', (req, res) => {
  let index = artistas.findIndex(i => i.id == req.params.id);
  if (index != -1)
    res.status(404).send('Artista already exits'); 
  else {
    artistas.push(req.body);
    saveArtistas();
    res.status(200).send('Artista was Added');
  }
})

router.put('/', (req, res) => {
  let artista= req.body;
  let index = artistas.findIndex(i => i.id == artista.id);
  console.log(artista.id);
  if (index == -1)
    res.status(404).send('Artista not found');
  else {
    artistas[index] = artista;
    saveArtistas();
    res.status(200).send('Artista was Updated');
  }
})

router.delete('/:id', (req, res) => {
  let index = artistas.findIndex(i => i.id == req.params.id);
  if (index == -1)
    return resolve();
  else {
    artistas = artistas.filter(i => i.id != req.params.id);
    saveArtistas();
    res.status(200).send('Artista was Added');
  }
})

