const choo = require('choo');
const html = require('choo/html');
const resume = require('./helpers/choo-resume');
const app = choo();
const DEV = process.env.NODE_ENV === 'development';

require('./css/base.css');

app.use((state, emitter) => {
  console.log('second &&&&&',state);
})

// Views
var layoutView = require('./views/layout');
var homeView = require('./views/home')();
var foodsView = require('./views/foods')();
var foodDetailView = require('./views/food-detail')();
var favoritesView = require('./views/favorites')();
var notFoundView = require('./views/not-found')();

// Model
app.use(require('./stores/layout'));
app.use(require('./stores/search'));
app.use(require('./stores/me'));
// app.model(require('./stores/texts'));
// app.model(require('./stores/main'));

// Routes

app.route('/', layoutView({ content:homeView }))
app.route('/foods', layoutView({ content:foodsView }))
app.route('*', layoutView({ content:notFoundView }))
// [
// 	['/foods', layoutView({ content:foodsView }), [
// 		['/:id', layoutView({ content:foodDetailView })]
// 	]],
// 	['/favorites', layoutView({ content:favoritesView })],
// ]);


// Setup
DEV && app.use(resume());
var tree = app.start();
var el = document.querySelector('#choo-app');
el && el.remove();
document.body.appendChild(html`<div id="choo-app">${tree}</div>`);

// HMR
if(module.hot) {
	module.hot.accept(function(err){
		err && console.error("Cannot apply hot update", err);
	});
}
