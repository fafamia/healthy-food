<template>
    <div class="bmi">
        <div ref="bmiBanner" class="bmi_banner">
            <img src="../assets/images/bmi/bmi_banner.png.png" alt="" >
            <div class="bmi_banner_textbackground">
                <h1>基礎代謝率計算</h1>
            </div>
        </div>
        <breadcrumb :breadcrumb="yourBreadcrumbData"></breadcrumb>
        <div class="bmi_countainer">
            <h2>基礎代謝率 (BMR) 計算機</h2>
            <p class="bmi_countainer_text">BMR 指人體在休息狀態下，維持新陳代謝所需的熱量，例如：呼吸、器官運作、體溫維持等，即使整天躺著不動也會消耗的最低熱量。BMR 會隨著年紀增加或體重減輕而降低，會隨著肌肉量增加而上升。</p>
            <button class="btn-product">立即計算</button>
        </div>
    </div>



</template>
<script>
import { RouterLink, RouterView } from 'vue-router'
import Breadcrumb from '@/components/Breadcrumb.vue';
export default {
    data() {
        return {
            yourBreadcrumbData: [
                { text: '首頁', to: '/' },
                { text: '基礎代謝率 (BMR) 計算機', active: true }
            ]
        };
    },
    methods: {

    },
    mounted() { // Vue 實例創建之後立即被調用

    },
    components: {
        RouterLink,
        RouterView,
        Breadcrumb,
    },
}
</script>

<style lang="scss">
@import "@/assets/scss/page/_bmr.scss";
</style>


