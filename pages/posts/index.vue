<template>
    <main class="content">
        <h1>{{ title }}</h1>
        
        <div class="posts"
             data-uk-scrollspy="cls: uk-animation-slide-bottom-small; target: .posts-article; delay: 300">
            <article v-for="post in posts" v-bind:key="post.slug" class="posts-article" data-uk-grid>
                <div class="posts-article_image uk-width-1-3@m">
                    <nuxt-link v-if="post.image" :to="{ path: 'posts/' + post.slug }" :aria-label="'Beitragsbild ' + post.title">
                        <img :alt="'Bild zum Beitrag ' + post.title"
                             data-uk-img :data-src="post.image.data.thumbnails[6].url" />
                    </nuxt-link>
                </div>

                <div class="posts-article_intro uk-width-expand@m">
                    <nuxt-link :to="{ path: 'posts/' + post.slug }">
                        <h3 class="posts_title">{{ post.title }}</h3>
                    </nuxt-link>

                    <time :datetime="post.published_on" class="uk-display-block">{{ post.published_on | moment }}</time>

                    <div v-if="post.intro" v-html="post.intro">
                    </div>

                    <div class="uk-text-uppercase uk-text-bold">
                        <nuxt-link :to="{ path: 'posts/' + post.slug}" class="slashes">Mehr</nuxt-link>
                    </div>
                </div>
            </article>

            <article v-if="!posts">
                :/ Sorry, keine Beiträge gefunden
            </article>
        </div>
    </main>
</template>

<script>
var moment = require('moment')

export default {
    async asyncData ({ route, app, params, error }) {

        /**
         * @TODO: I can't click on Posts in the Sidebar when tag is active as a GET parameter
         */

        var query = '?filter[is_page][empty]&fields=title,slug,published_on,image.*,intro,is_page&sort=-published_on'

        if (route.query.tag) {
            query = `?filter[is_page][empty]&filter[tags][contains]=${route.query.tag}&fields=title,slug,published_on,image.*,intro,is_page&sort=-published_on`
        }

        return await app.$postRepository.index(query)
            .then((res) => {
                if (res.data.length == 0) {
                    return { posts: '' }
                } else {
                    return { posts: res.data }
                }
            })
            .catch((e) => {
                error({ statusCode: 404, message: 'Posts not found' })
            })
    },
    filters: {
        moment: function (date) {
            return moment(date).format('DD.MM.YYYY')
        }
    },
    data () {
        return {
            title: 'Beiträge',
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
    .posts {
        &-article {
            margin-bottom: 100px;
        }
    }
</style>