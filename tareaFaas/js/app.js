function getAll(url, entity) {
  fetch(url )
    .then(response => response.json())
    .then((data) => {
      fetch('/template/list/' + entity + '.html')
        .then((response) => response.text())
        .then((template) => {
          let rendered = Mustache.render(template, data);
          document.getElementById('content').innerHTML = rendered;
        });
    })
}

function getById(query, url, entity) {
  fetch(url + '/' + query.id)
    .then(response => response.json())
    .then((data) => {
      fetch('/template/detail/' + entity + '.html')
        .then((response) => response.text())
        .then((template) => {
          let rendered = Mustache.render(template, data);
          document.getElementById('content').innerHTML = rendered;
        });
    })
}

function home() {
  fetch('/template/home.html')
    .then((response) => response.text())
    .then((template) => {
      let rendered = Mustache.render(template, {});
      document.getElementById('content').innerHTML = rendered;
    });
}

const artistasApi = "https://hardcore-wright-668287.netlify.app/.netlify/functions/api/";
const authorsApi = "https://faas-example.netlify.app/.netlify/functions";
const publishersApi = "https://faas-example.netlify.app/.netlify/functions";

function init() {
  const router = new Navigo('/', {
    hash: true
  });
  router.on({
    '/autores': () => {
      getAll(artistasApi, 'autores');
    },
    '/authors': () => {
      getAll(authorsApi, 'author');
    },
    '/publishers': () => {
      getAll(publishersApi, 'publisher');
    },
    '/autoresId/:id': ({ data, params, queryString }) => {
      getById(data, artistasApi, 'autores');
    },
    '/authorById/:id': ({ data, params, queryString }) => {
      getById(data, authorsApi, 'author');
    },
    '/publisherById/:id': ({ data, params, queryString }) => {
      getById(data, publishersApi, 'publisher');
    }
  });
  router.on(() => home());
  router.resolve();
}

window.onload = function () {
  init();
};