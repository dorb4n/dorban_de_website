<template>
    <footer class="page-footer uk-text-uppercase">
        <span class="uk-text-bold">&copy; {{ copyright }}</span>
        <nuxt-link to="/impressum" class="slashes">Impressum</nuxt-link> 
        <nuxt-link to="/datenschutz" class="slashes">Datenschutz</nuxt-link>
    </footer>
</template>

<script>
const copyright = new Date().getFullYear() + ' ' + process.env.pageTitle

export default {
    data () {
        return {
            copyright
        }
    }
}
</script>

<style lang="scss" scoped>
    .page-footer {
        span, a {
            display: block;
            margin-top: 10px;

            @media (min-width: 640px) {
                display: inline-block;
            }
        }
    }
</style>