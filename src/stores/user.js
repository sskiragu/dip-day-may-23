import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
    state: () => {
        return { 
            username: '',
            token: '',
            role: ''
        }
    },
    getters: {
        userCredentials: (state) => state.role = 'admin'
    },
    action: {
        authUser(){
            this.username = 'John' //storage e.g token 
        }
    }
})