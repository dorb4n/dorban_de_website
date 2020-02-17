<template>
    <div class="base">
        <main class="content">
            <h1>{{ title }}</h1>
            
            <div v-for="post in posts" v-bind:key="post.slug">
                <article class="post-list-article" data-uk-scrollspy="cls: uk-animation-slide-left-small; target: .templates-posts_article; delay: 300; repeat: true">
                    <div class="date">
                        <time :datetime="post.published_on">{{ post.published_on | moment }}</time>
                    </div>
                    <div class="post-list-intro">
                        <nuxt-link :to="{ path: 'posts/' + post.slug }">
                            <h3 class="post-list-title">{{ post.title }}</h3>
                        </nuxt-link>

                        <nuxt-link v-if="post.image" :to="{ path: 'posts/' + post.slug }" :aria-label="'Beitragsbild ' + post.title">
                            <img :src="post.image.data.thumbnails[3].url" :alt="'Bild zum Beitrag ' + post.title" />
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
var moment = require('moment')

export default {
    async asyncData ({ app, params, error }) {
        return await app.$postRepository.index(`?filter[is_page][empty]&fields=title,slug,published_on,image.*,intro,is_page&sort=-published_on`)
            .then((res) => {
                return { posts: res.data }
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