const html = require('choo/html');
const styles = require('./styles.css');
const menuView = require('../menu');

module.exports = (config) => (state, emit) => html`
  <main class=${styles.root}>
    ${menuView()(state, emit)}

    <header class=${styles.header}>
      <button class=${styles.menuButton} onclick=${()=>{ emit('showMenu',true) }}>
        Menu
      </button>
      <h1 class=${styles.title}>
        <a href="/">R&C</a>
      </h1>
      <span class=${styles.menuOption}></span>
    </header>

    <main class=${styles.main}>
      ${config.content(state, emit)}
    </main>
  </main>
`
