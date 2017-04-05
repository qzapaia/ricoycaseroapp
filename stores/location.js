module.exports = (state, emitter) => {
  emitter.on('*', () => {
    state.locationPath = window.location.pathname.split('/').splice(1)
  })
}
