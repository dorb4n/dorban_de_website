<template>
    <main class="content">
        <article class="post">
            <h1>{{ post.title }}</h1>

            <div class="text-uppercase text-strong post-meta">
                <time :datetime="post.published_on">{{ post.published_on | moment }}</time>

                <nav>
                    <ul>
                        <li v-for="tag in post.tags" v-bind:key="tag">
                            <nuxt-link :to="{ path: '/posts/tag/' + tag}">#{{ tag }}</nuxt-link>
                        </li>
                    </ul>
                </nav>
            </div>

            <div v-html="post.intro"></div>
        
            <div v-html="post.text"></div>

            <div v-if="post.images" class="post-gallery">
                <a v-for="image in post.images" v-bind:key="image.id" :href="image.directus_files_id.data.thumbnails[7].url" 
                   :title="image.directus_files_id.title" class="post-gallery_item">
                    <img :alt="'Bild zum Beitrag ' + post.title"
                         :src="image.directus_files_id.data.thumbnails[6].url" />
                </a>
            </div>
        </article>

        <div class="text-uppercase text-strong">
            <nuxt-link to="/posts" class="slashes">Zurück</nuxt-link>
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

<style lang="scss" scoped>
@import '~/assets/scss/variables';

.post {
    &-meta {
        display: flex;

        ul {
            display: flex;
            list-style: none;
            margin: 0;
        }
        li {
            margin-right: 10px;
            padding: 0;
        }
    }
    &-gallery {
        margin-bottom: 15px;

        @media (min-width: $breakpoint) {
            display: flex;
            flex-wrap: wrap;
        }

        &_item {
            display: block;
            margin: 15px 0;
            

            @media (min-width: $breakpoint) {
                flex-basis: 256px;
                flex-grow: 1;
                margin: 15px;
            }

            img {
                width: 100%;

                @media (min-width: $breakpoint) {
                    transition: all ease 300ms;

                    &:hover {
                        box-shadow: 0 40px 40px -20px rgba(51,51,51,0.3);
                        transform: scale(1.01);
                    }
                }
            }
        }
    }
}
</style>