<template>
    <div class="member_bar col-lg-3">
        <div class="member_headshot">
            <div class="member_headshot_img">
                <img src="@/assets/images/member/member_1.png" alt="大頭照">
                <div class="change_photos">
                    <i class="fa-solid fa-camera"></i>
                </div>
            </div>
            <div class="member_headshot_info">
                <h2 name="memberName">{{ member.member_name }}</h2>
                <p class="member_title">
                    {{
                        member.member_level === 1 ? '一般會員' :
                        member.member_level === 2 ? '黃金會員' :
                            member.member_level === 3 ? '白金會員' :
                                '鑽石會員'
                    }}
                </p>
            </div>
        </div>
        <nav class="member_bar_list">
            <ul>
                <li :class="{ 'active': isActive('/member/info') }"><router-link to="/member/info"><i
                            class=" fa-solid fa-gear"></i>帳號設定</router-link></li>
                <li :class="{ 'active': isActive('/member/coupon') }"><router-link to="/member/coupon"><i
                            class="fa-solid fa-money-check-dollar"></i>折價券</router-link></li>
                <li :class="{ 'active': isActive('/member/level') }"><router-link to="/member/level"><i
                            class="fa-solid fa-gift"></i>會員禮遇</router-link>
                </li>
                <li :class="{ 'active': isActive('/member/order') }"><router-link to="/member/order"><i
                            class="fa-regular fa-file-lines"></i>訂單查詢</router-link></li>
                <li :class="{ 'active': isActive('/member/favourite') }"><router-link to="/member/favourite">
                        <i class="fa-regular fa-heart"></i>我的最愛
                    </router-link></li>
                <li :class="{ 'active': isActive('/member/collection') }"><router-link to="/member/collection"><i
                            class="fa-regular fa-bookmark"></i>我的收藏</router-link></li>
            </ul>
        </nav>
    </div>
</template>

<script>
import { userStore } from '../stores/user.js';
export default {
    data() {
        return {
            member: {},
        }
    },
    methods: {
        isActive(path) {
            return this.$route.path === path;
        }
    },
    mounted() {
        const store = userStore();
        this.member = store.userData;
    },
}
</script>

<style lang="scss">
@import "@/assets/scss/page/_member.scss";
</style>