<template>
  <main class="content">
    <div v-html="home.text"></div>
  </main>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  async asyncData ({ params }) {
    const { data } = await axios.get('items/pages?filter[slug][eq]=home&fields=title,text&single=1')
    return { 
      home: data.data
    }
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