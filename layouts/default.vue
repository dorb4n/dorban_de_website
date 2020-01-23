<template>
  <div>

    <OffCanvas />

    <a class="navigation-kicker" href="#navigation" uk-toggle><span uk-icon="icon: menu; ratio: 2"></span></a>

    <nuxt />

  </div>
</template>

<script>
import OffCanvas from '~/components/OffCanvas'

export default {
  components: {
    OffCanvas
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  font-family: serif;
}

.navigation-kicker {
  margin-left: 30px;
  position: fixed;
}

.content {
  margin: 30px auto;
  padding: 0 20px;
  max-width: 900px;

  @media (min-width: 940px) {
    padding: 0;
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
}
</style>