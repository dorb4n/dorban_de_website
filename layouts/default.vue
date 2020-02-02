<template>
  <div>

    <OffCanvas />
    <a class="navigation-kicker" href="#navigation" uk-toggle>
       <span uk-icon="icon: menu; ratio: 2"></span>
    </a>

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

<style lang="scss">
.navigation-kicker {
  background: rgba(255, 255, 255, .9);
  padding: 15px;
  position: fixed;

  @media (min-width: 940px) {
    margin-left: 30px;
    padding: 0;
  }
}
</style>