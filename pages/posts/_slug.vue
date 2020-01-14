<template>
    <div>
        Here comes the post
        <pre>
            {{ post }}￼
        </pre>

        <h1>{{ post.title }}</h1>
        
        <div v-html="post.text"></div>

        <div><router-link to="/posts">back</router-link></div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    async asyncData ({ params }) {
        const { data } = await axios.get(process.env.api + `/items/posts?filter[slug][eq]=${params.slug}&fields=title,text&single=1`)
        return { 
            post: data.data
        }
    },
    head () {
        return {
            title: this.post.title + ' :: ' + process.env.pageTitle
        }
    }
}
</script>