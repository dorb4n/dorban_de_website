<template>
    <div class="base">
        <Sidebar />
        <main class="content">
            <div v-html="page.text"></div>

            <Footer />
        </main>
    </div>
</template>

<script>
import axios from '~/plugins/axios'

import Footer from '~/components/Footer'
import Sidebar from '~/components/Sidebar'

export default {
    async asyncData ({ params }) {
        const { data } = await axios.get(`items/pages?filter[slug][eq]=${params.slug}&fields=title,text&single=1`)
        return { 
            page: data.data
        }
    },
    components: {
        Footer,
        Sidebar
    },
    head () {
        return {
            title: this.page.title + ' :: ' + process.env.pageTitle
        }
    }
}
</script>