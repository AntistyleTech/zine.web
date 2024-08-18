export function usePost() {

  const {$api} = useNuxtApp()

  const getPosts = () => {
    return $api('/post')
  }

  const getPost = (id: Number) => {
    return $api('/post/' + id)
  }

  const createPost = (createPost: Object) => {
    return $api('/post', {
      method: 'POST',
      body: createPost
    })
  }

  const updatePost = (updatePost: Object) => {
    return $api('/post', {
      method: 'PUT',
      body: updatePost
    });
  }

  const deletePost = (id: Number) => {
    return $api('/post', {method: 'DELETE'})
  }

  return {getPosts}
}
