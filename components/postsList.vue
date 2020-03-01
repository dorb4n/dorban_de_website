<template>
    <div class="posts">
        <article v-for="post in posts" v-bind:key="post.slug" class="posts-article">
            <div class="posts-article_image">
                <nuxt-link v-if="post.image" :to="{ path: '/posts/' + post.slug }" :aria-label="'Beitragsbild ' + post.title">
                    <img :alt="'Bild zum Beitrag ' + post.title" :src="post.image.data.thumbnails[6].url" />
                </nuxt-link>
            </div>

            <div class="posts-article_intro">
                <nuxt-link :to="{ path: '/posts/' + post.slug }">
                    <h3 class="posts-article_intro__title">{{ post.title }}</h3>
                </nuxt-link>

                <time :datetime="post.published_on">{{ post.published_on | moment }}</time>

                <div v-if="post.intro" v-html="post.intro">
                </div>

                <div class="text-uppercase text-strong">
                    <nuxt-link :to="{ path: '/posts/' + post.slug}" class="slashes">Mehr</nuxt-link>
                </div>
            </div>
        </article>

        <article v-if="!posts">
            :/ Sorry, keine Beiträge gefunden
        </article>
    </div>
</template>

<script>
var moment = require('moment')

export default {
    props: ['posts'],
    filters: {
        moment: function (date) {
            return moment(date).format('DD.MM.YYYY')
        }
    },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables';

.posts {
    &-article {
        margin-bottom: 100px;

        @media (min-width: $breakpoint) {
            display: flex;
            transition: all ease 300ms;

            &:hover {
                transform: scale(1.01);
            }
        }

        &_image {
            @media (min-width: $breakpoint) {
                flex-shrink: 0;
                margin-right: 20px;
                width: 34%;
            }

            img {
                width: 100%;
            }
        }

        &_intro {
            &__title {
                @media (min-width: $breakpoint) {
                    margin-top: 0;
                }
            }
        }
    }
}
</style>