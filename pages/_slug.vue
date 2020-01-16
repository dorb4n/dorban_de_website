<template>
    <div class="base">
        <Sidebar />
        <div class="content">
            <div v-html="page.text"></div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Sidebar from '~/components/Sidebar'

export default {
    async asyncData ({ params }) {
        const { data } = await axios.get(process.env.api + `/items/pages?filter[slug][eq]=${params.slug}&fields=title,text&single=1`)
        return { 
            page: data.data
        }
    },
    components: {
        Sidebar
    },
    head () {
        return {
            title: this.page.title + ' :: ' + process.env.pageTitle
        }
    }
}
</script>