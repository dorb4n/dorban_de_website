<template>
    <div id="navigation" uk-offcanvas="mode: reveal; bg-close: false; esc-close: false">
        <div class="uk-offcanvas-bar">
            <nuxt-link class="page-title" to="/">
                <span uk-icon="icon: paint-bucket; ratio: 4"></span> {{ title }}
            </nuxt-link>
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
        background: rgb(34,193,195);
        background: linear-gradient(90deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);
        display: block;
        font-family: monospace;
        font-size: 4rem;
        line-height: 4rem;
        margin: -4px 0 40px;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .uk-offcanvas-bar {
        background: #333;
    }
</style>