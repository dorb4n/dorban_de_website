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
    box-sizing: border-box;
    margin: 20px auto;
    padding: 0 20px;
    max-width: 900px;
    width: 100%;
  }
</style>