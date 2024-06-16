import {defineStore} from "pinia";

type Account = {
  id: number,
  username: string,
  email: string
}

type Accounts = {
  [key:number]: Account
}

export const useSocialStore = defineStore({
  id: 'social',

  state: () => {
    return {
      accounts: []
    }
  },

  actions: {
    async getAccounts() {

    }
  }
})
