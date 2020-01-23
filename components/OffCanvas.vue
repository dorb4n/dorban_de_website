<template>
    <div id="navigation" uk-offcanvas="mode: reveal">
        <div class="uk-offcanvas-bar">
            <ul class="uk-nav uk-nav-default">
                <li><nuxt-link to="/"><span class="uk-margin-small-right" uk-icon="icon: home"></span> Home</nuxt-link></li>
                <li><nuxt-link to="/posts"><span class="uk-margin-small-right" uk-icon="icon: comment"></span> Beiträge</nuxt-link></li>
                <li class="uk-nav-divider"></li>
                <li><nuxt-link to="/impressum"><span class="uk-margin-small-right" uk-icon="icon: chevron-right"></span> Impressum</nuxt-link></li>
                <li><nuxt-link to="/datenschutz"><span class="uk-margin-small-right" uk-icon="icon: chevron-right"></span> Datenschutz</nuxt-link></li>
            </ul>
        </div>
    </div>
</template>

<script>
const copyright = new Date().getFullYear() + ' ' + process.env.pageTitle

export default {
    data () {
        return {
            copyright: copyright
        }
    }
}
</script>

<style lang="scss" scoped>
    .uk-offcanvas-bar {
        background: #333;
    }
</style>