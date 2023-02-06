import { defineStore } from "pinia";

export const useCheckAuth = defineStore("checkAuth", {
    state: () => {
        return {
            user: {
                loggedIn: false,
                data: null
            }
        }
    },
    actions: {
        getUser() {
            return this.user
        },
        registerUser(data) {
            this.user.loggedIn = true
            this.user.data = data
        },
        logoutUser() {
            this.user.loggedIn = false
            this.user.data = null
        }
    }
});
