<template>
    <div class="base">
        <Sidebar />
        <div class="content">
            <h1>{{ post.title }}</h1>
            
            <div v-html="post.text"></div>

            <router-link to="/posts" class="back">« zurück</router-link>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Sidebar from '~/components/Sidebar'

export default {
    async asyncData ({ params }) {
        const { data } = await axios.get(process.env.api + `/items/posts?filter[slug][eq]=${params.slug}&fields=title,text&single=1`)
        return { 
            post: data.data
        }
    },
    components: {
        Sidebar
    },
    head () {
        return {
            title: this.post.title + ' :: ' + process.env.pageTitle
        }
    }
}
</script>

<style lang="scss" scoped>
.back {
    font-family: 'Fredericka the Great', cursive;
    font-size: 1.3rem;
}
</style>