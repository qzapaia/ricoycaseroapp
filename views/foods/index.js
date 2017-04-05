const html = require('choo/html');
const styles = require('./styles.css');
const filtersView = require('../filters');
const foodListItem = require('../food-list-item');
const classNames = require('classnames');

module.exports = (param) => (state, emit) => {
  const {
    searchResults
  } = state;

  return html`
    <main class=${styles.root}>
      <div class=${classNames(styles.filters, { [styles.showFilters]:state.filtersVisible } )}>
        ${filtersView({
          onClose:()=>emit('showFilters', false)
        })(state, emit)}
      </div>

      <header class=${styles.searchHeader}>
        <div class=${styles.searchDetails}>
          <div class=${styles.foodAmount}>12 comidas</div>
          <div class=${styles.appliedFilters}>Cerca de mi ubicación</div>
        </div>

        <button class=${styles.showFilters} onclick=${()=>{ emit('showFilters', true) }}>
          Filters
        </button>
      </header>

      ${searchResults.map(food=>{
        return foodListItem(food)(state, emit)
      })}
    </main>
  `
}
