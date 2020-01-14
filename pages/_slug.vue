<template>
    <div>
        Here comes the page
        <pre>
            {{page}}
        </pre>
        
        <div v-html="page.text"></div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    async asyncData ({ params }) {
        const { data } = await axios.get(process.env.api + `/items/pages?filter[slug][eq]=${params.slug}&fields=title,text&single=1`)
        return { 
            page: data.data
        }
    },
    head () {
        return {
            title: this.page.title + ' :: ' + process.env.pageTitle
        }
    }
}
</script>