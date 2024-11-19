import { defineStore } from 'pinia'
import type { ILoginUser } from '~/types/user.interface'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      user: null as ILoginUser | null,
      loggedIn: false as boolean
    }
  },
  persist: true,
  actions: {
    setUser(user: ILoginUser) {
      this.user = user;
      this.loggedIn = true;
    },
    logout() {
      this.user = null;
      this.loggedIn = false;
    },
  }
})