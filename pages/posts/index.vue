<template>
    <div class="base">
        <Sidebar />
        <main class="content">
            <h1>{{ title }}</h1>
            
            <div v-for="post in posts" v-bind:key="post.slug">
                <article>
                    <div class="date">
                        <time :datetime="post.published_on">{{ post.published_on | moment }}</time>
                    </div>
                    <div class="intro">
                        <router-link :to="{ path: 'posts/' + post.slug}">
                            <h3>{{ post.title }}</h3>
                        </router-link>

                        <div v-if="post.image">
                            {{ post.image }}
                            <Picture :pid="post.image" />
                        </div>
                    </div>
                </article>
            </div>
        </main>
    </div>
</template>

<script>
import axios from 'axios'
import Sidebar from '~/components/Sidebar'
import Picture from '~/components/Picture'

var moment = require('moment')

export default {
    async asyncData ({ params }) {
        const { data } = await axios.get(process.env.api + `/items/posts?fields=title,slug,published_on,image,intro`)
        return { 
            posts: data.data
        }
    },
    components: {
        Sidebar,
        Picture
    },
    filters: {
        moment: function (date) {
            return moment(date).format('D.MM.YYYY')
        }
    },
    data () {
        return {
            title: 'My posts'
        }
    },
    head () {
        return {
            title: this.title + ' :: ' + process.env.pageTitle
        }
    }
}
</script>

<style lang="scss">
article {
    margin-bottom: 100px;

    @media (min-width: 900px) {
        display: flex;
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