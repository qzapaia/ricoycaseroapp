const html = require('choo/html');
const styles = require('./styles.css');

module.exports = (param) => (state, emit) => {
  const {
    params,
    foodsById,
    me
  } = state;
  const food = foodsById[params.id];

  return html`
    <main class=${styles.root}>
      <h1>food-detail ${food.id}</h1>
      <h1>Name: ${food.name}</h1>
      <p>desc: ${food.description}</p>
      <p>Fav: ${me.favorites.includes(food.id)}</p>
    </main>
  `
}
