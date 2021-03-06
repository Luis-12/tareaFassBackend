// main.js
const fs = require('fs')
const express = require('express')
const serverless = require('serverless-http');


const app = express();
const router = express.Router();

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Content-Type', 'application/json');
  next();
});

let museos = [
   {
    "id": "1",
    "title": "Art Institute of Chicago",
    "location": "Chicago, Illinois",
    "type": "Museo de arte",
    "url":"https://masdearte.com/media/g_TheArtInstituteOfChicago.jpg",
    "description": "El Instituto de Arte de Chicago es un museo y escuela de arte situado en la avenida Míchigan junto al Grant Park, enfrente del lago Míchigan en Chicago. Es uno de los museos de arte más importantes del mundo y seguramente se encuentre entre los tres principales de Estados Unidos, junto con el Metropolitan Museum de Nueva York y el Museo de Bellas Artes de Boston y cuenta con una de las colecciones permanentes más importantes de cuadros del Impresionismo y Posimpresionismo del mundo.Se fundó en 1879 y fue George Armour su primer presidente. En 1893 el museo se trasladó a un edificio de estilo renacentista diseñado por el estudio de arquitectura de Shepley, Rutan y Coolidge, de Boston. El edificio había sido construido para la Exposición Mundial Colombina, celebrada ese mismo año. La colección del museo se debe en una parte a las donaciones realizadas por gente adinerada como regalo a la ciudad de Chicago. Las colecciones más significativas son las de pintura italiana, flamenca, holandesa y española. Algunos pintores famosos representados son El Greco, José de Ribera, Rembrandt y Frans Hals.",
    "pinturas": [
      {
        "pintura_id": "1",
        "title": "El viejo guitarrista ciego"
      }
    ]
  },
  {
    "id": "2",
    "title": "Tate Modern",
    "location": "Londres",
    "type": "Museo de arte",
    "url":"https://arquitecturaviva.com/assets/uploads/obras/40724/av_imagen.jpg",
    "description": "Tate Modern es el nombre por el que se conoce el Museo Nacional Británico de Arte Moderno. Se encuentra en el centro de Londres y forma parte del grupo de museos Tate junto con Tate Britain, Tate Liverpool y Tate St Ives, estos dos últimos situados fuera de Londres.Está alojado en la antigua central de energía de Bankside, originalmente diseñada por sir Giles Gilbert Scott y construida en dos fases entre 1947 y 1963. La central eléctrica fue cerrada en 1981 y el edificio fue reconvertido en museo por los arquitectos suizos Herzog & de Meuron, quienes tras resultar vencedores en un concurso internacional dieron al edificio su imagen actual.Desde su apertura el 12 de mayo de 2000 se ha convertido en la segunda mayor atracción de Londres.​ En 2007 fue el museo de arte moderno más visitado del mundo y el tercero en general, tras el Museo del Louvre de París y el Museo Británico también de Londres, con 5.2 millones de visitantes. La entrada es gratuita para la exhibición permanente, mientras que las exposiciones temporales son gratuitas o de pago en función de su carácter.La construcción de Tate Modern ha supuesto un impulso al desarrollo económico y cultural del área de Southwark en la que se sitúa. Ha sido considerado un ejemplo para futuros proyectos, como una forma de desarrollar zonas degradadas de la ciudad y convertirlas en nuevos focos dinámicos de crecimiento y de desarrollo económico.",
    "pinturas": [
      {
        "pintura_id": "2",
        "title": "La mujer que llora"
      }
    ]
  },
  {
    "id": "3",
    "title": "Museo de arte Moderno de Nueva York",
    "location": "Estados Unidos",
    "type": "Museo de arte",
    "url":"https://guias-viajar.com/estados-unidos/wp-content/uploads/2014/02/MOMA-Nueva-York-@Timothy-Hursley-004-2-600x331.jpg",
    "description": "El Museum of Modern Art, más conocido por su acrónimo MoMA, es un museo de arte situado en el Midtown de Manhattan (Nueva York), en la 11 West con la calle 53 y entre la Quinta y la Sexta Avenida. Entre sus obras destacan piezas como La noche estrellada de Van Gogh, Broadway Boogie-Woogie de Piet Mondrian, Las señoritas de Avignon (1907) de Pablo Picasso,​ La persistencia de la memoria de Salvador Dalí y obras de artistas estadounidenses como Jackson Pollock, Andy Warhol y Edward Hopper.Aunque su envergadura y proyección internacional llevan a pensar que el MoMA es un museo público, realmente es una entidad privada; si bien sin ánimo de lucro. Fue fundado por las filántropas estadounidenses Lillie P. Bliss, Mary Quinn Sullivan y Abby Aldrich Rockefeller,,para «ayudar a la gente a entender, utilizar y disfrutar de las artes visuales de nuestro tiempo». Abrió sus puertas al público el 7 de noviembre de 1929. El museo es uno de los más grandes del país. En octubre de 2019 el museo, tras unos meses de cierre, abrió de nuevo sus puertas añadiendo nuevas salas y ampliando las ya existentes.",
    "pinturas": [
      {
        "pintura_id": "3",
        "title": "La noche estrellada"
      },
      {
        "pintura_id": "7",
        "title": "La persistencia de la memoria"
      }
    ]
  },
  {
    "id": "4",
    "title": "Musée d'Orsay",
    "location": "Francia",
    "type": "Museo de arte",
    "url":"https://upload.wikimedia.org/wikipedia/commons/d/de/Le_mus%C3%A9e_dOrsay_%28Paris%29_%284725795882%29.jpg",
    "description": " El Museo de Orsay (en francés, Musée d'Orsay) es una pinacoteca ubicada en París (Francia) dedicada a las artes plásticas del siglo XIX y, más en concreto, del periodo 1848-1914. Ocupa el antiguo edificio de la estación ferroviaria de Orsay y alberga la mayor colección de obras impresionistas del mundo, con obras maestras de la pintura y de la escultura como Almuerzo sobre la hierba y Olympia de Édouard Manet, una prueba de la estatua La pequeña bailarina de catorce años de Degas, Baile en el Moulin de la Galette de Renoir, varias obras esenciales de Courbet (El origen del mundo, Entierro en Ornans, El taller del pintor) e incluso cinco cuadros de la Serie des Catedrales de Rouen de Monet. Cronológicamente, este museo cubre la historia del arte entre los maestros antiguos (que están en el Museo del Louvre) y el arte moderno y contemporáneo (en el Centro Georges Pompidou).",
    "pinturas": [
      {
        "pintura_id": "4",
        "title": "Autorretrato (Van Gogh; 1889)"
      }
    ]
  },
  {
    "id": "5",
    "title": "Museo del Louvre",
    "location": "Francia",
    "type": "Museo de arte",
    "url":"https://cnnespanol.cnn.com/wp-content/uploads/2021/03/Museo-louvre-france-november-2020.jpg?quality=100&strip=info",
    "description": "El Museo del Louvre (en francés Musée du Louvre /myze dy luvʁ/ ( escuchar)) es el museo nacional de Francia consagrado tanto a las bellas artes como a la arqueología y las artes decorativas anteriores al Impresionismo. Está ubicado en París, la capital del país, en el antiguo palacio real del Louvre. Sus extensas colecciones son el resultado del coleccionismo desarrollado por la monarquía francesa a lo largo de varios siglos, al que se sumó el esfuerzo de varias personalidades de La Ilustración, la labor desamortizadora de la Revolución francesa, las victorias militares durante las guerras napoleónicas, y las campañas arqueológicas y compras impulsadas durante el siglo xix. En sus 210 000 m² se exponen unas 487 000 obras, de las cuales 7000 son pinturas, y unos 380.000 objetos y antigüedades.La apertura del Louvre en 1793 significó, dentro de la historia de los museos, el traspaso de las colecciones privadas de las clases dirigentes (monarquía, aristocracia e Iglesia) a galerías de propiedad pública para disfrute del conjunto de la sociedad. Ello lo convirtió en precedente y modelo para varios museos.En sus modificaciones arquitectónicas y decorativas han intervenido múltiples artistas a lo largo de varios siglos, desde Claude Perrault y los pintores Simon Vouet y Charles Le Brun en el XVII hasta Delacroix y Georges Braque, quienes pintaron algunos de sus techos.El Louvre es el museo de arte más visitado del mundo,​ famoso por sus obras maestras, especialmente la pintura renacentista conocida como La Gioconda de Leonardo da Vinci.​ Otras piezas destacadas fueron seleccionadas en 2020 por el propio museo bajo el título «24 obras imprescindibles». La lista comprende, además de la ya citada pintura, obras como el Código de Hammurabi, El escriba sentado, La consagración de Napoleón, La coronación de la Virgen, La Libertad guiando al pueblo, entre otros.De acuerdo a una ordenación cronológica de las colecciones nacionales, el Louvre muestra obras de arte anteriores a 1848. Casi todas las obras del siglo xix avanzado, desde el realismo (Courbet) hasta el impresionismo y Toulouse-Lautrec, fueron transferidas al Museo de Orsay, y el arte moderno y contemporáneo se exhibe en el Centro Pompidou. Adicionalmente, la institución promueve dos subsedes, en Lens (Francia) y en Abu Dabi (Emiratos Árabes Unidos).",
    "pinturas": [
      {
        "pintura_id": "5",
        "title": "Mona Lisa"
      }
    ]
  },
  {
    "id": "6",
    "title": "Santa Maria delle Grazie",
    "location": "Italia",
    "type": "Museo de arte",
    "url":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/3048_-_Milano_-_S._Maria_delle_Grazie_-_Facciata_-_Foto_Giovanni_Dall%27Orto_-_6-Mar-2008.jpg/1200px-3048_-_Milano_-_S._Maria_delle_Grazie_-_Facciata_-_Foto_Giovanni_Dall%27Orto_-_6-Mar-2008.jpg",
    "description": " Santa Maria delle Grazie (Santa María de las Gracias) es una iglesia y convento de la Orden de Predicadores en Milán, Italia. El refectorio del convento está decorado con la célebre pintura mural La última cena, obra maestra de Leonardo da Vinci.",
    "pinturas": [
      {
        "pintura_id": "6",
        "title": "La última cena"
      }
    ]
  },
  {
    "id": "7",
    "title": "Galería de arte y Museo Kelvingrove",
    "location": "Argyle Street , en el West End de la ciudad, a orillas del río Kelvin",
    "type": "Museo de Arte y Galería",
    "url":"idata:image/jpeg;base64,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",
    "description": "Kelvingrove Art Gallery and Museum es un museo y galería de arte en Glasgow , Escocia. Reabrió en 2006 después de una remodelación de tres años y desde entonces ha sido una de las atracciones turísticas más populares de Escocia. El museo tiene 22 galerías que albergan una variedad de exhibiciones, que incluyen arte renacentista, taxidermia y artefactos del antiguo Egipto.",
    "pinturas": [
      {
        "pintura_id": "7",
        "title": "Cristo de San Juan de la Cruz"
      }
    ]
  },
  {
    "id": "8",
    "title": "Galería Nacional de Noruega",
    "location": "Oslo, Noruega",
    "type": "Museo de Arte",
    "url":"https://i1.wp.com/www.hisour.com/wp-content/uploads/2019/11/National-Gallery-of-Norway-Oslo-Norway.jpg?fit=960%2C640&ssl=1",
    "description": "La Galería Nacional de Noruega es una pinacoteca localizada en Oslo, Noruega. Desde 2003, forma parte del Museo Nacional de Arte, Arquitectura y Diseño. Es conocida internacionalmente por su colección de pinturas del artista noruego Edvard Munch.Creado en 1842, el museo estuvo ubicado en el Palacio Real de Oslo hasta 1882, cuando se trasladó a su localización actual, un sencillo edificio de ladrillo de estilo historicista, situado en el centro de la ciudad, diseñado por Heinrich Ernst y Adolf Schirmer.1​La colección abarca prácticamente todas las épocas de la Historia del arte, desde el Antiguo Egipto hasta el siglo XXI. Aunque su interés principal se centra en la pintura, también se exhiben muebles, tapices, esculturas, dibujos y grabados. Destaca la presencia de artistas del norte de Europa, cercanos al ámbito geográfico noruego, sobre todo pintores alemanes, holandeses y daneses; así como la amplitud y calidad de sus colecciones pertenecientes a las vanguardias históricas.El discurso expositivo del Museo arranca con esculturas y relieves egipcios, griegos y romanos; la Edad Media se presenta con una selección de iconos rusos de variada datación. Ya en Renacimiento y Barroco, destaca el conjunto de obras de Lucas Cranach el Viejo (La Edad de Oro, El martirio de san Sebastián) así como ejemplos de El Greco, Joos van Cleve, Van Dyck, Frans Snyders, José de Ribera, Jan van Goyen, Ferdinand Bol o Salomon van Ruysdael. El siglo XIX se inaugura con el paisajismo nórdico de pintores, como el noruego Johan Christian Dahl, presente con una extenso conjunto de obras, o Caspar David Friedrich, continuando con Eugene Delacroix, Goya (Escena de la Inquisición, Retrato de un picador) y Courbet; hasta llegar al Impresionismo y Postimpresionismo, representados con importantes obras de Edouard Manet (Vista de la Exposición Universal de 1867), Monet, Renoir, Cézanne o van Gogh (Autorretrato de 1889), así como un conjunto de esculturas de Edgar Degas.Mención aparte merece el capítulo que se dedica al artista noruego más destacado, Edvard Munch. Está considerada la colección más importante de obras del artista, junto al Museo Munch en la misma ciudad. Se exponen desde retratos adscritos a su pintura más convencional hasta los más conocidos de toda su producción, como La danza de la vida, Madonna o El grito. También se exhiben algunos de sus grabados, fotografías y escritos.El panorama se completa con una sólida presencia del arte del siglo XX y actual, donde destacan Picasso, Matisse o Braque, así como artistas noruegos escasamente conocidos fuera de su país, como Harald Sohlberg o Arne Ekeland.",
    "pinturas": [
      {
        "pintura_id": "8",
        "title": "El Grito"
      }
    ]
  },
  {
    "id": "9",
    "title": "Museo Munch",
    "location": "Tøyen, en el barrio de Gamle Oslo. Noruega",
    "type": "Museo de Arte",
    "url":"https://i.blogs.es/c13671/captura-de-pantalla-2019-12-23-a-las-13.22.19/1366_2000.jpg",
    "description": "Munch Museum es un museo de arte en Oslo , Noruega , dedicado a la vida y obra del artista noruego Edvard Munch .A partir del verano de 2021, 28000 piezas de arte se trasladaron del museo de Tøyen al museo de Bjørvika , Oslo.La última exposición del museo en Tøyen, Oslo, se inauguró en mayo de 2021 y está programada para durar hasta el 1 de octubre.",
    "pinturas": [
      {
        "pintura_id": "9",
        "title": "Ansiedad"
      }
    ]
  },
  {
    "id": "10",
    "title": "Museo Mauritshuis",
    "location": "Plein 29 La Haya , Países Bajos",
    "type": "Museo de Arte",
    "url":"data:image/jpeg;base64,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",
    "description": "El Mauritshuis es un museo de arte en La Haya , Países Bajos . El museo alberga el Gabinete Real de Pinturas, que consta de 854 objetos, en su mayoría pinturas holandesas del Siglo de Oro . La colección contiene obras de Johannes Vermeer , Rembrandt van Rijn , Jan Steen , Paulus Potter , Frans Hals , Jacob van Ruisdael , Hans Holbein the Younger y otros. Originalmente, el edificio del siglo XVII fue la residencia del conde Juan Mauricio de Nassau . Ahora es propiedad del gobierno de los Países Bajos y figura entre los 100 principales sitios patrimoniales holandeses.",
    "pinturas": [
      {
        "pintura_id": "10",
        "title": "Chica con un pendiente de perla"
      }
    ]
  },
  {
    "id": "11",
    "title": "Museo Rijksmuseum ",
    "location": "Museumstraat Ámsterdam , Países Bajos.",
    "type": "Museo Nacional, Museo de Arte y Museo de Historia.",
    "url":"https://www.bautrip.com/images/what-to-visit/rijksmuseum-museo-nacional-holanda-amsterdam.jpg",
    "description": "El Rijksmuseum es un museo nacional holandés  dedicado a las artes y la historia en Ámsterdam . El museo está ubicado en la Plaza de los Museos en el distrito de Ámsterdam Sur , cerca del Museo Van Gogh , el Museo Stedelijk de Ámsterdam y el Concertgebouw .El Rijksmuseum se fundó en La Haya el 19 de noviembre de 1798 y se trasladó a Ámsterdam en 1808, donde se ubicó primero en el Palacio Real y más tarde en el Trippenhuis . El actual edificio principal fue diseñado por Pierre Cuypers y abrió por primera vez en 1885. El 13 de abril de 2013, después de una renovación de diez años que costó € 375 millones, el edificio principal fue reabierto por la reina Beatriz . En 2013 y 2014, fue el museo más visitado de los Países Bajos con cifras récord de 2,2 millones y 2,47 millones de visitantes. También es el museo de arte más grande del país.El museo tiene en exhibición 8.000 objetos de arte e historia , de su colección total de 1 millón de objetos de los años 1200-2000, entre los que se encuentran algunas obras maestras de Rembrandt , Frans Hals y Johannes Vermeer . El museo también tiene una pequeña colección asiática , que se exhibe en el pabellón asiático.",
    "pinturas": [
      {
        "pintura_id": "11",
        "title": "La Lechera"
      }
    ]
  }
]


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
    res.status(200).send('Museo was updated');
  }
})

router.delete('/:id', (req, res) => {
  let index = museos.findIndex(i => i.id == req.params.id);
  if (index == -1)
    return resolve();
  else {
    museos = museos.filter(i => i.id != req.params.id);
  }
})

app.use(express.json());
app.use(router);
app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);

