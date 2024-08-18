import {defineStore} from "pinia";

type Post = {
  id: number
  title: string,
  meta: string | null
}

type Posts = {
  data: Post[]
}

export const useContentStore = defineStore({
  id: 'content',
  persist: false,

  state: () => {
    return {
      posts: [] as Posts | undefined
    }
  },
  actions: {
  //   async getPosts() {
  //       const {data: posts} = await useAsyncData("posts", () => usePost().getPosts())
  //       console.log(posts)
  //       return posts.value
  //     // this.posts = data as Posts
  //     //   console.log(this.posts)
  //
  //   }

    // async getPosts() {
    //   const {data} = await useFetch(usePost().getPosts())
    //   console.log(data)
    // }
    // async getPosts() {
    //   const { data: posts } = await useLazyAsyncData('posts', async () => {
    //     return await Promise.all(usePost().getPosts())
    //   })
    // }

   }

})