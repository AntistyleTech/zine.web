export const usePost = () => {

  function getPost(id: Number) {
    return useApi('/post/' + id);
  }

  function getPosts() {
    return useApi('/post')
  }

  function exportPost(id: Number, target: any) {
    return useApi('/post/', {
      method: 'POST'
    })
  }

  return {getPosts, getPost, exportPost}
}
