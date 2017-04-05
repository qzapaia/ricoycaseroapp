const foodMock = require('./food.mock.js');
const _ = require('lodash');

module.exports = (state, emitter) => {
  Object.assign(state,{
    searchLocation:{},
    searchResults:[]
  });

  emitter.on('searchResults',(foods = [1,2,3,4,5,6,7,8,9,10])=>{
    state.searchResults = foods.map(id=>foodMock({
      id,
      favorite:state.me || state.me.favorites.includes(id)
    }));
    emitter.emit('render');
  })

  emitter.on('DOMContentLoaded', () => {
    emitter.emit('searchResults');
  })
}
