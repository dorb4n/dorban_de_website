<template>
  <div class="base">
    <Sidebar />
    <main class="content">
      <div v-html="home.text"></div>

      <Footer />
    </main>
  </div>
</template>

<script>
import axios from '~/plugins/axios'

import Footer from '~/components/Footer'
import Sidebar from '~/components/Sidebar'

export default {
  async asyncData ({ params }) {
    const { data } = await axios.get('/dorban/items/pages?filter[slug][eq]=home&fields=title,text&single=1')
    return { 
      home: data.data
    }
  },
  components: {
    Footer,
    Sidebar
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