<template>
    <footer class="page-footer text-uppercase">
        <span class="text-bold">&copy; {{ copyright }}</span>
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
@import '~/assets/scss/variables';

.page-footer {
    span, a {
        display: block;
        margin-top: 10px;

        @media (min-width: $breakpoint) {
            display: inline-block;
        }
    }
}
</style>