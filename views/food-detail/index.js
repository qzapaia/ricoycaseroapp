const html = require('choo/html');
const styles = require('./styles.css');

module.exports = (param) => (state, prev, send) => html`
  <main class=${styles.root}>
    <h1>food-detail component</h1>
    <h1>Param: ${param}</h1>
  </main>
`