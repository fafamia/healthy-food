import { defineStore } from 'pinia';

export const userStore = defineStore('userStore', {
    state: () => ({
        token: '',
        userData: {},
    }),
    actions: {
        updateToken(memberNo) {
            if (memberNo) {
                this.token = memberNo
                localStorage.setItem('userToken', memberNo)
            } else {
                this.token = ''
                localStorage.removeItem('userToken')
            }
        },
        updateUserData(memberInfo) {
            this.userData = memberInfo
            console.log(this.userData);
        },
        checkLogin() {
            const storageToken = localStorage.getItem('userToken')
            if (this.token) {
                return this.token
            } else if (storageToken) {
                this.token = storageToken
                return storageToken
            } else {
                return ''
            }
        },
    },
    persist: true,
})