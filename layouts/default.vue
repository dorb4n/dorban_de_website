<template>
  <div class="page">
    <pageHeader />

    <nuxt />

    <pageFooter />
  </div>
</template>

<script>
import pageHeader from '~/components/pageHeader'
import pageFooter from '~/components/pageFooter'

export default {
  components: {
    pageHeader,
    pageFooter
  },
  data () {
    return {
      isOpen: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .page {
    margin: 20px auto;
    max-width: 900px;
    width: 100%;
  }
</style>