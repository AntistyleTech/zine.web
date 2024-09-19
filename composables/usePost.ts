export const usePost = () => {

  function getPost(id: Number) {
    return useApi('/post/' + id);
  }

  function getPosts() {
    return useApi('/post')
  }

  function deletePost(id: Number) {
    return useApi('/post/' + id, {
      method: 'DELETE'
    })
  }

  function exportPost(id: Number, target: any) {
    return useApi('/post/', {
      method: 'POST'
    })
  }

  return {getPosts, getPost, deletePost, exportPost}
}
