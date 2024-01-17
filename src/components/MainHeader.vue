<template>
    <header class="mainHeader">
        <div class="wrapper">
            <nav>
                <!-- RouterLink 頁面命名規則:首字母大寫，且一定要有2個單字 -->
                <RouterLink to="/about">關於我們</RouterLink>|
                <RouterLink to="/foodmap">食材地圖</RouterLink>|
                <RouterLink to="/products">產品</RouterLink>|
                <RouterLink to="/faq">常見問題</RouterLink>|
                <RouterLink to="/bmi">bmi</RouterLink>|
                <RouterLink to="/bmr">bmr</RouterLink>|
                <RouterLink to="/cal">cal</RouterLink>|
                <RouterLink to="/gi">gi</RouterLink>|
                <RouterLink to="/article">科普文章</RouterLink>|
                <RouterLink to="/cookbook">熱門食譜</RouterLink>|
                <RouterLink to="/contact">聯絡我們</RouterLink>|
                <RouterLink to="/member">會員專區</RouterLink>|
                <RouterLink to="/game">小遊戲</RouterLink>|
                <RouterLink to="/car">購物車</RouterLink>|
                <RouterLink to="/productinfo">產品內頁</RouterLink>|
                <RouterLink to="/articleinfo">文章內頁</RouterLink>|
                <RouterLink to="/cookbookinfo">食譜內頁</RouterLink>
            </nav>
        </div>
    </header>
</template>
<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
    data() {
        return {
            targetValue: 0
        }
    },
    created() { },
    methods: {},
    components: {
        RouterLink,
        RouterView
    },
}
</script>