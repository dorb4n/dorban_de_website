<template>
    <header class="page-header uk-text-bold uk-text-uppercase" data-uk-grid>
        <div class="page-header_logo uk-width-1-2@s">
            <nuxt-link to="/">{{ title }}</nuxt-link> <span class="uk-text-normal">// Stephan Plöhn</span>
        </div>
        <nav class="page-header_navigation uk-width-1-2@s">
            <ul>
                <li>
                    <nuxt-link to="/" aria-label="Zur Startseite">Home</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/posts" aria-label="Beiträge lesen">Beiträge</nuxt-link>
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
                padding: 0;
                list-style: none;

                @media (min-width: 640px) {
                    text-align: right;
                }
            }
            li {
                display: inline-block;
                margin-right: 20px;
                
                @media (min-width: 640px) {
                    margin: 0 0 0 20px;
                }
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