import { defineStore } from 'pinia';
import axios from 'axios';

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
            return new Promise((resolve, reject) => {
                const storageToken = localStorage.getItem('userToken');
                console.log("發送的Token:", storageToken);

                axios({
                    method: 'post',
                    url: 'http://localhost/phpLab/healthy-food-php/front/member/fornt_checkLogin.php',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: JSON.stringify({ storageToken: storageToken }),
                })
                    .then(res => {
                        if (res.data.status === 'success') {
                            this.updateUserData(res.data.member);
                            console.log('成功');
                            resolve(true); // 解析Promise為true
                        } else {
                            console.log('失敗');
                            this.clearToken(); // 清除無效token
                            resolve(false); // 解析Promise為false
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
        }
    },
})