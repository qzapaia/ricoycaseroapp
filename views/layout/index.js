const html = require('choo/html');
const styles = require('./styles.css');
const menuView = require('../menu');

module.exports = (config) => (state, prev, send) => {
  const {texts} = state;

  return html`<main class=${styles.root}>
    <header class=${styles.header}>
      ${menuView()(state, prev, send)}
      <h1 class=${styles.title}>
        <a href="/">R&C</a>
      </h1>
      <button class=${styles.cart}>Cart</button>
    </header>

    <main class=${styles.main}>
      ${config.content(state, prev, send)}
    </main>
  </main>`
}
