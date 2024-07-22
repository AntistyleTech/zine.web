import {defineStore} from "pinia";

type User = {
  id: number,
  name: string,
  email: string
}

export const useAuthStore = defineStore({
  id: 'auth',
  persist: true,

  state: () => {
    return {
      user: undefined as User | undefined
    }
  },

  actions: {
    async login(login: string, password: string) {
      await useAuth().login(login, password)
        .then((response) => {
          let data = response
          console.log(data)
          this.user = response as User
        })
        .catch((error) => {
          console.log(error)
        })
        .finally(() => {
          return this.user
        })
    },

    async register(name: string, email: string, password: string) {
      const response = await useAuth().register(name, email, password)
      this.user = response as User
      return this.user
    },

    async logout() {
      await useAuth().logout()
      this.user = undefined
    },

    async me() {
      const response = await useAuth().me()
      this.user = response ? response as unknown as User : undefined
      return this.user
    }

  }
})
