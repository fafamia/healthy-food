<template>
    <div class="bmi">
        <div ref="bmiBanner" class="bmi_banner">
            <img src="../assets/images/BMI/BMI_banner.png" alt="" :width="divWidth">
            <div class="bmi_banner_textbackground">
                <h1>BMI計算</h1>
            </div>
        </div>
        <breadcrumb :breadcrumb="yourBreadcrumbData"></breadcrumb>

        <div class="bmi_countainer">
            <h2>身體質量指數 (BMI) 計算器</h2>
            <p>世界衛生組織建議以身體質量指數 (Body Mass Index, BMI) 來衡量肥胖程度，其計算公式是以體重 (公斤) 除以身高 (公尺) 的平方。</p>
            <div>
                <div class="bmi_inputs">
                    <div class="bmi_input_height">
                        <p>身高(公分)</p>
                        <input placeholder="輸入身高" type="number">
                    </div>
                    <div class="bmi_inputs_weight">
                        <p>體重(公斤)</p>
                        <input placeholder="輸入體重" type="number">
                    </div>
                </div>
                <div class="bmi_standard">
                    <p>BMI &lt; 18.5「體重過輕」</p>
                    <p>18.5 ≤ BMI &lt; 24「健康體重」</p>
                    <p>24 ≤ BMI &lt; 27「體重過重」</p>
                    <p>BMI ≥ 27「肥胖」</p>
                </div>
            </div>
            <button>立即計算</button>
        </div>
    </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import Breadcrumb from '@/components/Breadcrumb.vue';
export default {
    data() {
        return {
            divWidth: 0,
            yourBreadcrumbData: [
                { text: '首頁', to: '/' },
                { text: '健康小幫手', to: '/' },
                { text: 'BMI計算', to: '/' },
                { text: '身體質量指數 (BMI) 計算器', active: true }
            ]
        };
    },
    methods: {
        updateDimensions() {  //抓取banner 並且同步寬度
            this.divWidth = this.$refs.bmiBanner.offsetWidth;
        },
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.updateDimensions); //移除事件聆聽
    },
    mounted() { // Vue 實例創建之後立即被調用
        this.$nextTick(() => {
            this.updateDimensions();
            window.addEventListener('resize', this.updateDimensions); //resize 重新抓取寬度
        });
    },
    components: {
        RouterLink,
        RouterView,
        Breadcrumb,
    },
    }
</script>

