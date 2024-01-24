<template>
    <div class="bmi">
        <div ref="bmiBanner" class="bmi_banner">
            <img src="../assets/images/bmi/bmi_banner.png.png" alt="" >
            <div class="bmi_banner_textbackground">
                <h1>BMI計算</h1>
            </div>
        </div>
        <breadcrumb :breadcrumb="yourBreadcrumbData"></breadcrumb>
        <div class="bmi_countainer">
            <h2>身體質量指數 (BMI) 計算器</h2>
            <p class="bmi_countainer_text">世界衛生組織建議以身體質量指數 (Body Mass Index, BMI) 來衡量肥胖程度，其計算公式是以體重 (公斤) 除以身高 (公尺) 的平方。</p>
            <div class="bmi_item">
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
            <button class="btn-product">立即計算</button>
        </div>

        <div class="healthy_recommend">
            <h3>身高 180 公分 體重 80 公斤您的 BMI 24.7 體重過重</h3>
            <p>肥胖容易引起疾病，您得要多多注意自己的健康囉！</p>
            <h3>為你推薦專屬商品</h3>
            <p>以下食品的熱量不僅符合您的目前BMI的需求，GI值也非常健康！有效穩定血糖、幫助減脂！！！</p>
            <div class="recommend_wall">
                <div class="recommend_card"></div>
                <div class="recommend_card"></div>
                <div class="recommend_card"></div>
            </div>
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
                { text: '身體質量指數 (BMI) 計算器', active: true }
            ],
            
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


