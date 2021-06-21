<template>
  <div class="posts">
    <div class="post">
      <img src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1348&q=80" alt="" />
      <div class="post-text">
        <h3>Ein sehr intressanter Page Title</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis p
        </p>
      </div>
    </div>

    <div class="post">
      <img src="https://images.unsplash.com/photo-1606639386779-99d873cac706?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="" />
      <div class="post-text">
        <h3>Ein sehr intressanter Page Title</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis p <a href="#">[mehr]</a>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.posts {
  display: grid;
  grid-gap: 3rem 5rem;
}

@media (min-width: 600px) {
  .posts {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1000px) {
  .posts {
    grid-template-columns: repeat(3, 1fr);
  }
}

.post {
  background-color: var(--gray);
  border: 2px solid;
  border-image: linear-gradient(135deg, var(--secondary), var(--primary));
  border-image-slice: 1;
}

.post h3 {
  box-shadow: 0 0 1pxx var(--gray);
  margin-top: -54px;
}

.post-text {
  padding: 1rem;
}

.post img {
  aspect-ratio: 16 / 9;
  object-fit: cover;
  width: 100%;
}
</style>
