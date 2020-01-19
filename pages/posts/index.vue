<template>
    <div class="base">
        <Sidebar />
        <main class="content">
            <h1>{{ title }}</h1>
            
            <div v-for="post in posts" v-bind:key="post.slug">
                <article class="post-list-article">
                    <div class="date">
                        <time :datetime="post.published_on">{{ post.published_on | moment }}</time>
                    </div>
                    <div class="intro">
                        <nuxt-link :to="{ path: 'posts/' + post.slug}">
                            <h3>{{ post.title }}</h3>
                        </nuxt-link>

                        <div v-if="post.intro" v-html="post.intro">
                        </div>

                        <nuxt-link :to="{ path: 'posts/' + post.slug}">
                            &raquo; mehr
                        </nuxt-link>
                    </div>
                </article>
            </div>

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
        const { data } = await axios.get(`items/posts?fields=title,slug,published_on,intro`)
        return { 
            posts: data.data
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
    data () {
        return {
            title: 'Posts'
        }
    },
    head () {
        return {
            title: this.title + ' :: ' + process.env.pageTitle
        }
    }
}
</script>

<style lang="scss" scoped>
.post-list-article {
    margin-bottom: 100px;

    @media (min-width: 900px) {
        display: flex;
    }

    a {
        text-decoration: none;
    }
}

.date {
    padding-right: 40px;
}
.intro {
    h3 {
        line-height: 2rem;
        margin: 0;
    }
}
</style>