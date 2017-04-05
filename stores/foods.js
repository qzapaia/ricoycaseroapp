const foodMock = require('./food.mock.js');

module.exports = (state, emitter) => {
  Object.assign(state,{
    currentFoodId:null,
    foodsById:{},
    foodTypes:[]
  });

  emitter.on('pushFoodTypes',(foodsTypes)=>{
    state.foodTypes = [1,2,3,4,5,6].map(i=>({
      name:'vegana',
      id:i
    }));
    emitter.emit('render');
  });

  emitter.on('loadApp',()=>{
    const {
      params: { id },
      currentFoodId,
      locationPath } = state;

    if(locationPath[0] == 'foods' && currentFoodId != id){
      state.currentFoodId = id;
      emitter.emit('pullFood',id);
    }
  });

  emitter.on('pullFood',(id)=>{
    if(!state.foodsById[id]){
      setTimeout(()=>{
        state.foodsById[id] = foodMock({ id })
        emitter.emit('render');
      },500)
    }else{
      emitter.emit('render');
    }
  });

  emitter.on('*', ()=>{
    console.log('state',state.params.id)
  });

  emitter.on('DOMContentLoaded', () => {
    emitter.emit('pushFoodTypes');
  });
}
