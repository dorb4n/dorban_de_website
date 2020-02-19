<template>
    <footer class="page-footer">
        {{ copyright }} 
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