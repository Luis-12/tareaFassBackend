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


let museos = [
  {
    "id": "1",
    "title": "Art Institute of Chicago",
    "location": "Chicago, Illinois",
    "type": "Museo de arte",
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

