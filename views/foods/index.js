const html = require('choo/html');
const styles = require('./styles.css');

module.exports = (param) => (state, prev, send) => html`
  <main class=${styles.root}>
    ${[1,2,3,4,5,6,7,8,9,10].map(i=>html`
      <a class=${styles.foodPreview} href="/foods/1234">
        <h3>Comida</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </a>
    `)}
  </main>
`
