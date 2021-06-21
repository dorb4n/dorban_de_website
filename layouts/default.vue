<template>
  <main class="content">
    <nuxt />
  </main>
</template>

<style>
:root {
  --background: rgba(5,5,5,1);
  --gray: rgba(24,26,27,1);
  --foreground: rgba(255,255,255,1);
  --primary: rgba(0,255,255,1);
  --secondary: rgba(255,0,255,1);
}

body {
  background-color: var(--background);
  color: var(--foreground);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

/* TYPO */
h1, h2, h3 {
  background: linear-gradient(90deg, var(--secondary), var(--primary));
  background-clip: text;
  margin: 0;
  display: inline-block;
  -webkit-text-fill-color: transparent;
}

h1 {
  font-size: 4rem;
}
h2 {
  font-size: 3rem;
}
h3 {
  font-size: 2rem;
}

h1:before,
h2:before,
h3:before,
li {
  color: var(--primary);
  display: inline-block;
  padding-right: 1rem;
}

a {
  color: var(--primary);
  display: inline-block;
  text-decoration: none;
}

ul {
  padding-left: 0;
}

li {
  list-style: none;
}

li:before {
  color: var(--primary);
  content: '- ';
}

hr {
  border-bottom: 1px solid;
  border-image: linear-gradient(90deg, var(--secondary), var(--primary));
  border-image-slice: 1;
  margin: 3rem 0;
}

/* style classes */
.badge {
  background: var(--secondary);
  border-radius: 4px;
  color: var(--foreground);
  display: inline-block;
  margin: .2rem 0;
  padding: 2px 6px;
  text-transform: lowercase;
}
.badge:hover {
  background: var(--primary);
  color: var(--background);
}
</style>
