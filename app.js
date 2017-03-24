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
app.use(require('./stores/foods'));

// Routes
app.route('/', layoutView({ content:homeView }))
app.route('/foods', layoutView({ content:foodsView }))
app.route('/foods/:id', layoutView({ content:foodDetailView }))
app.route('/favorites', layoutView({ content:favoritesView }))

app.route('*', layoutView({ content:notFoundView }))

// Setup
var tree = resume(app).start();
var el = document.querySelector('#choo-app');
el && el.remove();
document.body.appendChild(html`<div id="choo-app">${tree}</div>`);

// HMR
if(module.hot) {
	module.hot.accept(function(err){
		err && console.error("Cannot apply hot update", err);
	});
}
