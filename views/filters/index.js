const html = require('choo/html');
const styles = require('./styles.css');

module.exports = (config) => (state, prev, send) => html`
  <main class=${styles.root}>
    <header>
      <button class=${styles.close} onclick=${config.onClose}>
        x
      </button>
    </header>
    <div>
      <button>Entrega Programada</button>
      <button>Entrega a coordinar</button>
    </div>
    <div>
      ${state.foodTypes.map(ft=>html`
        <div>
         <input type="checkbox" />${ft.name}
        </div>
      `)}
    </div>
  </main>
`
