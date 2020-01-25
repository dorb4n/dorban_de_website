<template>
  <div>

    <OffCanvas />
    <a class="navigation-kicker" href="#navigation" uk-toggle
       v-on:click='isOpen = !isOpen'>
       <span v-show="!isOpen" uk-icon="icon: menu; ratio: 2"></span>
       <span v-show="isOpen" uk-icon="icon: close; ratio: 2"></span>
    </a>

    <nuxt />

  </div>
</template>

<script>
import OffCanvas from '~/components/OffCanvas'

export default {
  components: {
    OffCanvas
  },
  data () {
    return {
      isOpen: false
    }
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  font-family: monospace;
}

.navigation-kicker {
  background: rgba(255, 255, 255, .9);
  padding: 15px;
  position: fixed;

  @media (min-width: 940px) {
    margin-left: 30px;
    padding: 0;
  }
}

h1,
h2,
h3,
h4 {
  font-family: monospace;
}

.content {
  padding: 70px 20px;
  max-width: 800px;

  @media (min-width: 940px) {
    margin: 30px auto;
    padding: 0 20px;
  }

  img {
    border-radius: 5px;
    height: auto;
    max-width: 100%;
  } 

  a {
    &[target="_blank"]:after {
      content: ' »';
      display: inline-block;
      padding-left: 4px;
    }
  }

  p, ul, ol, dl, address {
    font-family: serif;
  }
}
</style>