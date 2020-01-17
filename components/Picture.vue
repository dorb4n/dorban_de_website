<template>
    <figure>
        I'm an Image
        {{ pid }}
        {{ picture }}
        <figcaption>Caaaaaption</figcaption>
    </figure>
</template>

<script>
import axios from 'axios'

export default {
    props: ['pid'],
    name: 'picture',

    async asyncData ({ params }) {
        const { data } = await axios.get(process.env.api + `/files/1`)
        return { 
            picture: data
        }
    }
}
</script>