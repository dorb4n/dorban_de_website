<template>
    <header class="page-header uk-text-bold uk-text-large uk-text-uppercase" data-uk-grid>
        <div class="page-header_logo uk-width-1-3@m">
            <nuxt-link to="/">{{ title }}</nuxt-link> <span class="uk-text-normal uk-text-small">Stephan Plöhn</span>
        </div>
        <nav class="page-header_navigation uk-text-right@m uk-width-expand@m">
            <ul class="uk-flex-inline uk-list-style-none">
                <li class="uk-margin-left@m">
                    <nuxt-link to="/">Start</nuxt-link>
                </li>
                <li class="uk-margin-left@m">
                    <nuxt-link to="/posts">Beiträge</nuxt-link>
                </li>
            </ul>
        </nav>
        </header>
</template>

<style lang="scss" scoped>
    .page-header {
        &_navigation {
            ul {
                margin: 0;
                list-style: none;
            }

            .nuxt-link-exact-active {
                color:rgb(28, 102, 17);
                text-decoration: underline;
            }
        }
    }
</style>

<script>

export default {
    data () {
        return {
            title: process.env.pageTitle
        }
    }
}
</script>