<template>
  <div>
    <OffCanvas />

    <nuxt />
  </div>
</template>

<script>
import OffCanvas from '~/components/OffCanvas'

export default {
  components: {
    OffCanvas
  },
  data () {
    return {
      isOpen: false
    }
  }
}
</script>