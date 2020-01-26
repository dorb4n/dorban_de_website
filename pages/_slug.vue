<template>
    <div class="base">
        <main class="content">
            <div v-html="page.text"></div>
        </main>
    </div>
</template>

<script>
import axios from '~/plugins/axios'

export default {
    async asyncData ({ params, error }) {
        return await axios.get(`items/pages?filter[slug][eq]=${params.slug}&fields=title,text&single=1`)
            .then((res) => {
                return { page: res.data.data }
            })
            .catch((e) => {
                error({ statusCode: 404, message: 'Page not found' })
            })
    },
    head () {
        return {
            title: this.page.title + ' :: ' + process.env.pageTitle
        }
    }
}
</script>