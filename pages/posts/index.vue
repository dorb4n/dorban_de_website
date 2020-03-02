<template>
    <main class="content">
        <h1>{{ title }}</h1>
        
        <postsList :posts="posts" />
    </main>
</template>

<script>
import postsList from "~/components/postsList"

export default {
    async asyncData ({ app, error }) {
        return await app.$postRepository.index('?filter[is_page][empty]&fields=title,slug,published_on,image.*,intro,is_page&sort=-published_on')
            .then((res) => {
                if (res.data.length == 0) {
                    return { posts: '' }
                } else {
                    return { posts: res.data }
                }
            })
            .catch((e) => {
                error({ statusCode: 404, message: 'Posts not found' })
            })
    },
    components: {
        postsList
    },
    data () {
        return {
            title: 'Beiträge',
        }
    },
    head () {
        return {
            title: this.title + ' :: ' + process.env.pageTitle
        }
    }
}
</script>