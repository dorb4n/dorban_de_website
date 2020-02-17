<template>
  <main class="content">
    <div v-html="home.text"></div>
  </main>
</template>

<script>
export default {
  async asyncData ({ app, params, error }) {
    return await app.$postRepository.index('?filter[slug][eq]=home&fields=title,text&single=1')
      .then((res) => {
        return { home: res.data }
      })
      .catch((e) => {
        error({ statusCode: 404, message: 'Home not found' })
      })
  },
  data () {
    return {
      title: process.env.pageTitle
    }
  },
  head () {
    return {
      title: this.home.title + ' :: ' + process.env.pageTitle
    }
  }
}
</script>