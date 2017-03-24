module.exports = (state, emitter) => {
  Object.assign(state,{
    searchLocation:{},
    searchResults:[]
  });

  emitter.on('searchResults',(foods = [1,2,3,4,5,6,7,8,9,10])=>{
    state.searchResults = foods;
    emitter.emit('pullFoods',state.searchResults);
  })

  emitter.on('DOMContentLoaded', () => {
    emitter.emit('searchResults');
  })
}
