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

                <div v-if="post.images" class="uk-child-width-1-3@m" data-uk-grid
                     data-uk-scrollspy="cls: uk-animation-scale-down; target: .templates-post_gallery__item; delay: 300; repeat: true">
                    <a v-for="image in post.images" v-bind:key="image.id" :href="image.directus_files_id.data.thumbnails[5].url" 
                       :title="image.directus_files_id.title" :data-caption="image.directus_files_id.title"
                       class="templates-post_gallery__item">
                        <img :src="image.directus_files_id.data.thumbnails[3].url" :alt="'Bild zum Beitrag ' + post.title" />
                    </a>
                </div>
            </article>

            <router-link to="/posts"><span uk-icon="chevron-double-left"></span> Zurück</router-link>
        </main>
    </div>
</template>

<script>
var moment = require('moment')

export default {
    async asyncData ({ app, params, error }) {
        return await app.$postRepository.index(`?filter[slug][eq]=${params.slug}&fields=intro,title,text,published_on,images.*.*&single=1`)
            .then((res) => {
                return { post: res.data }
            })
            .catch((e) => {
                error({ statusCode: 404, message: 'Post not found' })
            })
    },
    filters: {
        moment: function (date) {
            return moment(date).format('DD.MM.YYYY')
        }
    },
    head () {
        return {
            title: this.post.title + ' :: ' + process.env.pageTitle
        }
    }
}
</script>