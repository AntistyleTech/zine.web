import { defineStore } from "pinia";
import {useAuth} from "~/composables/useAuth";

type User = {
  id: number,
  username: string,
  email: string
}

export const useAuthStore = defineStore( {
  id : 'auth',

  state: () => {
    return {
      user: undefined as User | undefined
    }
  },

  actions:  {
    async login (login: string, password: string) {
      const response = await useAuth().login(login, password)
      this.user = response as User
      return this.user
    },

    async register(username:string, email: string, password: string) {
      const response = await useAuth().register(username, email, password)
      this.user = response as User
      return this.user
    },

    async logout() {
      await useAuth().logout()
      this.user = undefined
    },

    async me() {
      const response = await useAuth().me()
      this.user =  response ? response as User : undefined
      return this.user
    }

  }
})
