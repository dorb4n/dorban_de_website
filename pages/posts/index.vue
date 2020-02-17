<template>
    <main class="content">
        <h1>{{ title }}</h1>
        
        <div class="posts"
             data-uk-scrollspy="cls: uk-animation-slide-left-small; target: .posts_article; delay: 300; repeat: true">
            <article v-for="post in posts" v-bind:key="post.slug" class="posts_article">
                <div class="posts_date">
                    <time :datetime="post.published_on">{{ post.published_on | moment }}</time>
                </div>
                <div class="post_intro">
                    <nuxt-link :to="{ path: 'posts/' + post.slug }">
                        <h3 class="posts_title">{{ post.title }}</h3>
                    </nuxt-link>

                    <nuxt-link v-if="post.image" :to="{ path: 'posts/' + post.slug }" :aria-label="'Beitragsbild ' + post.title">
                        <img :src="post.image.data.thumbnails[6].url" :alt="'Bild zum Beitrag ' + post.title" />
                    </nuxt-link>

                    <div v-if="post.intro" v-html="post.intro">
                    </div>

                    <nuxt-link :to="{ path: 'posts/' + post.slug}">
                        <span uk-icon="chevron-double-right"></span> Mehr
                    </nuxt-link>
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
        &_article {
            margin-bottom: 100px;

            @media (min-width: 900px) {
                display: flex;
            }
        }
        
        &_title {
            line-height: 1.3rem;
        }
        
        &_date {
            padding-right: 40px;
        }
    }
</style>