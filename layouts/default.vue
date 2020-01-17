<template>
  <div>
    <nuxt />
  </div>
</template>

<style lang="scss">
body {
  background-color: #F5F5F5;
  color: #293845;
  margin: 0;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
}

h1, .h1,
h2, .h2,
h3, .h3,
h4, .h4 {
  color: #215585;
  font-family: 'Fredericka the Great', cursive;
  font-weight: 300;
  text-shadow: -1px -1px 0 #fff;
}

h1, .h1 {
  font-size: 3rem;
}
h2, .h2 {
  font-size: 2.5rem;
}
h3, .h3 {
  font-size: 2rem;
}
h4, .h4 {
  font-size: 1.5rem;
}

a {
  color: #215585;

  &:hover {
    background-color: #293845;
    color: #F5F5F5;
    text-decoration: none;
  }
  &[target="_blank"]:after {
    content: ' »';
    display: inline-block;
  }
}

.base {
  

  @media (min-width: 900px) {
    display: flex;
  flex-direction: row;  
  }

  img {
    border-radius: 5px;
    height: auto;
    max-width: 100%;
  }

  pre {
    color: #215585;
    font-family: 'Source Code Pro', monospace;
    font-size: 1.3rem;
    line-height: 1.6rem;
    overflow-x: auto;
  }
}
.sidebar {
  background: #000;
  height: 60vh;

  @media (min-width: 900px) {
    flex-shrink: 0;
    height: 100vh;
    width: 40%;
  }
}
.content {
  padding: 40px 10px;

  @media (min-width: 900px) {
    box-sizing: border-box;
    height: 100vh;
    overflow-y: auto;
    padding: 40px;
    width: 60%;
  }
}
</style>