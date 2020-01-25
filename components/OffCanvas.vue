<template>
    <div id="navigation" uk-offcanvas="mode: reveal; bg-close: false; esc-close: false">
        <div class="uk-offcanvas-bar">
            <div class="page-title">
                <span uk-icon="icon: paint-bucket; ratio: 4"></span> {{ title }}
            </div>
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
            copyright: copyright,
            title: process.env.pageTitle
        }
    }
}
</script>

<style lang="scss" scoped>
    .page-title {
        font-family: monospace;
        font-size: 4rem;
        line-height: 4rem;
        margin: -4px 0 40px;
    }
    .uk-offcanvas-bar {
        background: #333;
    }
</style>