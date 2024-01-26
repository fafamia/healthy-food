<template>
  <!----------- banner ------------>
    <div class="article">
      <div class="article_banner">
        <img src="../../src/assets/images/article/article-banner.png" alt="article-banner">
          <div class="banner_title">
            <h1>科普文章</h1>
          </div>
      </div>
    </div>

  <!----------- breadcrumb ------------>  
    <breadcrumb :breadcrumb="yourBreadcrumbData"></breadcrumb>

  <!----------- tag ------------>   
    <div class="article-tag">
        
    </div>
  <!----------- article-container ------------>
  <div class="article-container container">
    <div class="article-card">
      <img src="/src/assets/images/article/article-1.jpg" alt="飲食健康">
      <h3>飲食健康：探索均衡飲食的奧秘</h3>
      <p>在現代快節奏的生活中，我們經常被琳瑯滿目的食物選擇所包圍。快餐、罐頭、即食食品成了生活中的一部分，但我們是否真正了解這些...</p>
    </div>
    <div class="article-card">
      <img src="/src/assets/images/article/article-2.jpg" alt="飲食健康">
      <h3>睡眠的神奇力量：簡單方法改善您的睡眠品質</h3>
      <p>每天都有一個神奇的時刻，可以為身體和心靈帶來恢復和重生的力量——那就是睡眠。睡眠不僅僅是一種休息，更是一種身心恢復的重要.....</p>
    </div>
    <div class="article-card">
      <img src="/src/assets/images/article/article-3.jpg" alt="飲食健康">
      <h3>運動與心理健康：拓展您的運動視野</h3>
      <p>運動不僅僅是一種鍛煉身體的方式，更是維持心理健康的關鍵。傳統上，我們將運動視為一種強化體能的手段，但其對情緒......</p>
    </div>
    <div class="article-card">
      <img src="/src/assets/images/article/article-4.jpg" alt="飲食健康">
      <h3>抗壓之道：應對現代生活中的壓力</h3>
      <p>現代生活的節奏快速而緊湊，我們時常感受到種種壓力。無論是來自工作、家庭還是個人期望，壓力似乎無處不在...</p>
    </div>
    <div class="article-card">
      <img src="/src/assets/images/article/article-5.jpg" alt="飲食健康">
      <h3>數碼健康：保護您的眼睛和姿勢</h3>
      <p>隨著數碼科技的普及，我們的生活變得更加依賴屏幕。無論是工作還是娛樂，我們都花費大量時間注視電腦、手機.........</p>
    </div>
    <div class="article-card">
      <img src="/src/assets/images/article/article-6.jpg" alt="飲食健康">
      <h3>心靈療癒：探索自然對心理健康的影響</h3>
      <p>在都市塵囂中，我們有時候忘記了大自然的魔力。自然環境對心理健康有著深遠的影響，能夠帶來放鬆、平靜和療癒的效果.........</p>
    </div>

  </div>
  </template>

  <script>
  import { RouterLink, RouterView } from 'vue-router'
  import Breadcrumb from '@/components/Breadcrumb.vue';
  
  export default{
    data() {
      return {
        yourBreadcrumbData: [
          { text: '首頁', to: '/' },
          { text: '科普文章', active: true },
        ],
        isStyled: [false, false, false],
        currentPage: 1,
      };  
    },
    methods:{
      changeStyle(i) {
        this.isStyled = this.isStyled.map((_, index) => index === i);
      },
    },
    components: {
        RouterLink,
        RouterView,
        Breadcrumb,
    },
  }
  </script>

  <style lang="scss">
  @import "@/assets/scss/page/_article.scss";
  </style>

