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


let pinturas = [
  {
    "id": "7",
    "title": "La persistencia de la memoria",
    "size": "24cm x 33cm (9,5 pulgadas x 13 pulgadas)",
    "age": "1931",
    "description": "La persistencia de la memoria (catalán: La persistència de la memòria ) es una pintura de 1931 del artista Salvador Dalí y una de las obras más reconocibles del surrealismo . Mostrada por primera vez en la Galería Julien Levy en 1932, desde 1934 la pintura forma parte de la colección del Museo de Arte Moderno (MoMA) de la ciudad de Nueva York , que la recibió de un donante anónimo. Es ampliamente reconocido y frecuentemente mencionado en la cultura popular, y algunas veces se le conoce con títulos más descriptivos, como 'Relojes que se derriten' o 'Los relojes blandos'.La conocida pieza surrealista introdujo la urln del reloj de bolsillo de fusión suave . Representa la teoría de Dalí de la 'suavidad' y la 'dureza', que era fundamental para su pensamiento en ese momento. Como escribió Dawn Adès , 'Los relojes blandos son un símbolo inconsciente de la relatividad del espacio y el tiempo, una meditación surrealista sobre el colapso de nuestras nociones de un orden cósmico fijo'. Esta interpretación sugiere que Dalí estaba incorporando una comprensión del mundo introducida por la teoría de la relatividad especial de Albert Einstein . Pregunta de Ilya Prigogine Si este era realmente el caso, Dalí respondió que los relojes blandos no se inspiraron en la teoría de la relatividad, sino en la percepción surrealista de un Camembert derritiéndose al sol.Es posible reconocer una figura humana en medio de la composición, en el extraño 'monstruo' (con mucha textura cerca de su rostro, y mucho contraste y tono en la urln) que Dalí usó en varias piezas contemporáneas para representarse a sí mismo - el forma abstracta que se convierte en una especie de autorretrato, reapareciendo con frecuencia en su obra. La criatura parece estar basada en una figura del paraíso sección de Hieronymus Bosch 's El jardín de las delicias , que Dalí había estudiado.Se puede leer como una criatura 'que se desvanece', una que a menudo aparece en sueños donde el soñador no puede precisar la forma y composición exacta de la criatura. Se puede observar que la criatura tiene un ojo cerrado con varias pestañas, lo que sugiere que la criatura también está en un estado de sueño. La iconografía puede referirse a un sueño que el propio Dalí había experimentado, y los relojes pueden simbolizar el paso del tiempo según se experimenta en el sueño o la persistencia del tiempo en los ojos del soñador.El reloj naranja en la parte inferior izquierda de la pintura está cubierto de hormigas. Dalí usó a menudo hormigas en sus pinturas como símbolo de decadencia.Otro insecto que está presente en la pintura es una mosca, que se sienta en el reloj que está al lado del reloj naranja. La mosca parece estar proyectando una sombra humana cuando el sol la golpea. La persistencia de la memoria emplea 'la exactitud de las técnicas de pintura realista' para representar imágenes con mayor probabilidad de encontrarse en los sueños que en la conciencia de vigilia.Las escarpadas rocas de la derecha representan una punta de la península del Cap de Creus en el noreste de Cataluña . Muchas de las pinturas de Dalí se inspiraron en los paisajes de su vida en Cataluña. La sombra extraña y premonitoria en el primer plano de esta pintura es una referencia al monte Pani.",
    "autores": [
      {
        "autor_id": "4",
        "title": "Salvador Dalí"
      }
    ]
    ,
    "museos": [
      {
        "museo_id": "3",
        "title": "Museo de Arte Moderno, New York"
      }
    ]
  },
  {
    "id": "10",
    "title": "Ansiedad",
    "size": "94cm x 74 cm (37 pulgadas x 29,1 pulgadas)",
    "age": "1894",
    "description": "Esta pintura se basa en dos salidas anteriores: la humanidad ansiosa que avanza como impulsada por fuerzas elementales siniestras, como se concibió por primera vez en la noche en la calle Karl Johan ; y una determinada vista del fiordo de Oslo, ya vista en The Scream . Ambos estaban destinados a repetirse con considerable fidelidad en Ansiedad y en otras obras de la misma época.La angustia noruega, como su contraparte alemana, se había convertido en el término clave no solo para el contenido pictórico central de Munch, sino para toda la tradición que se remonta a las filosofías de Kierkegaard y Nietzsche, las obras de Strindberg e Ibsen y la contribución estética moderna del norte de Europa en general.En Ansiedad, Munch repite de cerca muchos elementos de El grito. El mismo embarcadero que acomodaba a un solo personaje alienado vuelve a aparecer, al igual que el lago en la distancia, los dos barcos, la iglesia y otras estructuras que bordean la orilla un poco menos tenue que antes. Todos se citan del trabajo anterior, al igual que los tonos sombríos y los intensos remolinos de líneas que se agrandan concéntricamente que definen y, en última instancia, abrazan la tierra, el mar y el cielo.Sin embargo, si The Scream trata del horror experimentado en total aislamiento por un solo ser, Anxiety juega con la desesperación colectiva. El sentimiento de angustia en esta obra es aún más sostenido, aunque menos penetrante, que en El Grito , ya que aquí su desesperación es soportada por un grupo y no por un individuo aislado.Munch regresó a Anxiety dos años después para reafirmar el mismo motivo a través de los medios impresos. Esta vez añadió el grabado en madera a la litografía y permitió que los rasgos blancos que se veían en el método sustractivo contrastaran con el fondo expresivo de un papel de color rojo. Como se ha observado en El grito, las limitaciones inherentes a la técnica gráfica -su reducción de la propiedad lineal y la eliminación del color descriptivo en la xilografía- enfatizan la concepción abstracta y realzan la contundencia emotiva del contenido pictórico. Las pocas pero significativas modificaciones y sustituciones de personajes que el artista se sintió obligado a emprender en las transformaciones de la pintura a los grabados, así como las sutiles diferencias entre los grabados en madera y las litografías, proporcionan información valiosa sobre la reacción creativa de Munch.",
    "autores": [
      {
        "autor_id": "5",
        "title": "Edvard Munch"
      }
    ]
    ,
    "museos": [
      {
        "museo_id": "9",
        "title": "Museo Munch"
      }
    ]
  },
  {
    "id": "4",
    "title": "Autorretrato",
    "size": "65 cm x 54 cm",
    "age": "1889",
    "description": "Este autorretrato es uno de los aproximadamente 40 que van Gogh produjo en un periodo de 10 años, y estos eran una parte importante de su trabajo como pintor; se pintaba a sí mismo porque a menudo carecía del dinero para pagar a modelos. Se llevó la pintura con él a Auvers-sur-Oise, cerca de París, donde la mostró al doctor Paul Gachet, que pensó que era 'absolutamente fanático'Los historiadores del arte están divididos en cuanto a si esta pintura o el autorretrato sin barba son el autorretrato final de Van Gogh. Ingo F Walther y Jan Hulsker consideran este el último, con Hulsker considerando que fue pintado en Arlés tras el ingreso al hospital después de mutilar su oreja, mientras Ronald Pickvance piensa que el autorretrato sin barba es posterior.Van Gogh envió el cuadro a su hermano más joven, el marchante de arte Theo; en la carta que lo acompañaba escribió: 'necesitarás estudiar [el cuadro] por un tiempo. Espero que notes que mis expresiones faciales se han vuelto mucho más tranquilas, aunque mis ojos tienen la misma mirada insegura que antes, o eso me parece a mí.'Los historiadores del arte Walther y Metzger consideran que 'la pintura no muestra una pose bonita ni es un registro realista;... [es de] alguien que ha visto demasiado peligro, demasiada confusión, como para poder mantener su agitación y temblor bajo control. “Según Beckett los colores se disuelven y los patrones turbulentos a un tiempo indican una sensación de tensión y presión, que simboliza el estado mental del artista, bajo presión mental, física y laboral.El Museo de Orsay en París, que obtuvo el cuadro en 1986, considera que 'la inmovilidad del modelo contrasta con la ondulación del cabello y barba, repetidos y amplificados en los arabescos alucinantes del fondo'.",
    "autores": [
      {
        "autor_id": "2",
        "title": "Van Gogh"
      }
    ]
    ,
    "museos": [
      {
        "museo_id": "9",
        "title": "Musée d'Orsay"
      }
    ]
  },
  {
    "id": "11",
    "title": "Chica con un pendiente de perla",
    "size": "44,5 cm × 39 cm (17,5 pulgadas × 15 pulgadas)",
    "age": "c. 1665",
    "description": "Chica con un pendiente de la perla  es una pintura al óleo de la Edad de Oro holandesa del pintor Johannes Vermeer , con fecha de c. 1665. Con varios nombres a lo largo de los siglos, se conoció por su título actual hacia finales del siglo XX por el pendiente que lució la niña retratada allí. La obra ha estado en la colección de Mauritshuis en La Haya desde 1902 y ha sido objeto de diversos tratamientos literarios y cinematográficos.a pintura es un tronie , la descripción holandesa del siglo XVII de una 'cabeza' que no estaba destinada a ser un retrato. Representa a una niña europea con un vestido exótico, un turbante oriental y lo que se pensaba que era una perla muy grande como pendiente . En 2014, el astrofísico holandés Vincent Icke planteó dudas sobre el material del pendiente y argumentó que se parece más al estaño pulido que a la perla debido al reflejo especular, la forma de pera y el gran tamaño del pendiente.La obra es al óleo sobre lienzo y mide 44,5 cm (17,5 pulgadas) de alto y 39 cm (15 pulgadas) de ancho. Está firmado 'IVMeer' pero sin fecha. Se estima que fue pintado alrededor de 1665.Después de la restauración más reciente de la pintura en 1994, el esquema de color sutil y la intimidad de la mirada de la niña hacia el espectador se han mejorado enormemente. Durante la restauración, se descubrió que el fondo oscuro, hoy algo moteado, era originalmente de un verde intenso parecido al esmalte . Este efecto se produjo aplicando una fina capa transparente de pintura, un esmalte, sobre el fondo negro que se ve ahora. Sin embargo, los dos pigmentos orgánicos del esmalte verde, índigo y soldadura , se han desvanecido.",
    "autores": [
      {
        "autor_id": "6",
        "title": "Johannes Vermeer"
      }
    ]
    ,
    "museos": [
      {
        "museo_id": "10",
        "title": "Mauritshuis"
      }
    ]
  },
  {
    "id": "9",
    "title": "El Grito",
    "size": "91 cm × 74 cm",
    "age": "1893",
    "description": "El grito es el título de cuatro cuadros del noruego Edvard Munch (1863-1944). La versión más famosa se encuentra en la Galería Nacional de Noruega y fue completada en 1893.Otras dos versiones del cuadro se encuentran en el Museo Munch, también en Oslo, mientras que la cuarta versión pertenece a una colección particular. En 1895, Munch realizó también una litografía con el mismo títuloEn los últimos años, la obra, en dos versiones diferentes, ha sido objeto de robos de gran repercusión mediática. La versión más conocida, la de la Galería Nacional, fue robada en febrero de 1994, y fue recuperada en una acción policial doce semanas más tarde. En agosto de 2004 se produjo el robo de una de las versiones expuestas en el Museo Munch. Dos años después, el 31 de agosto de 2006 la policía noruega anunció la recuperación de la pintura, en buen estado.La versión que llevaba 70 años en manos del noruego Petter Olsen, cuyo padre había sido vecino, amigo y luego mecenas de Munch, fue subastada el 2 de mayo de 2012 por 119,9 millones de dólares, en la casa Sotheby's de Nueva York, convirtiéndose así en la obra más cara vendida en una subasta.Todas las versiones del cuadro muestran una figura andrógina en primer plano, que simboliza a un hombre moderno en un momento de profunda angustia y desesperación existencial. El paisaje del fondo es Oslo visto desde la colina de Ekeberg. El grito está considerado como una de las más importantes obras del artista y del movimiento expresionista, constituyendo una urln de icono cultural, semejante al de la Gioconda de Leonardo da Vinci.El cuadro es abundante en colores cálidos de fondo, luz semioscura y la figura principal es una persona en un sendero con vallas que se pierde de vista fuera de la escena. Esta figura está gritando, con una expresión de desesperación. En el fondo, casi fuera de escena, se aprecian dos figuras con sombrero que no se pueden distinguir con claridad. El cielo parece fluido y arremolinado, igual que el resto del fondo.",
    "autores": [
      {
        "autor_id": "5",
        "title": "Edvard Munch"
      }
    ]
    ,
    "museos": [
      {
        "museo_id": "8",
        "title": "Galería Nacional de Noruega"
      }
    ]
  },
  {
    "id": "12",
    "title": "La Lechera",
    "size": "C. 1657-1658 (aunque las estimaciones difieren)",
    "age": "44,5 cm × 41 cm ",
    "description": "The Milkmaid a veces llamada The Kitchen Maid , es una pintura al óleo sobre lienzo de una lechera, de hecho, una criada doméstica , del artista holandés Johannes Vermeer . Ahora se encuentra en el Rijksmuseum de Ámsterdam , Países Bajos, que lo considera sin duda una de las mejores atracciones del museo. Se desconoce el año exacto de finalización de la pintura, y las estimaciones varían según la fuente. El Rijksmuseum lo estima alrededor de 1658. Según el Museo Metropolitano de Arte de la ciudad de Nueva York, fue pintado alrededor de 1657 o 1658. El sitio web Essential Vermeer ofrece una gama más amplia de 1658-1661.La pintura muestra a una lechera, una mujer que ordeña vacas y elabora productos lácteos como mantequilla y queso, en una habitación sencilla vertiendo leche con cuidado en un recipiente de barro bajo sobre una mesa. Las lecheras comenzaron a trabajar únicamente en los establos antes de que las casas grandes las contrataran para hacer las tareas domésticas también en lugar de contratar más personal. También en la mesa frente a la lechera hay varios tipos de pan. Es una mujer joven y robusta que lleva una gorra de lino impecable, un delantal azul y mangas de trabajo levantadas desde los antebrazos gruesos. Un calentador de pies está en el piso detrás de ella, cerca de los azulejos de la pared de Delft que representan a Cupido (a la izquierda del espectador) y una figura con un poste (a la derecha). Flujos de luz intensa desde la ventana en el lado izquierdo del lienzo.La pintura es sorprendentemente ilusionista , y transmite no sólo detalles, sino una sensación del peso de la mujer y la mesa. La luz, aunque brillante, no borra la textura áspera de las cortezas del pan ni aplana los volúmenes de la cintura gruesa y los hombros redondeados de la criada, escribió Karen Rosenberg, crítica de arte de The New York Times . Sin embargo, con la mitad del rostro de la mujer en la sombra, es imposible saber si sus ojos bajos y sus labios fruncidos expresan nostalgia o concentración, escribió. Es un pequeño efecto de Mona Lisa  en las reacciones de los espectadores modernos a la pintura, según Walter Liedtke , curador del departamento de pintura europea en el Museo Metropolitano de Arte y organizador de dos exhibiciones de Vermeer.",
    "autores": [
      {
        "autor_id": "6",
        "title": "Johannes Vermeer"
      }
    ]
    ,
    "museos": [
      {
        "museo_id": "11",
        "title": "Rijksmuseum"
      }
    ]
  },

  {
    "id": "5",
    "title": "Mona Lisa",
    "size": "77 cm x 53 cm",
    "age": "1503",
    "description": " El Retrato de Lisa Gherardini, esposa de Francesco del Giocondo, más conocido como La Gioconda (La Joconde en francés) o La Mona Lisa, es una obra pictórica del polímata renacentista italiano Leonardo da Vinci. Fue adquirida por el rey Francisco I de Francia a comienzos del siglo XVI y desde entonces es propiedad del Estado francés. Se halla expuesta en el Museo del Louvre de París, siendo, sin duda, la «joya» de sus colecciones.Su nombre, La Gioconda (la alegre, en castellano), deriva de la tesis más aceptada acerca de la identidad de la modelo: la esposa de Francesco Bartolomeo de Giocondo, que realmente se llamaba Lisa Gherardini, de donde viene su otro nombre: Mona (señora, en el italiano antiguo) Lisa. El Museo del Louvre acepta el título completo indicado al principio como el título original de la obra, aunque no reconoce la identidad de la modelo y tan solo la acepta como una hipótesis.​Es un óleo sobre tabla de álamo de 77 × 53 cm, pintado entre 1503 y 1519,​ y retocado varias veces por el autor. Se considera el ejemplo más logrado de sfumato, técnica muy característica de Leonardo, si bien actualmente su colorido original es menos perceptible por el oscurecimiento de los barnices. El cuadro está protegido por múltiples sistemas de seguridad y ambientado a temperatura estable para su preservación óptima. Es revisado constantemente para verificar y prevenir su deterioro.",
    "autores": [
      {
        "autor_id": "3",
        "title": "Leonardo da Vinci"
      }
    ]
    ,
    "museos": [
      {
        "museo_id": "5",
        "title": "Museo del Louvre"
      }
    ]
  },

  {
    "id": "2",
    "title": "La mujer que llora",
    "size": "60 cm x 49 cm",
    "age": "26 de octubre de 1937",
    "description": "La mujer que llora es un retrato abstracto de una mujer afligida. Es una pintura al óleo sobre lienzo que mide 61 x 50 cm y está firmada 'Picasso 37' cerca del centro en el borde derecho. Es una de una serie de obras de arte basadas en el tema de una mujer llorando, que Picasso creó mientras producía Guernica . La composición de esta pintura está muy estilizada. Picasso usó colores brillantes y líneas atrevidas para transmitir la figura en una compleja serie de formas angulares y planos. A pesar de su carácter abstracto, la modelo de este retrato se puede identificar como Dora Maar, la amante de Picasso .Roland Penrose comentó sobre el uso del color en la pintura en su biografía de Picasso: El resultado de usar el color de una manera tan totalmente desvinculada del dolor, para un rostro en el que el dolor es evidente en cada línea, es muy desconcertante. Como si la tragedia había llegado sin previo aviso .El rostro de la mujer que llora se remonta directamente a las figuras torturadas representadas en Guernica . En particular, la mujer que llora continúa el tema del duelo que se puede ver en la urln de la mujer que grita con un bebé muerto en Guernica . Picasso creó varias versiones del rostro de la mujer a lo largo de su serie de pinturas, con la mujer representada en lágrimas interminables y, a veces, retorcida más allá del reconocimiento.La mujer que llora ha sido descrita como la más compleja, fragmentada y coloreada de todas las obras de arte de mujeres que lloran. Además de la confusa masa de manos, boca, dientes, pañuelo y lágrimas en el centro del cuadro, Picasso también representó los ojos con gran atención analítica. La Tate llama especialmente la atención sobre la interpretación infantil pero sorprendente de los ojos, que se han representado como barcos o platillos desbordados y se han colocado en los picos del pañuelo para proporcionar una exploración intensa de la angustia física y emocional. Este elemento se expresó en obras anteriores que Picasso realizó en el mismo año, que fue más intenso entre el 12 y el 18 de octubre de 1937. Las pinturas anteriores también presentaban el símbolo del pañuelo dentro de la composición.",
    "autores": [
      {
        "autor_id": "1",
        "title": "Pablo Picasso"
      }
    ]
    ,
    "museos": [
      {
        "museo_id": "2",
        "title": "Tate Modern"
      }
    ]
  },

  {
    "id": "3",
    "title": "La noche estrellada",
    "size": "74 cm x 92 cm",
    "age": "1889",
    "description": "La noche estrellada es un óleo sobre lienzo del pintor postimpresionista neerlandés Vincent van Gogh . Pintado en junio de 1889, representa la vista desde la ventana orientada al este de su habitación de asilo en Saint-Rémy-de-Provence, justo antes del amanecer, con la adición de un pueblo imaginario. Ha estado en la colección permanente del Museo de Arte Moderno de la ciudad de Nueva York desde 1941, adquirida a través de Lillie P. Bliss Bequest . Ampliamente considerada como la obra maestra de Van Gogh, La noche estrellada es una de las pinturas más reconocidas en la historia de la cultura occidental",
    "autores": [
      {
        "autor_id": "2",
        "title": "Vincent van Gogh"
      }
    ]
    ,
    "museos": [
      {
        "museo_id": "3",
        "title": "Museo de arte Moderno de Nueva York"
      }
    ]
  },
  
  {
    "id": "1",
    "title": "El viejo guitarrista ciego",
    "size": "1.23 m x 83 cm",
    "age": "1903–1904",
    "description": " Este cuadro muestra la urln lánguida de un mendigo tocando la guitarra, en el que predominan los característicos tonos azules del llamado Período azul de Picasso. Mediante el uso de estas tonalidades frías (incluso en el color de la piel), acentúa la tristeza del anciano. A pesar de esto, mantiene la guitarra de un color marrón, como muestra de esperanza para el mendigo, ya que se trata de su único medio de subsistencia.Además se trata de un elemento de contraste en el cuadro ya que las líneas curvas de la guitarra se diferencian mucho del cuerpo delgado y anguloso del viejo. Son estas características alargadas las que recuerdan al manierismo, en concreto al estilo de El Greco.El viejo guitarrista ciego, fue realizado durante el Período azul de Picasso, que abarca desde el suicidio del amigo del pintor, Carlos Casagemas en 1901, hasta su establecimiento en París en 1904, que da origen al período Rosa de Picasso. Durante esta época, Picasso vivía en Barcelona, y se dedicaba a reflejar en sus cuadros la pobreza (que el mismo había experimentado hasta 1902), el aislamiento y el pesimismo con la que se sentía tan identificado.​ La ceguera pasó a ser un tema recurrente a lo largo de su obra, motivado por su miedo a perder la vista, como le ocurrió previamente a su padre Recientemente, en el seminario “La época azul: nuevas lecturas a través del estudio técnico” en el Museu Picasso (febrero de 2015), se dieron a conocer una serie de nuevos descubrimientos sobre este cuadro del pintor malagueño. Un estudio del cuadro realizado con luz rasante reveló una serie de bocetos realizados por el pintor antes del resultado final. En ellos se puede observar la urln de una maternidad, que se encuentra también en una carta de Picasso a Max Jacob. También se ha revelado otro cuadro debajo del esbozo de la maternidad, que muestra una mujer que se encuentra en La Vida. Además de esto, también se han revelado una serie de alteraciones del propio cuadro del viejo guitarrista ciego",
    "autores": [
      {
        "autor_id": "1",
        "title": "Pablo Picasso"
      }
    ]
    ,
    "museos": [
      {
        "museo_id": "1",
        "title": "Art Institute of Chicago"
      }
    ]
  },
  {
    "id": "8",
    "title": "Cristo de San Juan de la Cruz",
    "size": "05cm x 116 cm (80,7 pulgadas x 45,67 pulgadas)",
    "age": "1951",
    "description": "El Cristo de San Juan de la Cruz es un cuadro de Salvador Dalí realizado en 1951 que se encuentra en la colección de la Kelvingrove Art Gallery and Museum , Glasgow. Representa a Jesucristo en la cruz en un cielo oscurecido flotando sobre un cuerpo de agua completo con un bote y pescadores. Aunque es una representación de la crucifixión , está desprovista de clavos, sangre y una corona de espinas, porque, según Dalí, estaba convencido por un sueño de que estos rasgos estropearían su representación de Cristo. También en un sueño, se le reveló la importancia de representar a Cristo en el ángulo extremo evidente en la pintura.",
    "autores": [
      {
        "autor_id": "4",
        "title": "Salvador Dalí"
      }
    ]
    ,
    "museos": [
      {
        "museo_id": "7",
        "title": "Galería de arte y Museo Kelvingrove, Glasgow"
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
    res.status(200).send('Pintura was updated');
  }
})

router.delete('/:id', (req, res) => {
  let index = pinturas.findIndex(i => i.id == req.params.id);
  if (index == -1)
    return resolve();
  else {
    pinturas = pinturas.filter(i => i.id != req.params.id);
  }
})


app.use(express.json());
app.use(router);
app.use('/.netlify/functions/api', router);
module.exports.handler = serverless(app);

