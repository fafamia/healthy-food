import { defineStore } from 'pinia';
import axios from 'axios';
import MainHeader from "@/components/MainHeader.vue";

export const userStore = defineStore('userStore', {
    state: () => ({
        token: '',
        userData: {},
        isLoggedIn: false,
        showLoginModal: false,
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
            return new Promise((resolve, reject) => {
                const storageToken = localStorage.getItem('userToken');
                console.log("發送的Token:", storageToken);

                axios({
                    method: 'post',
                    url: `${import.meta.env.VITE_API_URL}/front/member/front_checkLogin.php`,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: JSON.stringify({ storageToken: storageToken }),
                })
                    .then(res => {
                        if (res.data.status === 'success') {
                            this.updateUserData(res.data.member);
                            console.log('成功');
                            resolve(true);
                        } else {
                            console.log('失敗');
                            this.clearToken(); // 清除無效token
                            resolve(false);
                        }
                    })
                    .catch(err => {
                        console.log("驗證時發生錯誤", err);
                        reject(err); // 拒絕Promise
                    });
            });
        },
        clearToken() {
            this.token = ''
            this.userData = {}
            localStorage.clear();
        },
        toggleLoginModal(show) {
            this.showLoginModal = show;
            this.toggleModel();
        },
    },
})