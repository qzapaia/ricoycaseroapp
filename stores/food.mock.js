const _ = require('lodash');

module.exports = (defs) => {
  return _.defaults(defs, {
    id:1,
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
  });
}
