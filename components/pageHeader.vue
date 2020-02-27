<template>
    <header class="page-header text-bold text-uppercase">
        <div class="page-header_logo">
            <nuxt-link to="/">{{ title }}</nuxt-link> <span class="text-normal slashes">Stephan Plöhn</span>
        </div>
        <nav class="page-header_navigation">
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
@import '~/assets/scss/variables';

.page-header {
    @media (min-width: $breakpoint) {
        display: flex;
        flex-wrap: wrap;
    }

    &_navigation {
        margin-top: 30px;

        @media (min-width: $breakpoint) {
            margin-top: 0;
            flex-grow: 1;
        }

        ul {
            margin: 0;
            padding: 0;
            list-style: none;

            @media (min-width: $breakpoint) {
                text-align: right;
            }
        }
        li {
            display: inline-block;
            margin-right: 20px;
            
            @media (min-width: $breakpoint) {
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