<template>
    <div class="base">
        <main class="content">
            <article class="uk-article">
                <h1 class="uk-article-title">{{ post.title }}</h1>

                <div class="uk-article-meta">
                    <time :datetime="post.published_on">{{ post.published_on | moment }}</time>
                </div>

                <div class="uk-text-lead" v-html="post.intro"></div>
            
                <div v-html="post.text"></div>
            </article>

            <router-link to="/posts" class="back"><span uk-icon="chevron-double-left"></span> Zurück</router-link>
        </main>
    </div>
</template>

<script>
import axios from '~/plugins/axios'

var moment = require('moment')

export default {
    async asyncData ({ params, error }) {
        return await axios.get(`items/posts?filter[slug][eq]=${params.slug}&fields=intro,title,text,published_on&single=1`)
            .then((res) => {
                return { post: res.data.data }
            })
            .catch((e) => {
                error({ statusCode: 404, message: 'Post not found' })
            })
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