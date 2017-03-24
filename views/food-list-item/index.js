const html = require('choo/html');
const styles = require('./styles.css');

module.exports = (r) => (state, prev, send) => html`
  <a class=${styles.root} href="/foods/${r.id}">
    <img src=${r.pictureURL} class=${styles.picture} />
    <div class=${styles.info}>
      <h3>${r.name}</h3>
      <h3>$ ${r.price}</h3>
      <p>${r.description}</p>
      <p>Favorito: ${r.favorite}</p>
    </div>
  </a>
`
