<template>
    <aside class="sidebar">
        <div class="sidebar-block">
            <nuxt-link to="/" class="logo h1">
                {{ title }}
            </nuxt-link>

            <nav class="sidebar-navigation">
                <!-- @TODO: get navigation points via store -->
                <ul>
                    <li>
                        <nuxt-link to="/posts">
                            Posts
                        </nuxt-link>
                    </li>
                </ul>
            </nav>
        </div>
    </aside>
</template>

<script>
export default {
    data () {
        return {
            title: process.env.pageTitle
        }
    }
}
</script>

<style lang="scss" scoped>
.sidebar {
    background: #000 url('https://images.unsplash.com/photo-1577180234245-9d43488a6722?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1835&q=80') center no-repeat;
    background-size: cover;
    height: 60vh;

    @media (min-width: 900px) {
        flex-shrink: 0;
        height: 100vh;
        width: 40%;
    }

    a {
        text-decoration: none;
    }

    &-block {
        background: rgba(255, 255, 255, .5);
        display: inline-block;
        margin-top: 50px;
        padding: 20px 40px;
        text-shadow: 0 0 20px #fff;
    }

    &-navigation {
        ul {
            list-style: none;
            margin: 20px 0 0;
            padding: 0;
        }

        li {
            &:before {
                content: '// ';
                display: inline-block;
            }
        }
    }
}
</style>