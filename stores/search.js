module.exports = (state, emitter) => {
  Object.assign(state,{
    searchLocation:{},
    searchResults:[]
  });

  emitter.on('searchResults',()=>{
    state.searchResults = [1,2,3,4,5,6,7,8,9,10].map(i=>({
      id:i,
      name:'Bondiolita del futuro',
      pictureURL:'http://lorempixel.com/500/500/food/',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique quos, nesciunt, cupiditate molestiae ducimus placeat cumque necessitatibus, impedit error praesentium sit voluptatum architecto incidunt sed perspiciatis quas eligendi rerum vel!',
      rating:4,
      votesAmount:24,
      price:70,
      currency:'ARS',
      scheduled_delivery:{
        from:new Date(),
        to:new Date(),
        until:new Date()
      }
    }));
    emitter.emit('render');
  })

  emitter.on('DOMContentLoaded', () => {
    emitter.emit('searchResults');
  })
}
