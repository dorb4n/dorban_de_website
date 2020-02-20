<template>
    <main class="content">
        <article class="uk-article post">
            <h1 class="uk-article-title">{{ post.title }}</h1>

            <div class="uk-article-meta uk-text-uppercase">
                <time :datetime="post.published_on">{{ post.published_on | moment }}</time>

                <nuxt-link v-for="tag in post.tags" v-bind:key="tag" :to="{ path: '/posts?tag=' + tag}">#{{ tag }} </nuxt-link>
            </div>

            <div class="uk-text-lead" v-html="post.intro"></div>
        
            <div v-html="post.text"></div>

            <div v-if="post.images" class="uk-child-width-1-3@m uk-margin-bottom" data-uk-grid uk-lightbox="animation: scale"
                    data-uk-scrollspy="cls: uk-animation-slide-bottom-small; target: .post_gallery__item; delay: 300; repeat: true">
                <a v-for="image in post.images" v-bind:key="image.id" :href="image.directus_files_id.data.thumbnails[7].url" 
                   :title="image.directus_files_id.title" :data-caption="image.directus_files_id.title" data-type="image"
                   class="post_gallery__item">
                    <img :alt="'Bild zum Beitrag ' + post.title"
                         data-uk-img :data-src="image.directus_files_id.data.thumbnails[6].url" />
                </a>
            </div>
        </article>

        <div class="uk-text-uppercase uk-text-bold">
            // <nuxt-link to="/posts">Zurück</nuxt-link>
        </div>
    </main>
</template>

<script>
var moment = require('moment')

export default {
    async asyncData ({ app, params, error }) {
        return await app.$postRepository.index(`?filter[slug][eq]=${params.slug}&fields=intro,title,text,published_on,tags,images.*.*&single=1`)
            .then((res) => {
                // @TODO: workaround for api results
                // getting an empty tag at the beginning and at the end
                res.data.tags.shift()
                res.data.tags.pop()

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