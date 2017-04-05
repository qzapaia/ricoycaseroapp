const html = require('choo/html');
const styles = require('./styles.css');
const classNames = require('classnames');

module.exports = (config) => (state, emit) => html`
  <div class=${classNames(styles.root, { [styles.showMenu]:state.menuVisible } )}
       onclick=${()=>{ emit('showMenu', false); }}
       onload=${()=>{ emit('loadApp'); }}>
    <button class=${styles.close}>
      x
    </button>
    <nav class=${styles.menuOptions}>
      <a class=${styles.menuOption} href="/">Buscar</a>
      <a class=${styles.menuOption} href="/requests">Mis pedidos</a>
      <a class=${styles.menuOption} href="/favorites">Favoritos</a>
      <hr />
      <a class=${styles.menuOption} href="/orders">Mis comandas</a>
      <a class=${styles.menuOption} href="/my-foods">Mis comidas</a>
      <a class=${styles.menuOption} href="/publish">Publicar comida</a>
      <a class=${styles.menuOption} href="/contact">Contactanos</a>

      <a class=${styles.menuOption} href="/profile">Mi Perfil/Ingresar</a>
    </nav>
  </div>
`
