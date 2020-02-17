export default $axios => resource => ({
    index(options) {
      return $axios.$get(`/${resource}${options}`)
    },
    show(id, options) {
      return $axios.$get(`/${resource}/${id}${options}`)
    }
})