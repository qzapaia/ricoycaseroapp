module.exports = (state, emitter) => {

  state.menuVisible = false;
  state.filtersVisible = false;


  emitter.on('showMenu',(flag) => {
    state.menuVisible = flag;
    emitter.emit('render');
  });
  
  emitter.on('showFilters',(flag) => {
    state.filtersVisible = flag;
    emitter.emit('render');
  });
}
