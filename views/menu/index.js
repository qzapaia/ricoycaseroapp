const html = require('choo/html');
const styles = require('./styles.css');
const classNames = require('classnames');

module.exports = (config) => (state, prev, send) => html`
  <div class=${styles.root}>

    <button class=${styles.button} onclick=${()=>{ send('layout:change',!state.layout.show) }}>
      Menu
    </button>

    <div class=${classNames(styles.menu, { [styles.showMenu]:state.layout.show } )}>
      <button class=${styles.close} onclick=${()=>{ send('layout:change', false) }}>
        x
      </button>
      <nav class=${styles.menuOptions}>
        <a class=${styles.menuOption} href="">Optciones</a>
        <a class=${styles.menuOption} href="">Optciones</a>
        <a class=${styles.menuOption} href="">Optciones</a>
        <a class=${styles.menuOption} href="">Optciones</a>
        <a class=${styles.menuOption} href="">Optciones</a>
        <a class=${styles.menuOption} href="">Optciones</a>
        <a class=${styles.menuOption} href="">Optciones</a>
        <a class=${styles.menuOption} href="">Optciones</a>
      </nav>
    </div>
  </div>
`
