import createRepository from '~/api/repository.js'

export default (ctx, inject) => {
  const repositoryWithAxios = createRepository(ctx.$axios)

  inject('postRepository', repositoryWithAxios('items/posts'))
}