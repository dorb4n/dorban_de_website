<template>
    <aside class="sidebar">
        <div class="logo h1">
            {{ title }}
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

<style scoped>
.sidebar {
    background: url('https://images.unsplash.com/photo-1577180234245-9d43488a6722?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1835&q=80') center no-repeat;
    background-size: cover;
}
.logo {
    margin-top: 50px;
    padding: 20px 40px;
    text-shadow: 0 0 20px #fff;
}
</style>