export interface PostData {
  title: string;
  contentItems: Array<{ type: string; data: any }>;
}

export const usePost = () => {

  function getPost(id: Number) {
    return useApi('/post/' + id);
  }

  function getPosts() {
    return useApi('/post')
  }

  async function createPost(editorData: PostData) {
    const token = useCookie('XSRF-TOKEN');
    const response = await useApi('/post', {
      method: 'POST',
      headers: {
        'X-XSRF-TOKEN': token.value,
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      },
      body: JSON.stringify(editorData),
    });

    return response;
  }

  async function updatePost(id: Number, editorData: PostData) {
    const token = useCookie('XSRF-TOKEN');
    const response = await useApi(`/post/${id}`, {
      method: 'PUT',
      headers: {
        'X-XSRF-TOKEN': token.value,
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      },
      body: JSON.stringify(editorData),
    });

    return response;
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

  return {getPosts, getPost, createPost, updatePost, deletePost, exportPost}
}
