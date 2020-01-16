<template>
    <div class="base">
        <Sidebar />
        <div class="content">
            <h1>{{ title }}</h1>
            
            <ul v-for="post in posts" v-bind:key="post.slug">
                <li><router-link :to="{ path: 'posts/' + post.slug}">{{ post.title }}</router-link> <time :datetime="post.published_on">{{ post.published_on | moment }}</time></li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Sidebar from '~/components/Sidebar'

var moment = require('moment')

export default {
    async asyncData ({ params }) {
        const { data } = await axios.get(process.env.api + `/items/posts?fields=title,slug,published_on`)
        return { 
            posts: data.data
        }
    },
    components: {
        Sidebar
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