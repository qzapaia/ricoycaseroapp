const html = require('choo/html');
const styles = require('./styles.css');

module.exports = (config) => (state, prev, send) => html`
  <main class=${styles.root}>
    <header>
      <button class=${styles.close} onclick=${config.onClose}>
        x
      </button>
    </header>
    <h1>filters component</h1>
    <h1>Param: ${config}</h1>
  </main>
`
