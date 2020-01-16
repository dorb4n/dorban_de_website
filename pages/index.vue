<template>
  <div class="base">
    <Sidebar />
    <div class="content">
      <div v-html="home.text"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Sidebar from '~/components/Sidebar'

export default {
  async asyncData ({ params }) {
    const { data } = await axios.get(process.env.api + "/items/pages?filter[slug][eq]=home&fields=title,text&single=1")
    return { 
      home: data.data
    }
  },
  components: {
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