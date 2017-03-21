var html = require('choo/html')
var styles = require('./styles.css');

module.exports  = (param) => (state, prev, send) => html`
  <main class=${styles.root}>

    <section class=${styles.intro}>
      <div class=${styles.logo}>Logo</div>
      <p class=${styles.claim}>encontra los mejores cocineros de tu barrio. del mundo.</p>

      <div>
        <a href="/foods">Usar mi ubicación actual</a>
      </div>

      <form class=${styles.addressSearchForm}>
        <input type="text" placeholder="rivadavia 1234" />
        <div>
          <button>Buscar por dirección</button>
        </div>
      </form>
    </section>

    <section class=${styles.sell}>
      <h2>Vendé tu comida caser</h2>
      <p>
        Hay pocos cocineros en esta zona.
        Podés ser uno de los primeros.
        Publicá esas comidas que te encanta cocinar,
        recibí los encargos y cocina solo lo que te piden
      </p>

      <div>
        <button class=${styles.sellButton}>Vender</button>
      </div>
    </section>


  </main>
`
