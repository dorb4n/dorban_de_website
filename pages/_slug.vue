<template>
    <div class="base">
        <Sidebar />
        <main class="content">
            <div v-html="page.text"></div>
        </main>
    </div>
</template>

<script>
import axios from '~/plugins/axios'

export default {
    async asyncData ({ params }) {
        const { data } = await axios.get(`items/pages?filter[slug][eq]=${params.slug}&fields=title,text&single=1`)
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