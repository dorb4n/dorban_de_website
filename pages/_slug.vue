<template>
    <main class="content">
        <h1>{{ page.title }}</h1>
        <div v-html="page.text"></div>
    </main>
</template>

<script>
export default {
    async asyncData ({ app, params, error }) {
        return await app.$postRepository.index(`?filter[slug][eq]=${params.slug}&filter[is_page][nempty]&fields=title,text,seo_index&single=1`)
            .then((res) => {
                return { page: res.data }
            })
            .catch((e) => {
                error({ statusCode: 404, message: 'Page not found' })
            })
    },
    head () {
        var seoIndex = 'index';

        if (this.page.seo_index) {
            seoIndex = 'noindex'
        }

        return {
            title: this.page.title + ' :: ' + process.env.pageTitle,
            meta: [
                { hid: 'robots', name: 'robots', content: seoIndex }
            ]
        }
    }
}
</script>