<template>
  <main class="content">
    <nuxt />
  </main>
</template>

<style>
:root {
  --background: #282a36;
  --foreground: #f8f8f2;
  --yellow: #f1fa8c;
  --orange: #ffb86c;
  --comment: #6272a4;
  --red: #ff5555;
}

body {
  background-color: var(--background);
  color: var(--foreground);
  font-family:
    SFMono-Regular,
    Menlo,
    Monaco,
    Consolas,
    "Liberation Mono",
    "Courier New",
    monospace;
  font-size: 1.2rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

/* TYPO */
h1, h2, h3 {
  color: var(--orange);
  font-size: 1.2rem;
  font-weight: 300;
  margin: 0;
}

h1:before,
h2:before,
h3:before,
li {
  display: inline-block;
  padding-right: 1rem;
}

h1:before {
  content: '# ';
}

h2:before {
  content: '## ';
}

h3:before {
  content: '### ';
}

a {
  color: var(--yellow);
  text-decoration: none;;
}
a:hover {
  text-decoration: underline;
}

p,
ul,
ol,
li  {
  margin: 0;
  padding: 0;
}

li:before {
  color: var(--red);
  content: '- ';
}

/* Styling classes */
.comment {
  color: var(--comment);
}
</style>
