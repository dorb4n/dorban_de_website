<template>
    <div class="base">
        <main class="content">
            <h1>{{ title }}</h1>
            
            <div v-for="post in posts" v-bind:key="post.slug">
                <article class="post-list-article">
                    <div class="date">
                        <time :datetime="post.published_on">{{ post.published_on | moment }}</time>
                    </div>
                    <div class="post-list-intro">
                        <nuxt-link :to="{ path: 'posts/' + post.slug}">
                            <h3 class="post-list-title">{{ post.title }}</h3>
                        </nuxt-link>

                        <div v-if="post.intro" v-html="post.intro">
                        </div>

                        <nuxt-link :to="{ path: 'posts/' + post.slug}">
                            <span uk-icon="chevron-double-right"></span> Mehr
                        </nuxt-link>
                    </div>
                </article>
            </div>
        </main>
    </div>
</template>

<script>
import axios from '~/plugins/axios'

var moment = require('moment')

export default {
    async asyncData ({ params }) {
        const { data } = await axios.get(`items/posts?fields=title,slug,published_on,intro`)
        return { 
            posts: data.data
        }
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
.post-list {
    &-article {
        margin-bottom: 100px;

        @media (min-width: 900px) {
            display: flex;
        }
    }
    &-title {
        line-height: 1.3rem;
    }
}

.date {
    padding-right: 40px;
}
</style>