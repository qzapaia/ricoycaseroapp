const choo = require('choo');
const html = require('choo/html');
const mount = require('choo/mount');
const resume = require('./helpers/choo-resume');
const app = choo();

app.use(resume());

require('./css/base.css');

// Views
var layoutView = require('./views/layout');
var homeView = require('./views/home')();
var foodsView = require('./views/foods')();
var foodDetailView = require('./views/food-detail')();

// Model
app.model(require('./models/texts'));
app.model(require('./models/main'));
app.model(require('./models/layout'));

// Routes


app.router([
	['/', layoutView({ content:homeView })],
	['/foods', layoutView({ content:foodsView}),[
		['/:id', layoutView({ content:foodDetailView })]
	]]
]);


// Setup
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
