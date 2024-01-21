<template>
  <div class="products">
    <div class="product_banner">
      <img src="../../src/assets/images/product/banner.png" alt="product_banner">
      <div class="banner_title">
        <h1>健康小舖</h1>
      </div>

    </div>
    <breadcrumb :breadcrumb="yourBreadcrumbData"></breadcrumb>
    <div class="product-list container">
      <aside>
        <li>
          <div class="lunchbox">調理包</div>
          <hr>
        </li>
        <li>
          <div class="freshfood" @click="toggle = !toggle">
          <h3>生鮮食材</h3> 
          <i class="fa-solid fa-angle-down" style="color: #e73f14;"></i>
          </div>
          <hr>
          <div class="oil" v-if="!toggle">雜糧、油品</div>
          <div class="egg" v-if="!toggle">蛋、豆</div>
          <div class="fish" v-if="!toggle">魚、肉</div>
          <div class="vegetable" v-if="!toggle">蔬菜</div>
          <hr v-if="!toggle">
        </li>
      </aside>
      <div class="row items">

        <div v-for="item in displayData" :key="item.id" class="vegetable_card col-12 col-xl-3">

          <p class="product_tag">#NEW</p>
          <div class="product_card_img">
            <!-- <img :src="getImage(item)" height="200"> -->
            <img src="../../src/assets/images/product/vegetable_cover.png" alt="vegetable_cover">
          </div>
          <p class="vegetable_title">冷凍蔬菜</p>
          <p class="vegetable_price">$ 330</p>
          <router-link to="/productinfo" class="btn-product">查看商品詳情</router-link>

        </div>
        <p class="vegetable_title">{{ item.prod_name }}</p>
        <p class="vegetable_price">$ {{ item.prod_sellingprice }}</p>
        <router-link to="/productinfo" class="btn-product">查看商品詳情</router-link>
      </div>
    </div>

  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import Breadcrumb from '@/components/Breadcrumb.vue';
import axios from 'axios';

export default {
  data() {
    return {
      // 麵包屑數據
      yourBreadcrumbData: [
        { text: '首頁', to: '/' },
        { text: '健康小舖', active: true },
      ],
      displayData: [],
      toggle: true,

    };
  },
  components: {
    RouterLink,
    RouterView,
    Breadcrumb,
  },
  created() {
    this.axiosGetData()
  },
  
  methods: {
    axiosGetData() {
      axios.get('https://tibamef2e.com/chd103/g1/phps/shop.php')
        .then(res => {
          if (res && res.data) {
            // this.responseData = res.data
            this.displayData = res.data
          }
        })
    },
    // getImage(item) {
    //   return `https://tibamef2e.com/chd103/g1/image/productimage/${item.prod_img}`;
    // },

  },

}
</script>
