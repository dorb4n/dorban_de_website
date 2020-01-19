<template>
    <footer class="footer">
        {{ copyright }} 
        <nav class="footer-navigation">
            <ul>
                <li><nuxt-link to="/impressum">Impressum</nuxt-link></li>
                <li><nuxt-link to="/datenschutz">Datenschutz</nuxt-link></li>
            </ul>
        </nav>
    </footer>
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
.footer {
    border-top: 1px solid #215585;
    font-size: .8rem;
    margin-top: 50px;
    padding-top: 20px;

    a {
        text-decoration: none;
    }

    &-navigation {
        display: inline-block;

        ul {
            list-style: none;
            margin: 0;
        }
        li {
            display: inline-block;

            &:before {
                content: '// ';
                display: inline-block;
                padding-right: 4px;
            }
        }
    }
}
</style>