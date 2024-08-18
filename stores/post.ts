import {defineStore} from "pinia";

export const usePostStore = defineStore({
  id: 'post',

  state: () => {
    return {
      posts: [] as Posts | undefined
    }
  },

  actions: {
    async getPost(id: integer) {

    }
  }
})