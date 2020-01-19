<template>
    <div class="base">
        <Sidebar />
        <main class="content">
            <article>
                <h1>{{ post.title }}</h1>

                <div class="date">
                    <time :datetime="post.published_on">{{ post.published_on | moment }}</time>
                </div>
            
                <div v-html="post.text"></div>
            </article>

            <router-link to="/posts" class="back">« zurück</router-link>

            <Footer />
        </main>
    </div>
</template>

<script>
import axios from '~/plugins/axios'

import Footer from '~/components/Footer'
import Sidebar from '~/components/Sidebar'

var moment = require('moment')

export default {
    async asyncData ({ params }) {
        const { data } = await axios.get(`items/posts?filter[slug][eq]=${params.slug}&fields=title,text,published_on&single=1`)
        return { 
            post: data.data
        }
    },
    components: {
        Footer,
        Sidebar
    },
    filters: {
        moment: function (date) {
            return moment(date).format('D.MM.YYYY')
        }
    },
    head () {
        return {
            title: this.post.title + ' :: ' + process.env.pageTitle
        }
    }
}
</script>

<style lang="scss">
.content article a {
    text-decoration: underline;
}
</style>