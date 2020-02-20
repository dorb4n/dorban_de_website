<template>
    <footer class="page-footer uk-text-uppercase">
        <span class="uk-text-bold">&copy; {{ copyright }}</span>
        // <nuxt-link to="/impressum">Impressum</nuxt-link> 
        // <nuxt-link to="/datenschutz">Datenschutz</nuxt-link>
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