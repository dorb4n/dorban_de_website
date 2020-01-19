<template>
    <div class="base">
        <Sidebar />
        <main class="content">
            <h1>{{ post.title }}</h1>
           
            <div v-html="post.text"></div>

            <router-link to="/posts" class="back">« zurück</router-link>

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
        const { data } = await axios.get(`/dorban/items/posts?filter[slug][eq]=${params.slug}&fields=title,text&single=1`)
        return { 
            post: data.data
        }
    },
    components: {
        Footer,
        Sidebar
    },
    head () {
        return {
            title: this.post.title + ' :: ' + process.env.pageTitle
        }
    }
}
</script>