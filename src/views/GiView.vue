<template>
  <div class="GI">
    
      <breadcrumb :breadcrumb="yourBreadcrumbData"></breadcrumb>
      <h1>GI</h1>









      
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import Breadcrumb from '@/components/Breadcrumb.vue';
export default {
  data() {
      return {
          // 麵包屑數據
          yourBreadcrumbData: [
              { text: '首頁', to: '/' },
              { text: '健康小幫手', to: '/' },
              { text: 'BMI計算', to: '/' },
              { text: '身體質量指數 (BMI) 計算器', active: true }
          ]
      };
  },
  methods: {},
  mounted(){},
  components: {
      RouterLink,
      RouterView,
      Breadcrumb,
  },
  }
</script>

