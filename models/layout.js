module.exports = {
  namespace:'layout',
  state: {
    show:false
  },
  reducers: {
    change: function (state, data) {
      return { show: data }
    }
  }
}
