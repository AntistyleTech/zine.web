export const usePost = () => {

  function getPosts() {
    return useApi('/posts')
  }

  return {getPosts}
}
