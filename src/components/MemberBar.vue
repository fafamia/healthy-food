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
                <h2 name="memberName">王小明</h2>
                <p class="member_title">黃金會員</p>
            </div>
        </div>
        <nav class="member_bar_list">
            <ul>
                <li :class="{ 'active': activeView === 'info' }" @click="selectView('info')"> <i
                        class=" fa-solid fa-gear"></i>帳號設定</li>
                <li :class="{ 'active': activeView === 'coupon' }" @click="selectView('coupon')"><i
                        class="fa-solid fa-money-check-dollar"></i>折價券</li>
                <li :class="{ 'active': activeView === 'level' }" @click="selectView('level')"><i
                        class="fa-solid fa-gift"></i>會員禮遇</li>
                <li :class="{ 'active': activeView === 'order' }" @click="selectView('order')"><i
                        class="fa-regular fa-file-lines"></i>訂單查詢</li>
                <li :class="{ 'active': activeView === 'favourite' }" @click="selectView('favourite')"><i
                        class="fa-regular fa-heart"></i>我的最愛</li>
                <li :class="{ 'active': activeView === 'collection' }" @click="selectView('collection')"><i
                        class="fa-regular fa-bookmark"></i>我的收藏</li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeView: 'info',
        }
    },
    methods: {
        selectView(view) {
            this.activeView = view;
            this.$emit('select-view', view);
        },
    },
}
</script>

<style lang="scss">
@import "@/assets/scss/page/_member.scss";
</style>