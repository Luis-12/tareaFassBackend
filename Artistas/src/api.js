
const express = require('express')
const serverless = require('serverless-http');

 
const app = express();
const router = express.Router();
app.use(express.json());
app.use(router);
app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Content-Type', 'application/json');
  next();
});

let artistas = [
  {
    "id": "1",
    "title": "Pablo Picasso",
    "nationality": "Español",
    "year": "25 de octubre de 1881 -  8 de abril de 1973 (91 años)",
    "url": "https://upload.wikimedia.org/wikipedia/commons/9/98/Pablo_picasso_1.jpg",
    "pinturas": "Viejo Guitarrista,  La mujer que llora",
    "description": "Pablo Ruiz Picasso (Málaga, 25 de octubre de 1881–Mougins, 8 de abril de 1973) fue un pintor y escultor español, creador, junto con Georges Braque, del cubismo.Es considerado desde la génesis del siglo XX como uno de los mayores pintores que participaron en los variados movimientos artísticos que se propagaron por el mundo y ejercieron una gran influencia en otros grandes artistas de su tiempo. Sus trabajos están presentes en museos y colecciones de toda Europa y del mundo. Además, abordó otros géneros como el dibujo, el grabado, la ilustración de libros, la escultura, la cerámica y el diseño de escenografía y vestuario para montajes teatrales. También tiene una breve obra literaria.En lo político, Picasso se declaraba pacifista y comunista. Fue miembro del Partido Comunista de España y del Partido Comunista Francés hasta su muerte,​ acaecida el 8 de abril de 1973 a los noventa y un años, en su casa llamada «Notre-Dame-de-Vie»3​ de la localidad francesa de Mougins. Está enterrado en el parque del castillo de Vauvenargues (Bouches-du-Rhone)."
  },
  {
    "id": "2",
    "title": "Vincent van Gogh",
    "nationality": "Neerlandesa",
    "year": "30 de marzo de 1853 -  29 de julio de 1890 (37 años)",
    "url": "https://mymodernmet.com/wp/wp-content/uploads/2020/01/theo-van-gogh-1.jpg",
    "pinturas": "La noche estrellada,  Autorretrato (Van Gogh; 1889)",
    "description": "Vincent Willem van Gogh (pronunciado Acerca de este sonido; Zundert, 30 de marzo de 1853-Auvers-sur-Oise, 29 de julio de 1890) fue un pintor neerlandés, uno de los principales exponentes del postimpresionismo.Pintó unos 800 cuadros (entre ellos 43 autorretratos y 148 acuarelas) y realizó más de 1600 dibujos. Una figura central en su vida fue su hermano menor Theo, marchante de arte en París, quien le prestó apoyo financiero de manera continua y desinteresada. La gran amistad entre ellos está documentada en las numerosas cartas que se intercambiaron desde agosto de 1872. De las 800 cartas que se conservan del pintor, unas 650 fueron para Theo; las otras son correspondencia con amigos y familiares.Desde joven tuvo inclinación hacia el dibujo. Su primer trabajo fue en una galería de arte. Más tarde se convirtió en pastor protestante y en 1879, a la edad de veintiséis años, se marchó como misionero a una región minera de Bélgica, donde comenzó a dibujar a la gente de la comunidad local. En 1885 pintó su primera gran obra, Los comedores de patatas. En ese momento su paleta se componía principalmente de tonos sombríos y terrosos. La luz y la preferencia por los colores vivos por la que es conocido surgió posteriormente, cuando se trasladó al sur de Francia, consiguiendo su plenitud durante su estancia en Arlés en 1888. La calidad de su obra fue reconocida sólo después de su muerte, en una exposición retrospectiva en 1890, considerado en la actualidad uno de los grandes maestros de la historia de la pintura. Influyó grandemente en el arte del siglo xx, especialmente entre los expresionistas alemanes y los fauvistas como Matisse, Derain, Vlaminck y Kees Van Dongen. ​ Falleció a los treinta y siete años de edad por una herida de bala; aún no se sabe con seguridad si fue un suicidio o un homicidio involuntario. A pesar de que existe una tendencia general a especular que su enfermedad mental influyese en su pintura, el crítico de arte Robert Hughes cree que las obras del artista están ejecutadas bajo un completo control; de hecho, el pintor jamás trabajó en los periodos en los que estaba enfermo."
  },
  {
    "id": "3",
    "title": "Leonardo da Vinci",
    "nationality": "Italiano",
    "year": "15 de abril de 1452 - 2 de mayo de 1519 (67 años)",
    "url": "https://mymodernmet.com/wp/wp-content/uploads/2021/05/leonardo-da-vinci-portrait-1-scaled.jpg",
    "pinturas": "Mona Lisa,  La última cena ",
    "description": "Leonardo da Vinci (Leonardo di ser Piero da Vinci) Loudspeaker.svg escuchar (Vinci, 15 de abril de 14522​-Amboise, 2 de mayo de 1519) fue un polímata florentino del Renacimiento italiano. Fue a la vez pintor, anatomista, arquitecto, paleontólogo,3​ artista, botánico, científico, escritor, escultor, filósofo, ingeniero, inventor, músico, poeta y urbanista. Murió acompañado de Francesco Melzi, a quien legó sus proyectos, diseños y pinturas.​ Tras pasar su infancia en su ciudad natal, Leonardo estudió con el pintor florentino Andrea de Verrocchio. Sus primeros trabajos de importancia fueron creados en Milán al servicio del duque Ludovico Sforza. Trabajó a continuación en Roma, Bolonia y Venecia, y pasó sus últimos años en Francia, por invitación del rey Francisco I.Frecuentemente descrito como un arquetipo y símbolo del hombre del Renacimiento, genio universal, además de filósofo humanista cuya curiosidad infinita solo puede ser equiparable a su capacidad inventiva,​ Leonardo da Vinci es considerado uno de los más grandes pintores de todos los tiempos y, probablemente, la persona con el mayor número de talentos en múltiples disciplinas que jamás ha existido.​ Como ingeniero e inventor, Leonardo desarrolló ideas muy adelantadas a su tiempo, tales como el helicóptero, el carro de combate, el submarino y el automóvil. Muy pocos de sus proyectos llegaron a construirse (entre ellos la máquina para medir el límite elástico de un cable), Nota 2​ puesto que la mayoría no eran realizables en esa época. Nota Como científico, Leonardo da Vinci hizo progresar mucho el conocimiento en las áreas de anatomía, la ingeniería civil, la óptica y la hidrodinámica.Su asociación histórica más famosa es la pintura. Dos de sus obras más conocidas, La Gioconda y La Última Cena, han sido copiadas y parodiadas en varias ocasiones, al igual que su dibujo del Hombre de Vitruvio. No obstante, únicamente se conocen alrededor de 20 obras suyas, debido principalmente a sus reiterados (y a veces desastrosos) experimentos con nuevas técnicas y a su inconstancia crónica. Este reducido número de creaciones, junto con sus cuadernos con dibujos, diagramas científicos y reflexiones sobre la naturaleza de la pintura, constituyen un legado para las sucesivas generaciones de artistas."
  },
  {
    "id": "4",
    "title": "Salvador Dalí",
    "nationality": "Español",
    "year": "11 de mayo de 1904 - 23 de enero de 1989 (84 Años) ",
    "url": "https://www.dondeir.com/wp-content/uploads/2020/06/salvador-dali1.jpg",
    "pinturas": "La persistencia de la memoria, Cristo de San Juan de la Cruz ",
    "description": "Salvador Domingo Felipe Jacinto Dalí i Domènech, nació el 11 mayo de 1904 -y murió el 23 de enero de 1989 a la edad de 84 años, fue un artista surrealista español reconocido por su habilidad técnica, su precisión en el dibujo y las imágenes llamativas y extrañas de su trabajo.Nacido en Figueres , Cataluña , España, Dalí recibió su educación formal en bellas artes en Madrid. Influenciado por el impresionismo y los maestros del Renacimiento desde muy joven, se sintió cada vez más atraído por el cubismo y los movimientos de vanguardia. Se acercó al surrealismo a finales de la década de 1920 y se unió al grupo surrealista en 1929, convirtiéndose pronto en uno de sus principales exponentes. Su obra más conocida, La persistencia de la memoria , se completó en agosto de 1931 y es una de las pinturas surrealistas más famosas. Dalí vivió en Francia durante la Guerra Civil española(1936 a 1939) antes de partir hacia los Estados Unidos en 1940 donde logró el éxito comercial. Regresó a España en 1948 donde anunció su regreso a la fe católica y desarrolló su estilo de misticismo nuclear, basado en su interés por el clasicismo, el misticismo y los avances científicos recientes.El repertorio artístico de Dalí incluía pintura, artes gráficas, cine, escultura, diseño y fotografía, en ocasiones en colaboración con otros artistas. También escribió ficción, poesía, autobiografía, ensayos y crítica. Los temas principales de su trabajo incluyen los sueños, el subconsciente, la sexualidad, la religión, la ciencia y sus relaciones personales más cercanas. Para consternación de quienes tenían su trabajo en alta estima, y ​​para irritación de sus críticos, su comportamiento público excéntrico y ostentoso a menudo atrajo más atención que su obra de arte.Su apoyo público al régimen franquista , sus actividades comerciales y la calidad y autenticidad de algunas de sus últimas obras también han sido controvertidas.Su vida y obra fueron una influencia importante en otros surrealistas, el arte pop y artistas contemporáneos como Jeff Koons y Damien Hirst .Hay dos museos importantes dedicados a la obra de Salvador Dalí: el Teatro-Museo Dalí en Figueres, España, y el Museo Salvador Dalí en San Petersburgo, Florida."
  },
  {
    "id": "5",
    "title": "Edvard Munch",
    "nationality": "Noruego",
    "year": " 12 de diciembre de 1863, 23 de enero de 1944 (80 años)",
    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRalscFG3bbXIbmQo8JsWZ0YoHoFC1ZH36TFv2RuXnDT6iP9K0VfyxgAsDS2hMRHAa_VO4&usqp=CAU",
    "pinturas": "El Grito,",
    "description": "Su infancia se vio ensombrecida por la enfermedad, el duelo y el miedo a heredar una condición mental que se contaba en la familia. Estudiando en la Royal School of Art and Design en Kristiania (actual Oslo), Munch comenzó a vivir una vida bohemia bajo la influencia del nihilista Hans Jæger , quien lo instó a pintar su propio estado emocional y psicológico ('pintura del alma'). De ahí surgió su estilo distintivo.El Grito fue concebido en Kristiania. Según Munch, estaba caminando al atardecer, cuando 'escuchó el enorme e infinito grito de la naturaleza'. El rostro agonizante de la pintura se identifica ampliamente con la angustia de la persona moderna. Entre 1893 y 1910, realizó dos versiones pintadas y dos en pastel, así como una serie de estampas. Uno de los pasteles eventualmente tendría el cuarto precio nominal más alto pagado por una pintura en una subasta.A medida que su fama y riqueza crecían, su estado emocional seguía siendo inseguro. Consideró brevemente el matrimonio, pero no pudo comprometerse. Un colapso en 1908 lo obligó a dejar de beber en exceso, y fue alentado por su creciente aceptación por parte de la gente de Kristiania y su exposición en los museos de la ciudad. Pasó sus últimos años trabajando en paz y privacidad. Aunque sus obras fueron prohibidas en la Alemania nazi, la mayoría sobrevivió a la Segunda Guerra Mundial, lo que le aseguró un legado."
  },
  {
    "id": "6",
    "title": "Johannes Vermeer",
    "nationality": "Holandés",
    "year": "Octubre de 1632,Diciembre de 1675 (42 a 43 años)",
    "url": "https://redhistoria.com/wp-content/uploads/2012/03/vermeer.jpg",
    "pinturas": "",
    "description": "Johannes Vermeer fue un holandés Barroco  pintor que se especializó en escenas interiores domésticas de la vida de la clase media. Durante su vida, fue un pintor de género provincial de éxito moderado , reconocido en Delft y La Haya.. No obstante, produjo relativamente pocas pinturas y evidentemente no era rico, dejando a su esposa e hijos endeudados a su muerte. Vermeer trabajaba despacio y con gran cuidado, y con frecuencia utilizaba pigmentos muy caros . Es particularmente conocido por su magistral tratamiento y uso de la luz en su trabajo. Casi todas sus pinturas, escribió Hans Koningsberger , aparentemente están ubicadas en dos habitaciones pequeñas en su casa en Delft; muestran los mismos muebles y decoraciones en varios arreglos y a menudo representan a las mismas personas, en su mayoría mujeres. Su modesta celebridad dio paso a la oscuridad después de su muerte. Apenas se lo menciona en el principal libro de consulta de Arnold Houbraken sobre la pintura holandesa del siglo XVII ( Gran Teatro de Pintoras y Mujeres Artistas Holandesas ) y, por lo tanto, se lo omitió en los estudios posteriores del arte holandés durante casi dos siglos. En el siglo XIX, Vermeer fue redescubierto por Gustav Friedrich Waagen y Théophile Thoré-Bürger , quienes publicaron un ensayo atribuyéndole 66 cuadros, aunque hoy en día sólo se le atribuyen 34 cuadros universalmente. Desde entonces, la reputación de Vermeer ha crecido y ahora es reconocido como uno de los más grandes pintores de la Edad de Oro holandesa..Al igual que otros grandes artistas holandeses de la Edad de Oro como Frans Hals y Rembrandt , Vermeer nunca viajó al extranjero. Además, como Rembrandt, era un ávido coleccionista y marchante de arte."
  },
  {
    "id": "7",
    "title": "Pablo Picasso",
    "nationality": "Español",
    "year": "25 de octubre de 1881 -  8 de abril de 1973 (91 años)",
    "url": "https://upload.wikimedia.org/wikipedia/commons/9/98/Pablo_picasso_1.jpg",
    "pinturas": "Viejo Guitarrista,  La mujer que llora",
    "description": "Pablo Ruiz Picasso (Málaga, 25 de octubre de 1881–Mougins, 8 de abril de 1973) fue un pintor y escultor español, creador, junto con Georges Braque, del cubismo.Es considerado desde la génesis del siglo XX como uno de los mayores pintores que participaron en los variados movimientos artísticos que se propagaron por el mundo y ejercieron una gran influencia en otros grandes artistas de su tiempo. Sus trabajos están presentes en museos y colecciones de toda Europa y del mundo. Además, abordó otros géneros como el dibujo, el grabado, la ilustración de libros, la escultura, la cerámica y el diseño de escenografía y vestuario para montajes teatrales. También tiene una breve obra literaria.En lo político, Picasso se declaraba pacifista y comunista. Fue miembro del Partido Comunista de España y del Partido Comunista Francés hasta su muerte,​ acaecida el 8 de abril de 1973 a los noventa y un años, en su casa llamada «Notre-Dame-de-Vie»3​ de la localidad francesa de Mougins. Está enterrado en el parque del castillo de Vauvenargues (Bouches-du-Rhone)."
  }
]



router.get('/', (req, res) => {
    res.json(artistas);
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
    res.status(200).send('Artista was Updated');
  }
})

router.delete('/:id', (req, res) => {
  let index = artistas.findIndex(i => i.id == req.params.id);
  if (index == -1)
    return resolve();
  else {
    artistas = artistas.filter(i => i.id != req.params.id);
    res.status(200).send('Artista was Added');
  }
})

